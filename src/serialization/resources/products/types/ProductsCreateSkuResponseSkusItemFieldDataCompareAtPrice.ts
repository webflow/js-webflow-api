/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const ProductsCreateSkuResponseSkusItemFieldDataCompareAtPrice: core.serialization.ObjectSchema<
    serializers.ProductsCreateSkuResponseSkusItemFieldDataCompareAtPrice.Raw,
    Webflow.ProductsCreateSkuResponseSkusItemFieldDataCompareAtPrice
> = core.serialization.object({
    value: core.serialization.number().optional(),
    unit: core.serialization.string().optional(),
});

export declare namespace ProductsCreateSkuResponseSkusItemFieldDataCompareAtPrice {
    interface Raw {
        value?: number | null;
        unit?: string | null;
    }
}
