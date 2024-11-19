/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const OrdersListResponseOrdersItemShippingAddressType: core.serialization.Schema<
    serializers.OrdersListResponseOrdersItemShippingAddressType.Raw,
    Webflow.OrdersListResponseOrdersItemShippingAddressType
> = core.serialization.enum_(["shipping", "billing"]);

export declare namespace OrdersListResponseOrdersItemShippingAddressType {
    type Raw = "shipping" | "billing";
}
