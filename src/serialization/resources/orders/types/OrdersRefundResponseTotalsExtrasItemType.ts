/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const OrdersRefundResponseTotalsExtrasItemType: core.serialization.Schema<
    serializers.OrdersRefundResponseTotalsExtrasItemType.Raw,
    Webflow.OrdersRefundResponseTotalsExtrasItemType
> = core.serialization.enum_(["discount", "discount-shipping", "shipping", "tax"]);

export declare namespace OrdersRefundResponseTotalsExtrasItemType {
    type Raw = "discount" | "discount-shipping" | "shipping" | "tax";
}
