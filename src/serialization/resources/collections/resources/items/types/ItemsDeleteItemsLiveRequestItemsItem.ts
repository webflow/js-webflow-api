/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ItemsDeleteItemsLiveRequestItemsItem: core.serialization.ObjectSchema<
    serializers.collections.ItemsDeleteItemsLiveRequestItemsItem.Raw,
    Webflow.collections.ItemsDeleteItemsLiveRequestItemsItem
> = core.serialization.object({
    itemId: core.serialization.string(),
    cmsLocaleIds: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ItemsDeleteItemsLiveRequestItemsItem {
    interface Raw {
        itemId: string;
        cmsLocaleIds?: string[] | null;
    }
}
