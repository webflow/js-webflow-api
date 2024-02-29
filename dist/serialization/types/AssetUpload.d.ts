/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const AssetUpload: core.serialization.ObjectSchema<serializers.AssetUpload.Raw, Webflow.AssetUpload>;
export declare namespace AssetUpload {
    interface Raw {
        uploadDetails?: serializers.AssetUploadUploadDetails.Raw | null;
        id?: string | null;
        contentType?: string | null;
        parentFolder?: string | null;
        hostedUrl?: string | null;
        uploadUrl?: string | null;
        assetUrl?: string | null;
        originalFileName?: string | null;
        lastUpdated?: string | null;
        createdOn?: string | null;
    }
}
