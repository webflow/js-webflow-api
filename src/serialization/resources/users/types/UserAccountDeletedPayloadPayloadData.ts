/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { UserAccountDeletedPayloadPayloadDataData } from "./UserAccountDeletedPayloadPayloadDataData";

export const UserAccountDeletedPayloadPayloadData: core.serialization.ObjectSchema<
    serializers.UserAccountDeletedPayloadPayloadData.Raw,
    Webflow.UserAccountDeletedPayloadPayloadData
> = core.serialization.object({
    data: UserAccountDeletedPayloadPayloadDataData.optional(),
});

export declare namespace UserAccountDeletedPayloadPayloadData {
    interface Raw {
        data?: UserAccountDeletedPayloadPayloadDataData.Raw | null;
    }
}
