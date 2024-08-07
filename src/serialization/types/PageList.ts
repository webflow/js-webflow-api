/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { Page } from "./Page";
import { Pagination } from "./Pagination";

export const PageList: core.serialization.ObjectSchema<serializers.PageList.Raw, Webflow.PageList> =
    core.serialization.object({
        pages: core.serialization.list(Page).optional(),
        pagination: Pagination.optional(),
    });

export declare namespace PageList {
    interface Raw {
        pages?: Page.Raw[] | null;
        pagination?: Pagination.Raw | null;
    }
}
