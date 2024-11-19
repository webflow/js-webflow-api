/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { OrdersListResponseOrdersItemPurchasedItemsItemVariantImageFile } from "./OrdersListResponseOrdersItemPurchasedItemsItemVariantImageFile";

export const OrdersListResponseOrdersItemPurchasedItemsItemVariantImage: core.serialization.ObjectSchema<
    serializers.OrdersListResponseOrdersItemPurchasedItemsItemVariantImage.Raw,
    Webflow.OrdersListResponseOrdersItemPurchasedItemsItemVariantImage
> = core.serialization.object({
    url: core.serialization.string().optional(),
    file: OrdersListResponseOrdersItemPurchasedItemsItemVariantImageFile.optional(),
});

export declare namespace OrdersListResponseOrdersItemPurchasedItemsItemVariantImage {
    interface Raw {
        url?: string | null;
        file?: OrdersListResponseOrdersItemPurchasedItemsItemVariantImageFile.Raw | null;
    }
}
