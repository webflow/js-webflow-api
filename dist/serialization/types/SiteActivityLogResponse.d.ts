/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const SiteActivityLogResponse: core.serialization.ObjectSchema<serializers.SiteActivityLogResponse.Raw, Webflow.SiteActivityLogResponse>;
export declare namespace SiteActivityLogResponse {
    interface Raw {
        items?: serializers.SiteActivityLogItem.Raw[] | null;
        pagination?: serializers.Pagination.Raw | null;
    }
}
