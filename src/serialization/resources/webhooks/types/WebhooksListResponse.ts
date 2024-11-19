/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { WebhooksListResponsePagination } from "./WebhooksListResponsePagination";
import { WebhooksListResponseWebhooksItem } from "./WebhooksListResponseWebhooksItem";

export const WebhooksListResponse: core.serialization.ObjectSchema<
    serializers.WebhooksListResponse.Raw,
    Webflow.WebhooksListResponse
> = core.serialization.object({
    pagination: WebhooksListResponsePagination.optional(),
    webhooks: core.serialization.list(WebhooksListResponseWebhooksItem).optional(),
});

export declare namespace WebhooksListResponse {
    interface Raw {
        pagination?: WebhooksListResponsePagination.Raw | null;
        webhooks?: WebhooksListResponseWebhooksItem.Raw[] | null;
    }
}
