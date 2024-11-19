/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const WebhooksListResponseWebhooksItemTriggerType: core.serialization.Schema<
    serializers.WebhooksListResponseWebhooksItemTriggerType.Raw,
    Webflow.WebhooksListResponseWebhooksItemTriggerType
> = core.serialization.enum_([
    "form_submission",
    "site_publish",
    "page_created",
    "page_metadata_updated",
    "page_deleted",
    "ecomm_new_order",
    "ecomm_order_changed",
    "ecomm_inventory_changed",
    "user_account_added",
    "user_account_updated",
    "user_account_deleted",
    "collection_item_created",
    "collection_item_changed",
    "collection_item_deleted",
    "collection_item_unpublished",
]);

export declare namespace WebhooksListResponseWebhooksItemTriggerType {
    type Raw =
        | "form_submission"
        | "site_publish"
        | "page_created"
        | "page_metadata_updated"
        | "page_deleted"
        | "ecomm_new_order"
        | "ecomm_order_changed"
        | "ecomm_inventory_changed"
        | "user_account_added"
        | "user_account_updated"
        | "user_account_deleted"
        | "collection_item_created"
        | "collection_item_changed"
        | "collection_item_deleted"
        | "collection_item_unpublished";
}
