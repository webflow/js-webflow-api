/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { EcommNewOrderPayloadPurchasedItemsItemVariantImageFileVariantsItem } from "./EcommNewOrderPayloadPurchasedItemsItemVariantImageFileVariantsItem";

export const EcommNewOrderPayloadPurchasedItemsItemVariantImageFile: core.serialization.ObjectSchema<
    serializers.EcommNewOrderPayloadPurchasedItemsItemVariantImageFile.Raw,
    Webflow.EcommNewOrderPayloadPurchasedItemsItemVariantImageFile
> = core.serialization.object({
    size: core.serialization.number().optional(),
    originalFileName: core.serialization.string().optional(),
    createdOn: core.serialization.date().optional(),
    contentType: core.serialization.string().optional(),
    width: core.serialization.number().optional(),
    height: core.serialization.number().optional(),
    variants: core.serialization.list(EcommNewOrderPayloadPurchasedItemsItemVariantImageFileVariantsItem).optional(),
});

export declare namespace EcommNewOrderPayloadPurchasedItemsItemVariantImageFile {
    interface Raw {
        size?: number | null;
        originalFileName?: string | null;
        createdOn?: string | null;
        contentType?: string | null;
        width?: number | null;
        height?: number | null;
        variants?: EcommNewOrderPayloadPurchasedItemsItemVariantImageFileVariantsItem.Raw[] | null;
    }
}
