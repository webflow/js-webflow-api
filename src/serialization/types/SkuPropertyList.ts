/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const SkuPropertyList: core.serialization.ObjectSchema<
    serializers.SkuPropertyList.Raw,
    Webflow.SkuPropertyList
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    enum: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).SkuPropertyListEnumItem)
    ),
});

export declare namespace SkuPropertyList {
    interface Raw {
        id: string;
        name: string;
        enum: serializers.SkuPropertyListEnumItem.Raw[];
    }
}
