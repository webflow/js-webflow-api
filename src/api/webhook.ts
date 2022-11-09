import { Client, QueryString, requireArgs } from "../core";

/**************************************************************
 * Types
 **************************************************************/
export type TriggerType =
  | "form_submission"
  | "site_publish"
  | "ecomm_new_order"
  | "ecomm_order_changed"
  | "ecomm_inventory_changed"
  | "collection_item_created"
  | "collection_item_changed"
  | "collection_item_deleted"
  | string;

export type Filter = {
  name: string;
};

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IWebhook {
  triggerType: TriggerType;
  triggerId: string;
  createdOn: string;
  lastUsed?: string;
  site: string;
  _id: string;
  filter?: {
    name: string;
  };
}

export interface IRemoveResult {
  deleted: number;
}

/**************************************************************
 * Functions
 **************************************************************/

/**
 * Get a list of Webhooks
 * @param client The Webflow client
 * @param params1 The params for the request
 * @param params1.siteId The site ID
 * @param params The query string parameters (optional)
 * @returns A list of Webhooks
 */
export function list(
  client: Client,
  { siteId }: { siteId: string },
  params?: QueryString
) {
  requireArgs({ siteId });
  const path = `/sites/${siteId}/webhooks`;
  return client.get<IWebhook[]>(path, { params });
}

/**
 * Get a single Webhook
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.webhookId The webhook ID
 * @returns A single Webhook
 */
export function getOne(
  client: Client,
  { siteId, webhookId }: { siteId: string; webhookId: string }
) {
  requireArgs({ siteId, webhookId });
  const path = `/sites/${siteId}/webhooks/${webhookId}`;
  return client.get<IWebhook>(path);
}

/**
 * Create a new Webhook
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.url The URL to send the webhook to
 * @param params.triggerType The event to trigger the webhook
 * @param params.filter The filter to apply to the webhook (optional: form_submission only)
 * @param params.params The query string parameters (optional)
 * @returns The created webhook
 */
export function create(
  client: Client,
  {
    triggerType,
    siteId,
    filter,
    url,
  }: {
    url: string;
    siteId: string;
    filter?: Filter;
    triggerType: TriggerType;
  }
) {
  requireArgs({ siteId, triggerType, url });
  const path = `/sites/${siteId}/webhooks`;
  const data = { triggerType, url, filter };
  return client.post<IWebhook>(path, data);
}

/**
 * Remove a Webhook
 * @param client The Webflow client
 * @param params The query string parameters (optional)
 * @param params.webhookId The Webhook ID
 * @param params.siteId The Site ID
 * @returns The result of the removal
 */
export function remove(
  client: Client,
  { siteId, webhookId }: { siteId: string; webhookId: string }
) {
  requireArgs({ siteId, webhookId });
  const path = `/sites/${siteId}/webhooks/${webhookId}`;
  return client.delete<IRemoveResult>(path);
}
