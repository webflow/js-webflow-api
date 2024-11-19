/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlanInterval } from "./ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlanInterval";

export const ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan: core.serialization.ObjectSchema<
    serializers.ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan.Raw,
    Webflow.ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan
> = core.serialization.object({
    interval: ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlanInterval.optional(),
    frequency: core.serialization.number().optional(),
    trial: core.serialization.number().optional(),
});

export declare namespace ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan {
    interface Raw {
        interval?: ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlanInterval.Raw | null;
        frequency?: number | null;
        trial?: number | null;
    }
}
