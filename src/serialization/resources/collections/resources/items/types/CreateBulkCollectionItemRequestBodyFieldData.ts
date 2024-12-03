/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CreateBulkCollectionItemRequestBodyFieldDataName } from "./CreateBulkCollectionItemRequestBodyFieldDataName";
import { CreateBulkCollectionItemRequestBodyFieldDataItem } from "./CreateBulkCollectionItemRequestBodyFieldDataItem";

export const CreateBulkCollectionItemRequestBodyFieldData: core.serialization.Schema<
    serializers.collections.CreateBulkCollectionItemRequestBodyFieldData.Raw,
    Webflow.collections.CreateBulkCollectionItemRequestBodyFieldData
> = core.serialization.undiscriminatedUnion([
    CreateBulkCollectionItemRequestBodyFieldDataName,
    core.serialization.list(CreateBulkCollectionItemRequestBodyFieldDataItem),
]);

export declare namespace CreateBulkCollectionItemRequestBodyFieldData {
    type Raw =
        | CreateBulkCollectionItemRequestBodyFieldDataName.Raw
        | CreateBulkCollectionItemRequestBodyFieldDataItem.Raw[];
}
