/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { OrdersRefundResponsePurchasedItemsItemVariantImageFile } from "./OrdersRefundResponsePurchasedItemsItemVariantImageFile";

export const OrdersRefundResponsePurchasedItemsItemVariantImage: core.serialization.ObjectSchema<
    serializers.OrdersRefundResponsePurchasedItemsItemVariantImage.Raw,
    Webflow.OrdersRefundResponsePurchasedItemsItemVariantImage
> = core.serialization.object({
    url: core.serialization.string().optional(),
    file: OrdersRefundResponsePurchasedItemsItemVariantImageFile.optional(),
});

export declare namespace OrdersRefundResponsePurchasedItemsItemVariantImage {
    interface Raw {
        url?: string | null;
        file?: OrdersRefundResponsePurchasedItemsItemVariantImageFile.Raw | null;
    }
}
