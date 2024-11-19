/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const OrdersGetResponseStripeDetails: core.serialization.ObjectSchema<
    serializers.OrdersGetResponseStripeDetails.Raw,
    Webflow.OrdersGetResponseStripeDetails
> = core.serialization.object({
    subscriptionId: core.serialization.string().optional(),
    paymentMethod: core.serialization.string().optional(),
    paymentIntentId: core.serialization.string().optional(),
    customerId: core.serialization.string().optional(),
    chargeId: core.serialization.string().optional(),
    disputeId: core.serialization.string().optional(),
    refundId: core.serialization.string().optional(),
    refundReason: core.serialization.string().optional(),
});

export declare namespace OrdersGetResponseStripeDetails {
    interface Raw {
        subscriptionId?: string | null;
        paymentMethod?: string | null;
        paymentIntentId?: string | null;
        customerId?: string | null;
        chargeId?: string | null;
        disputeId?: string | null;
        refundId?: string | null;
        refundReason?: string | null;
    }
}
