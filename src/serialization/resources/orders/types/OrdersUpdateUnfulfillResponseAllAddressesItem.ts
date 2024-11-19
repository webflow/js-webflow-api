/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { OrdersUpdateUnfulfillResponseAllAddressesItemType } from "./OrdersUpdateUnfulfillResponseAllAddressesItemType";
import { OrdersUpdateUnfulfillResponseAllAddressesItemJapanType } from "./OrdersUpdateUnfulfillResponseAllAddressesItemJapanType";

export const OrdersUpdateUnfulfillResponseAllAddressesItem: core.serialization.ObjectSchema<
    serializers.OrdersUpdateUnfulfillResponseAllAddressesItem.Raw,
    Webflow.OrdersUpdateUnfulfillResponseAllAddressesItem
> = core.serialization.object({
    type: OrdersUpdateUnfulfillResponseAllAddressesItemType.optional(),
    japanType: OrdersUpdateUnfulfillResponseAllAddressesItemJapanType.optional(),
    addressee: core.serialization.string().optional(),
    line1: core.serialization.string().optional(),
    line2: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    postalCode: core.serialization.string().optional(),
});

export declare namespace OrdersUpdateUnfulfillResponseAllAddressesItem {
    interface Raw {
        type?: OrdersUpdateUnfulfillResponseAllAddressesItemType.Raw | null;
        japanType?: OrdersUpdateUnfulfillResponseAllAddressesItemJapanType.Raw | null;
        addressee?: string | null;
        line1?: string | null;
        line2?: string | null;
        city?: string | null;
        state?: string | null;
        country?: string | null;
        postalCode?: string | null;
    }
}
