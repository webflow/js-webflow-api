/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CreateBulkCollectionItemRequestBodyFieldDataName: core.serialization.ObjectSchema<
    serializers.collections.CreateBulkCollectionItemRequestBodyFieldDataName.Raw,
    Webflow.collections.CreateBulkCollectionItemRequestBodyFieldDataName
> = core.serialization
    .object({
        name: core.serialization.string(),
        slug: core.serialization.string(),
    })
    .passthrough();

export declare namespace CreateBulkCollectionItemRequestBodyFieldDataName {
    interface Raw {
        name: string;
        slug: string;
        [key: string]: any;
    }
}
