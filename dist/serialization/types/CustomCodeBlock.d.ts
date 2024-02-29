/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const CustomCodeBlock: core.serialization.ObjectSchema<serializers.CustomCodeBlock.Raw, Webflow.CustomCodeBlock>;
export declare namespace CustomCodeBlock {
    interface Raw {
        siteId?: string | null;
        pageId?: string | null;
        type?: serializers.CustomCodeBlockType.Raw | null;
        scripts?: serializers.ScriptApply.Raw[] | null;
        createdOn?: string | null;
        lastUpdated?: string | null;
    }
}
