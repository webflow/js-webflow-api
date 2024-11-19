/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommOrderChangedPayloadAllAddressesItemType: core.serialization.Schema<
    serializers.EcommOrderChangedPayloadAllAddressesItemType.Raw,
    Webflow.EcommOrderChangedPayloadAllAddressesItemType
> = core.serialization.enum_(["shipping", "billing"]);

export declare namespace EcommOrderChangedPayloadAllAddressesItemType {
    type Raw = "shipping" | "billing";
}
