/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as Webflow from "../../../../../api";
import * as core from "../../../../../core";
export declare const ProductsCreateSkuRequest: core.serialization.Schema<serializers.ProductsCreateSkuRequest.Raw, Webflow.ProductsCreateSkuRequest>;
export declare namespace ProductsCreateSkuRequest {
    interface Raw {
        publishStatus?: serializers.PublishStatus.Raw | null;
        skus: serializers.Sku.Raw[];
    }
}
