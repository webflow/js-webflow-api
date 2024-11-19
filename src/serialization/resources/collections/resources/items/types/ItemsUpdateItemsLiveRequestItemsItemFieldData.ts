/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ItemsUpdateItemsLiveRequestItemsItemFieldData: core.serialization.ObjectSchema<
    serializers.collections.ItemsUpdateItemsLiveRequestItemsItemFieldData.Raw,
    Webflow.collections.ItemsUpdateItemsLiveRequestItemsItemFieldData
> = core.serialization.object({
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
});

export declare namespace ItemsUpdateItemsLiveRequestItemsItemFieldData {
    interface Raw {
        name?: string | null;
        slug?: string | null;
    }
}
