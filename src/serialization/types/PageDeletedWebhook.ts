/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const PageDeletedWebhook: core.serialization.ObjectSchema<
    serializers.PageDeletedWebhook.Raw,
    Webflow.PageDeletedWebhook
> = core.serialization.object({
    siteId: core.serialization.string().optional(),
    pageId: core.serialization.string().optional(),
    pageTitle: core.serialization.string().optional(),
    deletedAt: core.serialization.date().optional(),
});

export declare namespace PageDeletedWebhook {
    interface Raw {
        siteId?: string | null;
        pageId?: string | null;
        pageTitle?: string | null;
        deletedAt?: string | null;
    }
}
