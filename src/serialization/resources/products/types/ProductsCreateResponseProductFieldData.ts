/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsCreateResponseProductFieldDataSkuPropertiesItem } from "./ProductsCreateResponseProductFieldDataSkuPropertiesItem";
import { ProductsCreateResponseProductFieldDataTaxCategory } from "./ProductsCreateResponseProductFieldDataTaxCategory";
import { ProductsCreateResponseProductFieldDataEcProductType } from "./ProductsCreateResponseProductFieldDataEcProductType";

export const ProductsCreateResponseProductFieldData: core.serialization.ObjectSchema<
    serializers.ProductsCreateResponseProductFieldData.Raw,
    Webflow.ProductsCreateResponseProductFieldData
> = core.serialization.object({
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    shippable: core.serialization.boolean().optional(),
    skuProperties: core.serialization.property(
        "sku-properties",
        core.serialization.list(ProductsCreateResponseProductFieldDataSkuPropertiesItem).optional()
    ),
    categories: core.serialization.list(core.serialization.string()).optional(),
    taxCategory: core.serialization.property(
        "tax-category",
        ProductsCreateResponseProductFieldDataTaxCategory.optional()
    ),
    defaultSku: core.serialization.property("default-sku", core.serialization.string().optional()),
    ecProductType: core.serialization.property(
        "ec-product-type",
        ProductsCreateResponseProductFieldDataEcProductType.optional()
    ),
});

export declare namespace ProductsCreateResponseProductFieldData {
    interface Raw {
        name?: string | null;
        slug?: string | null;
        description?: string | null;
        shippable?: boolean | null;
        "sku-properties"?: ProductsCreateResponseProductFieldDataSkuPropertiesItem.Raw[] | null;
        categories?: string[] | null;
        "tax-category"?: ProductsCreateResponseProductFieldDataTaxCategory.Raw | null;
        "default-sku"?: string | null;
        "ec-product-type"?: ProductsCreateResponseProductFieldDataEcProductType.Raw | null;
    }
}
