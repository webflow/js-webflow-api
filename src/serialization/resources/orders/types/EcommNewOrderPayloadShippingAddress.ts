/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { EcommNewOrderPayloadShippingAddressType } from "./EcommNewOrderPayloadShippingAddressType";
import { EcommNewOrderPayloadShippingAddressJapanType } from "./EcommNewOrderPayloadShippingAddressJapanType";

export const EcommNewOrderPayloadShippingAddress: core.serialization.ObjectSchema<
    serializers.EcommNewOrderPayloadShippingAddress.Raw,
    Webflow.EcommNewOrderPayloadShippingAddress
> = core.serialization.object({
    type: EcommNewOrderPayloadShippingAddressType.optional(),
    japanType: EcommNewOrderPayloadShippingAddressJapanType.optional(),
    addressee: core.serialization.string().optional(),
    line1: core.serialization.string().optional(),
    line2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    postalCode: core.serialization.string().optional(),
});

export declare namespace EcommNewOrderPayloadShippingAddress {
    interface Raw {
        type?: EcommNewOrderPayloadShippingAddressType.Raw | null;
        japanType?: EcommNewOrderPayloadShippingAddressJapanType.Raw | null;
        addressee?: string | null;
        line1?: string | null;
        line2?: string | null;
        city?: string | null;
        state?: string | null;
        country?: string | null;
        postalCode?: string | null;
    }
}
