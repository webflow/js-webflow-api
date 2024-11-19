/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ItemsGetItemResponseFieldData } from "./ItemsGetItemResponseFieldData";

export const ItemsGetItemResponse: core.serialization.ObjectSchema<
    serializers.collections.ItemsGetItemResponse.Raw,
    Webflow.collections.ItemsGetItemResponse
> = core.serialization.object({
    id: core.serialization.string(),
    cmsLocaleId: core.serialization.string().optional(),
    lastPublished: core.serialization.string().optional(),
    lastUpdated: core.serialization.string().optional(),
    createdOn: core.serialization.string().optional(),
    isArchived: core.serialization.boolean().optional(),
    isDraft: core.serialization.boolean().optional(),
    fieldData: ItemsGetItemResponseFieldData.optional(),
});

export declare namespace ItemsGetItemResponse {
    interface Raw {
        id: string;
        cmsLocaleId?: string | null;
        lastPublished?: string | null;
        lastUpdated?: string | null;
        createdOn?: string | null;
        isArchived?: boolean | null;
        isDraft?: boolean | null;
        fieldData?: ItemsGetItemResponseFieldData.Raw | null;
    }
}
