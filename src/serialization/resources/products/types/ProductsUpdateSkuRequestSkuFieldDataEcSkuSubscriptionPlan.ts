/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval } from "./ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval";

export const ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlan: core.serialization.ObjectSchema<
    serializers.ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlan.Raw,
    Webflow.ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlan
> = core.serialization.object({
    interval: ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval.optional(),
    frequency: core.serialization.number().optional(),
    trial: core.serialization.number().optional(),
});

export declare namespace ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlan {
    interface Raw {
        interval?: ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval.Raw | null;
        frequency?: number | null;
        trial?: number | null;
    }
}
