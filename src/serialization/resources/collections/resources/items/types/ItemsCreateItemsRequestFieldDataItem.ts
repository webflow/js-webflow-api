/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ItemsCreateItemsRequestFieldDataItem: core.serialization.ObjectSchema<
    serializers.collections.ItemsCreateItemsRequestFieldDataItem.Raw,
    Webflow.collections.ItemsCreateItemsRequestFieldDataItem
> = core.serialization.object({
    name: core.serialization.string(),
    slug: core.serialization.string(),
});

export declare namespace ItemsCreateItemsRequestFieldDataItem {
    interface Raw {
        name: string;
        slug: string;
    }
}
