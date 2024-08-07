/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { OrderTotalsExtrasItemType } from "./OrderTotalsExtrasItemType";
import { OrderPrice } from "./OrderPrice";

export const OrderTotalsExtrasItem: core.serialization.ObjectSchema<
    serializers.OrderTotalsExtrasItem.Raw,
    Webflow.OrderTotalsExtrasItem
> = core.serialization.object({
    type: OrderTotalsExtrasItemType.optional(),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    price: OrderPrice.optional(),
});

export declare namespace OrderTotalsExtrasItem {
    interface Raw {
        type?: OrderTotalsExtrasItemType.Raw | null;
        name?: string | null;
        description?: string | null;
        price?: OrderPrice.Raw | null;
    }
}
