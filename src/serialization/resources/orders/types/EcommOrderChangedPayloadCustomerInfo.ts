/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommOrderChangedPayloadCustomerInfo: core.serialization.ObjectSchema<
    serializers.EcommOrderChangedPayloadCustomerInfo.Raw,
    Webflow.EcommOrderChangedPayloadCustomerInfo
> = core.serialization.object({
    fullName: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
});

export declare namespace EcommOrderChangedPayloadCustomerInfo {
    interface Raw {
        fullName?: string | null;
        email?: string | null;
    }
}
