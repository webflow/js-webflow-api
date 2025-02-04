/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { Sku } from "../../../types/Sku";

export const ProductsCreateSkuResponse: core.serialization.ObjectSchema<
    serializers.ProductsCreateSkuResponse.Raw,
    Webflow.ProductsCreateSkuResponse
> = core.serialization.object({
    required: core.serialization.unknown().optional(),
    skus: core.serialization.list(Sku).optional(),
});

export declare namespace ProductsCreateSkuResponse {
    interface Raw {
        required?: unknown | null;
        skus?: Sku.Raw[] | null;
    }
}
