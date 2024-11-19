/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ItemsListItemsLiveResponseItemsItemFieldData } from "./ItemsListItemsLiveResponseItemsItemFieldData";

export const ItemsListItemsLiveResponseItemsItem: core.serialization.ObjectSchema<
    serializers.collections.ItemsListItemsLiveResponseItemsItem.Raw,
    Webflow.collections.ItemsListItemsLiveResponseItemsItem
> = core.serialization.object({
    id: core.serialization.string(),
    cmsLocaleId: core.serialization.string().optional(),
    lastPublished: core.serialization.string().optional(),
    lastUpdated: core.serialization.string().optional(),
    createdOn: core.serialization.string().optional(),
    isArchived: core.serialization.boolean().optional(),
    isDraft: core.serialization.boolean().optional(),
    fieldData: ItemsListItemsLiveResponseItemsItemFieldData.optional(),
});

export declare namespace ItemsListItemsLiveResponseItemsItem {
    interface Raw {
        id: string;
        cmsLocaleId?: string | null;
        lastPublished?: string | null;
        lastUpdated?: string | null;
        createdOn?: string | null;
        isArchived?: boolean | null;
        isDraft?: boolean | null;
        fieldData?: ItemsListItemsLiveResponseItemsItemFieldData.Raw | null;
    }
}
