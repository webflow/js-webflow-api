/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const SkuPropertyListEnumItem: core.serialization.ObjectSchema<
    serializers.SkuPropertyListEnumItem.Raw,
    Webflow.SkuPropertyListEnumItem
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    slug: core.serialization.string(),
});

export declare namespace SkuPropertyListEnumItem {
    interface Raw {
        id: string;
        name: string;
        slug: string;
    }
}
