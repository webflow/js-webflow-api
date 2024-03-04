/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Webflow from "../../../../api";
import * as core from "../../../../core";

export const UsersUpdateRequestData: core.serialization.ObjectSchema<
    serializers.UsersUpdateRequestData.Raw,
    Webflow.UsersUpdateRequestData
> = core.serialization.object({
    name: core.serialization.string().optional(),
    acceptPrivacy: core.serialization.property("accept-privacy", core.serialization.boolean().optional()),
    acceptCommunications: core.serialization.property("accept-communications", core.serialization.boolean().optional()),
});

export declare namespace UsersUpdateRequestData {
    interface Raw {
        name?: string | null;
        "accept-privacy"?: boolean | null;
        "accept-communications"?: boolean | null;
    }
}