import urlJoin from "url-join";
import * as Webflow from "../api";
import { Assets } from "../api/resources/assets/client/Client";
import * as core from "../core";
import * as environments from "../environments";
import crypto from "crypto";
import fetch from "node-fetch";
import FormDataConstructor from 'form-data';

export declare namespace AssetsUtilities {
    interface Options {
        environment?: core.Supplier<environments.WebflowEnvironment | string>;
        accessToken: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

interface TestAssetUploadRequest {
    /**
     * File to upload via various formats
     */
    file: ArrayBuffer  | string;

    /**
     * The file MIME type
     */
    mimeType?: string;

    /**
     * Name of the file
     */
    fileName: string;

    /**
     * Name of the parent folder to upload to
     */
    parentFolder?: string;
}

// Utilities class for Assets to add custom helper methods to assist in managing Webflow Assets
export class Client extends Assets {
    constructor(protected readonly _options: AssetsUtilities.Options) {
        super(_options);
    }

    private async _getBufferFromUrl(url: string): Promise<ArrayBuffer> {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        return buffer;
    }

    /**
     * Create the Asset metadata in Webflow, and immediately upload it to the S3 bucket on behalf of the user to simplify the 2-step process
     * 
     * @param siteId 
     * @param request 
     * @param requestOptions 
     * @returns 
     */
    public async createAndUpload(
        siteId: string,
        request: TestAssetUploadRequest,
        requestOptions?: Assets.RequestOptions
    ): Promise<Webflow.AssetUpload> {
        /** 1. Generate the hash */
        const file = request.file;
        let tempBuffer: Buffer | null = null;
        if (typeof file === 'string') {
            const arrBuffer = await this._getBufferFromUrl(file);
            tempBuffer = Buffer.from(arrBuffer);
        } else if (file instanceof ArrayBuffer) {
            tempBuffer = Buffer.from(file);
        }
        if (tempBuffer === null) {
            throw new Error('Invalid file');
        }
        const hash = crypto.createHash("md5").update(Buffer.from(tempBuffer)).digest("hex");
        const fileName = request.fileName;

        const wfUploadRequest = {
            fileName,
            fileHash: hash,
        };

        /** 2. Create the Asset Metadata in Webflow */
        const createWfAssetMetadata = async () => {
            return await this.create(siteId, wfUploadRequest, requestOptions);
        };

        /** 3. Create FormData with S3 bucket signature */
        const wfUploadedAsset = await createWfAssetMetadata();

        const wfUploadDetails = wfUploadedAsset.uploadDetails!;
        const uploadUrl = wfUploadedAsset.uploadUrl as string;
        // Temp workaround since headers from response are being camelCased and we need them to be exact when sending to S3
        const headerMappings = {
            'xAmzAlgorithm': 'X-Amz-Algorithm',
            'xAmzDate': 'X-Amz-Date',
            'xAmzCredential': 'X-Amz-Credential',
            'xAmzSignature': 'X-Amz-Signature',
            'successActionStatus': 'success_action_status',
            'contentType': 'Content-Type',
            'cacheControl': 'Cache-Control',
        };
        const transformedUploadHeaders = Object.keys(wfUploadDetails).reduce((acc: Record<string, any>, key) => {
            const mappedKey = headerMappings[key as keyof typeof headerMappings] || key;
            acc[mappedKey] = wfUploadDetails[key as keyof typeof headerMappings ];
            return acc;
        }, {});
        const formDataToUpload = new FormDataConstructor();
        Object.keys(transformedUploadHeaders).forEach((key) => {
            formDataToUpload.append(key, transformedUploadHeaders[key]);
        });

        if (!Buffer.isBuffer(tempBuffer)) {
            throw new Error("Invalid Buffer: Expected a Buffer instance from file");
        }

        formDataToUpload.append("file", tempBuffer, {
            filename: fileName,
            contentType: wfUploadedAsset.contentType || "application/octet-stream",
        });

        /** 4. Upload to S3  */
        await fetch(uploadUrl, {
            method: 'POST',
            body: formDataToUpload,
            headers: {...formDataToUpload.getHeaders()},
        });

        return wfUploadedAsset;
    }
}