/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ItemsUpdateItemResponseFieldData: core.serialization.ObjectSchema<
    serializers.collections.ItemsUpdateItemResponseFieldData.Raw,
    Webflow.collections.ItemsUpdateItemResponseFieldData
> = core.serialization.object({
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
});

export declare namespace ItemsUpdateItemResponseFieldData {
    interface Raw {
        name?: string | null;
        slug?: string | null;
    }
}
