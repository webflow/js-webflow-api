/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const OrdersListResponseOrdersItemBillingAddressType: core.serialization.Schema<
    serializers.OrdersListResponseOrdersItemBillingAddressType.Raw,
    Webflow.OrdersListResponseOrdersItemBillingAddressType
> = core.serialization.enum_(["shipping", "billing"]);

export declare namespace OrdersListResponseOrdersItemBillingAddressType {
    type Raw = "shipping" | "billing";
}
