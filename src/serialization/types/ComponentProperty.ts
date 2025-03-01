/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { ComponentPropertyType } from "./ComponentPropertyType";
import { Text } from "./Text";

export const ComponentProperty: core.serialization.ObjectSchema<
    serializers.ComponentProperty.Raw,
    Webflow.ComponentProperty
> = core.serialization.object({
    propertyId: core.serialization.string().optional(),
    type: ComponentPropertyType.optional(),
    label: core.serialization.string().optional(),
    text: Text.optional(),
});

export declare namespace ComponentProperty {
    interface Raw {
        propertyId?: string | null;
        type?: ComponentPropertyType.Raw | null;
        label?: string | null;
        text?: Text.Raw | null;
    }
}
