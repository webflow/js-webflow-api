/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { ProductsUpdateResponseFieldDataSkuPropertiesItemEnumItem } from "./ProductsUpdateResponseFieldDataSkuPropertiesItemEnumItem";

export const ProductsUpdateResponseFieldDataSkuPropertiesItem: core.serialization.ObjectSchema<
    serializers.ProductsUpdateResponseFieldDataSkuPropertiesItem.Raw,
    Webflow.ProductsUpdateResponseFieldDataSkuPropertiesItem
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    enum: core.serialization.list(ProductsUpdateResponseFieldDataSkuPropertiesItemEnumItem),
});

export declare namespace ProductsUpdateResponseFieldDataSkuPropertiesItem {
    interface Raw {
        id: string;
        name: string;
        enum: ProductsUpdateResponseFieldDataSkuPropertiesItemEnumItem.Raw[];
    }
}
