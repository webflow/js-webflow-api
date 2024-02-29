/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const AssetFolder: core.serialization.ObjectSchema<serializers.AssetFolder.Raw, Webflow.AssetFolder>;
export declare namespace AssetFolder {
    interface Raw {
        displayName?: string | null;
        id?: string | null;
        parentFolder?: string | null;
        assets?: string[] | null;
        siteId?: string | null;
        createdOn?: string | null;
        lastUpdated?: string | null;
    }
}
