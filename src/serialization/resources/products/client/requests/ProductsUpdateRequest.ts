/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Webflow from "../../../../../api";
import * as core from "../../../../../core";

export const ProductsUpdateRequest: core.serialization.Schema<
    serializers.ProductsUpdateRequest.Raw,
    Webflow.ProductsUpdateRequest
> = core.serialization.object({
    publishStatus: core.serialization.lazy(async () => (await import("../../../..")).PublishStatus).optional(),
    product: core.serialization.lazyObject(async () => (await import("../../../..")).Product),
});

export declare namespace ProductsUpdateRequest {
    interface Raw {
        publishStatus?: serializers.PublishStatus.Raw | null;
        product: serializers.Product.Raw;
    }
}