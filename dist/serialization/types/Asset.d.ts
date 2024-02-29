/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const Asset: core.serialization.ObjectSchema<serializers.Asset.Raw, Webflow.Asset>;
export declare namespace Asset {
    interface Raw {
        id?: string | null;
        contentType?: string | null;
        size?: number | null;
        siteId?: string | null;
        hostedUrl?: string | null;
        originalFileName?: string | null;
        displayName?: string | null;
        lastUpdated?: string | null;
        createdOn?: string | null;
        variants?: serializers.AssetVariant.Raw[] | null;
    }
}
