/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const ComponentPropertiesWritePropertiesItem: core.serialization.ObjectSchema<
    serializers.ComponentPropertiesWritePropertiesItem.Raw,
    Webflow.ComponentPropertiesWritePropertiesItem
> = core.serialization.object({
    propertyId: core.serialization.string(),
    text: core.serialization.string(),
});

export declare namespace ComponentPropertiesWritePropertiesItem {
    interface Raw {
        propertyId: string;
        text: string;
    }
}