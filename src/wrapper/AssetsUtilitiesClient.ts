import urlJoin from "url-join";
import * as Webflow from "../api";
import { Assets } from "../api/resources/assets/client/Client";
import * as core from "../core";
import * as environments from "../environments";
import * as errors from "../errors";
import * as serializers from "../serialization";
import crypto from "crypto";
import fetch from "node-fetch";
import FormData from 'form-data';
import { Readable } from 'stream';

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
    file: ArrayBuffer | ReadableStream | string;

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
        // if (siteId) {
        //     throw new errors.WebflowError({
        //         statusCode: 400,
        //         body: "a test",
        //     });
        // }
        /** 1. Generate the hash */
        const getBufferFromUrl = async (url: string): Promise<ArrayBuffer> => {
            const response = await fetch(url);
            const buffer = await response.arrayBuffer();
            console.log("BUF", buffer);
            return buffer;
            // return crypto.createHash("md5").update(Buffer.from(buffer)).digest("hex");
        };
        const file = request.file;
        let tempBuffer: Buffer | null = null;
        if (typeof file === 'string') {
            const arrBuffer = await getBufferFromUrl(file);
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

        console.log("Step 2 done");

        /** 3. Upload to AWS */
        const wfUploadedAsset = await createWfAssetMetadata();

        console.log("Step 2.5 done", wfUploadedAsset);
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
        const formDataToUpload = new FormData();
        Object.keys(transformedUploadHeaders).forEach((key) => {
            formDataToUpload.append(key, transformedUploadHeaders[key]);
        });
        console.log("STEP 2.6 done");
        const newBlob = Readable.from(tempBuffer);
        console.log("NEW BLOB");
        formDataToUpload.append("file", newBlob, {
            filename: fileName,
            contentType: wfUploadedAsset.contentType,
        });
        console.log("STEP 2.75 done");
        // TOOO: SOMETHING WEIRD HERE.. NOT UPLOADING TO S3 PROPERLY
        const uploadResponse = await fetch(uploadUrl, {
            method: 'POST',
            body: formDataToUpload,
            headers: {...formDataToUpload.getHeaders()},
        });
        console.log("UPLOAD RESPONSE", JSON.stringify(uploadResponse));
        return wfUploadedAsset;
    }
}