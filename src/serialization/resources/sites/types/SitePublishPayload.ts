/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { SitePublishPayloadPayload } from "./SitePublishPayloadPayload";

export const SitePublishPayload: core.serialization.ObjectSchema<
    serializers.SitePublishPayload.Raw,
    Webflow.SitePublishPayload
> = core.serialization.object({
    triggerType: core.serialization.string().optional(),
    payload: SitePublishPayloadPayload.optional(),
});

export declare namespace SitePublishPayload {
    interface Raw {
        triggerType?: string | null;
        payload?: SitePublishPayloadPayload.Raw | null;
    }
}
