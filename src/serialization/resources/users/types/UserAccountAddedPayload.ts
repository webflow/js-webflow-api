/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { UserAccountAddedPayloadTriggerType } from "./UserAccountAddedPayloadTriggerType";
import { UserAccountAddedPayloadPayload } from "./UserAccountAddedPayloadPayload";

export const UserAccountAddedPayload: core.serialization.ObjectSchema<
    serializers.UserAccountAddedPayload.Raw,
    Webflow.UserAccountAddedPayload
> = core.serialization.object({
    triggerType: UserAccountAddedPayloadTriggerType.optional(),
    payload: UserAccountAddedPayloadPayload.optional(),
});

export declare namespace UserAccountAddedPayload {
    interface Raw {
        triggerType?: UserAccountAddedPayloadTriggerType.Raw | null;
        payload?: UserAccountAddedPayloadPayload.Raw | null;
    }
}
