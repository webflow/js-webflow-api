/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { PageMetadataUpdatedPayloadPayload } from "./PageMetadataUpdatedPayloadPayload";

export const PageMetadataUpdatedPayload: core.serialization.ObjectSchema<
    serializers.PageMetadataUpdatedPayload.Raw,
    Webflow.PageMetadataUpdatedPayload
> = core.serialization.object({
    triggerType: core.serialization.string().optional(),
    payload: PageMetadataUpdatedPayloadPayload.optional(),
});

export declare namespace PageMetadataUpdatedPayload {
    interface Raw {
        triggerType?: string | null;
        payload?: PageMetadataUpdatedPayloadPayload.Raw | null;
    }
}
