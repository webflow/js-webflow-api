/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const CollectionItemFieldData: core.serialization.ObjectSchema<
    serializers.CollectionItemFieldData.Raw,
    Webflow.CollectionItemFieldData
> = core.serialization.object({
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
});

export declare namespace CollectionItemFieldData {
    interface Raw {
        name?: string | null;
        slug?: string | null;
        [key: string]: any;
    }
}
