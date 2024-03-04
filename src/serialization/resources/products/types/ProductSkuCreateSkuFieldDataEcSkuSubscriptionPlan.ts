/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Webflow from "../../../../api";
import * as core from "../../../../core";

export const ProductSkuCreateSkuFieldDataEcSkuSubscriptionPlan: core.serialization.ObjectSchema<
    serializers.ProductSkuCreateSkuFieldDataEcSkuSubscriptionPlan.Raw,
    Webflow.ProductSkuCreateSkuFieldDataEcSkuSubscriptionPlan
> = core.serialization.object({
    interval: core.serialization
        .lazy(async () => (await import("../../..")).ProductSkuCreateSkuFieldDataEcSkuSubscriptionPlanInterval)
        .optional(),
    frequency: core.serialization.number().optional(),
    trial: core.serialization.number().optional(),
});

export declare namespace ProductSkuCreateSkuFieldDataEcSkuSubscriptionPlan {
    interface Raw {
        interval?: serializers.ProductSkuCreateSkuFieldDataEcSkuSubscriptionPlanInterval.Raw | null;
        frequency?: number | null;
        trial?: number | null;
    }
}
