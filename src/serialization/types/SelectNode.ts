/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { SelectNodeChoicesItem } from "./SelectNodeChoicesItem";

export const SelectNode: core.serialization.ObjectSchema<serializers.SelectNode.Raw, Webflow.SelectNode> =
    core.serialization.object({
        id: core.serialization.string(),
        choices: core.serialization.list(SelectNodeChoicesItem),
        attributes: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    });

export declare namespace SelectNode {
    interface Raw {
        id: string;
        choices: SelectNodeChoicesItem.Raw[];
        attributes?: Record<string, string> | null;
    }
}
