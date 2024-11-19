/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { UserAccountUpdatedPayloadTriggerType } from "./UserAccountUpdatedPayloadTriggerType";
import { UserAccountUpdatedPayloadPayload } from "./UserAccountUpdatedPayloadPayload";

export const UserAccountUpdatedPayload: core.serialization.ObjectSchema<
    serializers.UserAccountUpdatedPayload.Raw,
    Webflow.UserAccountUpdatedPayload
> = core.serialization.object({
    triggerType: UserAccountUpdatedPayloadTriggerType.optional(),
    payload: UserAccountUpdatedPayloadPayload.optional(),
});

export declare namespace UserAccountUpdatedPayload {
    interface Raw {
        triggerType?: UserAccountUpdatedPayloadTriggerType.Raw | null;
        payload?: UserAccountUpdatedPayloadPayload.Raw | null;
    }
}
