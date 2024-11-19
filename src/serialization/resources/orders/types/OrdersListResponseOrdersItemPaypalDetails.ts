/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const OrdersListResponseOrdersItemPaypalDetails: core.serialization.ObjectSchema<
    serializers.OrdersListResponseOrdersItemPaypalDetails.Raw,
    Webflow.OrdersListResponseOrdersItemPaypalDetails
> = core.serialization.object({
    orderId: core.serialization.string().optional(),
    payerId: core.serialization.string().optional(),
    captureId: core.serialization.string().optional(),
    refundId: core.serialization.string().optional(),
    refundReason: core.serialization.string().optional(),
    disputeId: core.serialization.string().optional(),
});

export declare namespace OrdersListResponseOrdersItemPaypalDetails {
    interface Raw {
        orderId?: string | null;
        payerId?: string | null;
        captureId?: string | null;
        refundId?: string | null;
        refundReason?: string | null;
        disputeId?: string | null;
    }
}
