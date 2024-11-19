/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsCreateRequestSkuFieldDataPrice } from "./ProductsCreateRequestSkuFieldDataPrice";
import { ProductsCreateRequestSkuFieldDataCompareAtPrice } from "./ProductsCreateRequestSkuFieldDataCompareAtPrice";
import { ProductsCreateRequestSkuFieldDataEcSkuBillingMethod } from "./ProductsCreateRequestSkuFieldDataEcSkuBillingMethod";
import { ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan } from "./ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan";

export const ProductsCreateRequestSkuFieldData: core.serialization.ObjectSchema<
    serializers.ProductsCreateRequestSkuFieldData.Raw,
    Webflow.ProductsCreateRequestSkuFieldData
> = core.serialization.object({
    skuValues: core.serialization.property(
        "sku-values",
        core.serialization.record(core.serialization.string(), core.serialization.string()).optional()
    ),
    name: core.serialization.string(),
    slug: core.serialization.string(),
    price: ProductsCreateRequestSkuFieldDataPrice,
    compareAtPrice: core.serialization.property(
        "compare-at-price",
        ProductsCreateRequestSkuFieldDataCompareAtPrice.optional()
    ),
    ecSkuBillingMethod: core.serialization.property(
        "ec-sku-billing-method",
        ProductsCreateRequestSkuFieldDataEcSkuBillingMethod.optional()
    ),
    ecSkuSubscriptionPlan: core.serialization.property(
        "ec-sku-subscription-plan",
        ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan.optional()
    ),
    trackInventory: core.serialization.property("track-inventory", core.serialization.boolean().optional()),
    quantity: core.serialization.number().optional(),
});

export declare namespace ProductsCreateRequestSkuFieldData {
    interface Raw {
        "sku-values"?: Record<string, string> | null;
        name: string;
        slug: string;
        price: ProductsCreateRequestSkuFieldDataPrice.Raw;
        "compare-at-price"?: ProductsCreateRequestSkuFieldDataCompareAtPrice.Raw | null;
        "ec-sku-billing-method"?: ProductsCreateRequestSkuFieldDataEcSkuBillingMethod.Raw | null;
        "ec-sku-subscription-plan"?: ProductsCreateRequestSkuFieldDataEcSkuSubscriptionPlan.Raw | null;
        "track-inventory"?: boolean | null;
        quantity?: number | null;
    }
}
