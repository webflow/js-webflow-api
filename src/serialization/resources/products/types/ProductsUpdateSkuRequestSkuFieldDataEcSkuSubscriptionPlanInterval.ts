/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval: core.serialization.Schema<
    serializers.ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval.Raw,
    Webflow.ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval
> = core.serialization.enum_(["day", "week", "month", "year"]);

export declare namespace ProductsUpdateSkuRequestSkuFieldDataEcSkuSubscriptionPlanInterval {
    type Raw = "day" | "week" | "month" | "year";
}
