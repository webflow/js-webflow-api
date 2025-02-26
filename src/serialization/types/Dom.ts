/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { Node } from "./Node";
import { Pagination } from "./Pagination";

export const Dom: core.serialization.ObjectSchema<serializers.Dom.Raw, Webflow.Dom> = core.serialization.object({
    pageId: core.serialization.string().optional(),
    nodes: core.serialization.list(Node).optional(),
    pagination: Pagination.optional(),
    lastUpdated: core.serialization.date().optional(),
});

export declare namespace Dom {
    interface Raw {
        pageId?: string | null;
        nodes?: Node.Raw[] | null;
        pagination?: Pagination.Raw | null;
        lastUpdated?: string | null;
    }
}
