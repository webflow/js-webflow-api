/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const ProductsGetResponseProductFieldDataSkuPropertiesItemEnumItem: core.serialization.ObjectSchema<
    serializers.ProductsGetResponseProductFieldDataSkuPropertiesItemEnumItem.Raw,
    Webflow.ProductsGetResponseProductFieldDataSkuPropertiesItemEnumItem
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    slug: core.serialization.string(),
});

export declare namespace ProductsGetResponseProductFieldDataSkuPropertiesItemEnumItem {
    interface Raw {
        id: string;
        name: string;
        slug: string;
    }
}
