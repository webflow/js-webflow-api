/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { OrdersUpdateFulfillResponsePurchasedItemsItemVariantImageFile } from "./OrdersUpdateFulfillResponsePurchasedItemsItemVariantImageFile";

export const OrdersUpdateFulfillResponsePurchasedItemsItemVariantImage: core.serialization.ObjectSchema<
    serializers.OrdersUpdateFulfillResponsePurchasedItemsItemVariantImage.Raw,
    Webflow.OrdersUpdateFulfillResponsePurchasedItemsItemVariantImage
> = core.serialization.object({
    url: core.serialization.string().optional(),
    file: OrdersUpdateFulfillResponsePurchasedItemsItemVariantImageFile.optional(),
});

export declare namespace OrdersUpdateFulfillResponsePurchasedItemsItemVariantImage {
    interface Raw {
        url?: string | null;
        file?: OrdersUpdateFulfillResponsePurchasedItemsItemVariantImageFile.Raw | null;
    }
}
