/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const ProductsListResponseItemsItemSkusItemFieldDataPrice: core.serialization.ObjectSchema<
    serializers.ProductsListResponseItemsItemSkusItemFieldDataPrice.Raw,
    Webflow.ProductsListResponseItemsItemSkusItemFieldDataPrice
> = core.serialization.object({
    value: core.serialization.number().optional(),
    unit: core.serialization.string().optional(),
});

export declare namespace ProductsListResponseItemsItemSkusItemFieldDataPrice {
    interface Raw {
        value?: number | null;
        unit?: string | null;
    }
}
