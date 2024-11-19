/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { OrdersUpdateFulfillResponseAllAddressesItemType } from "./OrdersUpdateFulfillResponseAllAddressesItemType";
import { OrdersUpdateFulfillResponseAllAddressesItemJapanType } from "./OrdersUpdateFulfillResponseAllAddressesItemJapanType";

export const OrdersUpdateFulfillResponseAllAddressesItem: core.serialization.ObjectSchema<
    serializers.OrdersUpdateFulfillResponseAllAddressesItem.Raw,
    Webflow.OrdersUpdateFulfillResponseAllAddressesItem
> = core.serialization.object({
    type: OrdersUpdateFulfillResponseAllAddressesItemType.optional(),
    japanType: OrdersUpdateFulfillResponseAllAddressesItemJapanType.optional(),
    addressee: core.serialization.string().optional(),
    line1: core.serialization.string().optional(),
    line2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    postalCode: core.serialization.string().optional(),
});

export declare namespace OrdersUpdateFulfillResponseAllAddressesItem {
    interface Raw {
        type?: OrdersUpdateFulfillResponseAllAddressesItemType.Raw | null;
        japanType?: OrdersUpdateFulfillResponseAllAddressesItemJapanType.Raw | null;
        addressee?: string | null;
        line1?: string | null;
        line2?: string | null;
        city?: string | null;
        state?: string | null;
        country?: string | null;
        postalCode?: string | null;
    }
}
