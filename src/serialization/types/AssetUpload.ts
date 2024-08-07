/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { AssetUploadUploadDetails } from "./AssetUploadUploadDetails";

export const AssetUpload: core.serialization.ObjectSchema<serializers.AssetUpload.Raw, Webflow.AssetUpload> =
    core.serialization.object({
        uploadDetails: AssetUploadUploadDetails.optional(),
        contentType: core.serialization.string().optional(),
        id: core.serialization.string().optional(),
        parentFolder: core.serialization.string().optional(),
        uploadUrl: core.serialization.string().optional(),
        assetUrl: core.serialization.string().optional(),
        hostedUrl: core.serialization.string().optional(),
        originalFileName: core.serialization.string().optional(),
        createdOn: core.serialization.date().optional(),
        lastUpdated: core.serialization.date().optional(),
    });

export declare namespace AssetUpload {
    interface Raw {
        uploadDetails?: AssetUploadUploadDetails.Raw | null;
        contentType?: string | null;
        id?: string | null;
        parentFolder?: string | null;
        uploadUrl?: string | null;
        assetUrl?: string | null;
        hostedUrl?: string | null;
        originalFileName?: string | null;
        createdOn?: string | null;
        lastUpdated?: string | null;
    }
}
