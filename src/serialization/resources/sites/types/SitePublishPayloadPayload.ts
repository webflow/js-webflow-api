/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const SitePublishPayloadPayload: core.serialization.ObjectSchema<
    serializers.SitePublishPayloadPayload.Raw,
    Webflow.SitePublishPayloadPayload
> = core.serialization.object({
    siteId: core.serialization.string().optional(),
    publishedOn: core.serialization.date().optional(),
    domains: core.serialization.list(core.serialization.string()).optional(),
    publishedBy: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace SitePublishPayloadPayload {
    interface Raw {
        siteId?: string | null;
        publishedOn?: string | null;
        domains?: string[] | null;
        publishedBy?: Record<string, unknown> | null;
    }
}
