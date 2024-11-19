/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommNewOrderPayloadShippingAddressType: core.serialization.Schema<
    serializers.EcommNewOrderPayloadShippingAddressType.Raw,
    Webflow.EcommNewOrderPayloadShippingAddressType
> = core.serialization.enum_(["shipping", "billing"]);

export declare namespace EcommNewOrderPayloadShippingAddressType {
    type Raw = "shipping" | "billing";
}
