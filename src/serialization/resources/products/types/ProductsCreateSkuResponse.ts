/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Webflow from "../../../../api";
import * as core from "../../../../core";

export const ProductsCreateSkuResponse: core.serialization.ObjectSchema<
    serializers.ProductsCreateSkuResponse.Raw,
    Webflow.ProductsCreateSkuResponse
> = core.serialization.object({
    skus: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Sku)).optional(),
});

export declare namespace ProductsCreateSkuResponse {
    interface Raw {
        skus?: serializers.Sku.Raw[] | null;
    }
}
