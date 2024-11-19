/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsCreateSkuRequestSkusItemFieldDataPrice } from "./ProductsCreateSkuRequestSkusItemFieldDataPrice";
import { ProductsCreateSkuRequestSkusItemFieldDataCompareAtPrice } from "./ProductsCreateSkuRequestSkusItemFieldDataCompareAtPrice";
import { ProductsCreateSkuRequestSkusItemFieldDataEcSkuBillingMethod } from "./ProductsCreateSkuRequestSkusItemFieldDataEcSkuBillingMethod";
import { ProductsCreateSkuRequestSkusItemFieldDataEcSkuSubscriptionPlan } from "./ProductsCreateSkuRequestSkusItemFieldDataEcSkuSubscriptionPlan";

export const ProductsCreateSkuRequestSkusItemFieldData: core.serialization.ObjectSchema<
    serializers.ProductsCreateSkuRequestSkusItemFieldData.Raw,
    Webflow.ProductsCreateSkuRequestSkusItemFieldData
> = core.serialization.object({
    skuValues: core.serialization.property(
        "sku-values",
        core.serialization.record(core.serialization.string(), core.serialization.string()).optional()
    ),
    name: core.serialization.string(),
    slug: core.serialization.string(),
    price: ProductsCreateSkuRequestSkusItemFieldDataPrice,
    compareAtPrice: core.serialization.property(
        "compare-at-price",
        ProductsCreateSkuRequestSkusItemFieldDataCompareAtPrice.optional()
    ),
    ecSkuBillingMethod: core.serialization.property(
        "ec-sku-billing-method",
        ProductsCreateSkuRequestSkusItemFieldDataEcSkuBillingMethod.optional()
    ),
    ecSkuSubscriptionPlan: core.serialization.property(
        "ec-sku-subscription-plan",
        ProductsCreateSkuRequestSkusItemFieldDataEcSkuSubscriptionPlan.optional()
    ),
    trackInventory: core.serialization.property("track-inventory", core.serialization.boolean().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace ProductsCreateSkuRequestSkusItemFieldData {
    interface Raw {
        "sku-values"?: Record<string, string> | null;
        name: string;
        slug: string;
        price: ProductsCreateSkuRequestSkusItemFieldDataPrice.Raw;
        "compare-at-price"?: ProductsCreateSkuRequestSkusItemFieldDataCompareAtPrice.Raw | null;
        "ec-sku-billing-method"?: ProductsCreateSkuRequestSkusItemFieldDataEcSkuBillingMethod.Raw | null;
        "ec-sku-subscription-plan"?: ProductsCreateSkuRequestSkusItemFieldDataEcSkuSubscriptionPlan.Raw | null;
        "track-inventory"?: boolean | null;
        quantity?: number | null;
    }
}
