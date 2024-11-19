/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommOrderChangedPayloadShippingAddressType: core.serialization.Schema<
    serializers.EcommOrderChangedPayloadShippingAddressType.Raw,
    Webflow.EcommOrderChangedPayloadShippingAddressType
> = core.serialization.enum_(["shipping", "billing"]);

export declare namespace EcommOrderChangedPayloadShippingAddressType {
    type Raw = "shipping" | "billing";
}
