/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsCreateRequestProductFieldDataSkuPropertiesItem } from "./ProductsCreateRequestProductFieldDataSkuPropertiesItem";
import { ProductsCreateRequestProductFieldDataTaxCategory } from "./ProductsCreateRequestProductFieldDataTaxCategory";
import { ProductsCreateRequestProductFieldDataEcProductType } from "./ProductsCreateRequestProductFieldDataEcProductType";

export const ProductsCreateRequestProductFieldData: core.serialization.ObjectSchema<
    serializers.ProductsCreateRequestProductFieldData.Raw,
    Webflow.ProductsCreateRequestProductFieldData
> = core.serialization.object({
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    shippable: core.serialization.boolean().optional(),
    skuProperties: core.serialization.property(
        "sku-properties",
        core.serialization.list(ProductsCreateRequestProductFieldDataSkuPropertiesItem).optional()
    ),
    categories: core.serialization.list(core.serialization.string()).optional(),
    taxCategory: core.serialization.property(
        "tax-category",
        ProductsCreateRequestProductFieldDataTaxCategory.optional()
    ),
    defaultSku: core.serialization.property("default-sku", core.serialization.string().optional()),
    ecProductType: core.serialization.property(
        "ec-product-type",
        ProductsCreateRequestProductFieldDataEcProductType.optional()
    ),
});

export declare namespace ProductsCreateRequestProductFieldData {
    interface Raw {
        name?: string | null;
        slug?: string | null;
        description?: string | null;
        shippable?: boolean | null;
        "sku-properties"?: ProductsCreateRequestProductFieldDataSkuPropertiesItem.Raw[] | null;
        categories?: string[] | null;
        "tax-category"?: ProductsCreateRequestProductFieldDataTaxCategory.Raw | null;
        "default-sku"?: string | null;
        "ec-product-type"?: ProductsCreateRequestProductFieldDataEcProductType.Raw | null;
    }
}
