/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const OrderPurchasedItemVariantImageFile: core.serialization.ObjectSchema<serializers.OrderPurchasedItemVariantImageFile.Raw, Webflow.OrderPurchasedItemVariantImageFile>;
export declare namespace OrderPurchasedItemVariantImageFile {
    interface Raw {
        size?: number | null;
        originalFileName?: string | null;
        createdOn?: string | null;
        contentType?: string | null;
        width?: number | null;
        height?: number | null;
        variants?: serializers.OrderPurchasedItemVariantImageFileVariantsItem.Raw[] | null;
    }
}
