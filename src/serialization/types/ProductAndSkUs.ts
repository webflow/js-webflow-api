/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const ProductAndSkUs: core.serialization.ObjectSchema<serializers.ProductAndSkUs.Raw, Webflow.ProductAndSkUs> =
    core.serialization.object({
        product: core.serialization.lazyObject(async () => (await import("..")).Product).optional(),
        skus: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Sku)).optional(),
    });

export declare namespace ProductAndSkUs {
    interface Raw {
        product?: serializers.Product.Raw | null;
        skus?: serializers.Sku.Raw[] | null;
    }
}
