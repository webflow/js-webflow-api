/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const CommentThreadListPagination: core.serialization.ObjectSchema<
    serializers.CommentThreadListPagination.Raw,
    Webflow.CommentThreadListPagination
> = core.serialization.object({
    limit: core.serialization.number(),
    offset: core.serialization.number(),
    total: core.serialization.number(),
});

export declare namespace CommentThreadListPagination {
    interface Raw {
        limit: number;
        offset: number;
        total: number;
    }
}
