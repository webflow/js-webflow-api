import { AxiosInstance } from "axios";
import { requireArgs, WebflowRecord } from "../core";

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

export type WebhookFilter = {
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
 * Class
 **************************************************************/
export class Webhook extends WebflowRecord<IWebhook> implements IWebhook {
  filter?: { name: string };
  triggerType: string;
  triggerId: string;
  createdOn: string;
  lastUsed?: string;
  site: string;
  _id: string;

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a list of Webhooks
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param client The Axios client instance
   * @returns A list of Webhooks
   */
  static list({ siteId }: { siteId: string }, client: AxiosInstance) {
    requireArgs({ siteId });
    const path = `/sites/${siteId}/webhooks`;
    return client.get<IWebhook[]>(path);
  }

  /**
   * Get a single Webhook
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.webhookId The webhook ID
   * @param client The Axios client instance
   * @returns A single Webhook
   */
  static getOne(
    { siteId, webhookId }: { siteId: string; webhookId: string },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, webhookId });
    const path = `/sites/${siteId}/webhooks/${webhookId}`;
    return client.get<IWebhook>(path);
  }

  /**
   * Create a new Webhook
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.url The URL to send the webhook to
   * @param params.triggerType The event to trigger the webhook
   * @param params.filter The filter to apply to the webhook (optional: form_submission only)
   * @param params.params The query string parameters (optional)
   * @param client The Axios client instance
   * @returns The created webhook
   */
  static create(
    {
      triggerType,
      siteId,
      filter,
      url,
    }: {
      url: string;
      siteId: string;
      filter?: WebhookFilter;
      triggerType: TriggerType;
    },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, triggerType, url });
    const path = `/sites/${siteId}/webhooks`;
    const data = { triggerType, url, filter };
    return client.post<IWebhook>(path, data);
  }

  /**
   * Remove a Webhook
   * @param params The query string parameters (optional)
   * @param params.webhookId The Webhook ID
   * @param params.siteId The Site ID
   * @param client The Axios client instance
   * @returns The result of the removal
   */
  static remove(
    { siteId, webhookId }: { siteId: string; webhookId: string },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, webhookId });
    const path = `/sites/${siteId}/webhooks/${webhookId}`;
    return client.delete<IRemoveResult>(path);
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Remove a Webhook
   * @returns The result of the removal
   */
  async remove() {
    const params = { siteId: this.site, webhookId: this._id };
    const res = await Webhook.remove(params, this.client);
    return res.data;
  }
}
