/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Webflow from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { CreateBulkCollectionItemRequestBodyFieldData } from "../../types/CreateBulkCollectionItemRequestBodyFieldData";

export const CreateBulkCollectionItemRequestBody: core.serialization.Schema<
    serializers.collections.CreateBulkCollectionItemRequestBody.Raw,
    Webflow.collections.CreateBulkCollectionItemRequestBody
> = core.serialization.object({
    cmsLocaleIds: core.serialization.list(core.serialization.string()).optional(),
    isArchived: core.serialization.boolean().optional(),
    isDraft: core.serialization.boolean().optional(),
    fieldData: CreateBulkCollectionItemRequestBodyFieldData.optional(),
});

export declare namespace CreateBulkCollectionItemRequestBody {
    interface Raw {
        cmsLocaleIds?: string[] | null;
        isArchived?: boolean | null;
        isDraft?: boolean | null;
        fieldData?: CreateBulkCollectionItemRequestBodyFieldData.Raw | null;
    }
}