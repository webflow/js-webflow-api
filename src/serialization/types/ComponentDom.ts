/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { Node } from "./Node";
import { Pagination } from "./Pagination";

export const ComponentDom: core.serialization.ObjectSchema<serializers.ComponentDom.Raw, Webflow.ComponentDom> =
    core.serialization.object({
        componentId: core.serialization.string().optional(),
        nodes: core.serialization.list(Node).optional(),
        pagination: Pagination.optional(),
    });

export declare namespace ComponentDom {
    interface Raw {
        componentId?: string | null;
        nodes?: Node.Raw[] | null;
        pagination?: Pagination.Raw | null;
    }
}
