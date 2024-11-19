/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItemStatus } from "./ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItemStatus";

export const ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItem: core.serialization.ObjectSchema<
    serializers.ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItem.Raw,
    Webflow.ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItem
> = core.serialization.object({
    platform: core.serialization.stringLiteral("stripe").optional(),
    id: core.serialization.string().optional(),
    status: ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItemStatus.optional(),
});

export declare namespace ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItem {
    interface Raw {
        platform?: "stripe" | null;
        id?: string | null;
        status?: ProductsCreateSkuResponseSkusItemFieldDataEcSkuSubscriptionPlanPlansItemStatus.Raw | null;
    }
}
