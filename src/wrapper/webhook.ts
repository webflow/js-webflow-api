import { ResponseWrapper } from ".";
import { Client, QueryString } from "../core";
import { Webhook } from "../api";

export type CreateWebhookParams = {
  url: string;
  siteId: string;
  triggerType: string;
  filter?: Webhook.Filter;
};

export class WebhookWrapper implements Webhook.IWebhook {
  triggerType: Webhook.TriggerType;
  triggerId: string;
  createdOn: string;
  lastUsed?: string;
  site: string;
  _id: string;
  filter?: {
    name: string;
  };

  constructor(private client: Client, webhook: Webhook.IWebhook) {
    Object.assign(this, webhook);
  }

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a Webhook
   * @param client The Webflow client
   * @param params The Webhook params
   * @param params.siteId The Site ID
   * @param params.webhookId The Webhook ID
   * @returns The Webhook
   */
  static async getOne(
    client: Client,
    { siteId, webhookId }: { siteId: string; webhookId: string }
  ) {
    const res = await Webhook.getOne(client, { siteId, webhookId });
    const webhook = new WebhookWrapper(client, res.data);
    return ResponseWrapper<typeof webhook>(res, webhook);
  }

  /**
   * List Webhooks
   * @param client The Webflow client
   * @param param1 The Webhook params
   * @param param1.siteId The Site ID
   * @param params Query string params (optional)
   * @returns A list of Webhooks
   */
  static async list(
    client: Client,
    { siteId }: { siteId: string },
    params?: QueryString
  ) {
    const res = await Webhook.list(client, { siteId }, params);
    const webhooks = res.data.map((w) => new WebhookWrapper(client, w));
    return ResponseWrapper<typeof webhooks>(res, webhooks);
  }

  /**
   * Remove a Webhook
   * @param client The Webflow client
   * @param params The Webhook params
   * @param params.siteId The Site ID
   * @param params.webhookId The Webhook ID
   * @returns The result of the removal
   */
  static async remove(
    client: Client,
    { siteId, webhookId }: { siteId: string; webhookId: string }
  ) {
    const res = await Webhook.remove(client, { siteId, webhookId });
    return ResponseWrapper<typeof res.data>(res);
  }

  /**
   * Create a Webhook
   * @param client The Webflow client
   * @param param1 The Webhook params
   * @param param1.siteId The Site ID
   * @param param1.url The URL to send the Webhook to
   * @param param1.triggerType The event to trigger the Webhook
   * @param param1.filter The filter to use (optional: form_submission only)
   * @returns The created Webhook
   */
  static async create(
    client: Client,
    { triggerType, siteId, filter, url }: CreateWebhookParams
  ) {
    const args = { triggerType, siteId, filter, url };
    const res = await Webhook.create(client, args);
    const _webhook = new WebhookWrapper(client, res.data);
    return ResponseWrapper<typeof _webhook>(res, _webhook);
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Remove a Webhook
   * @returns The result of the removal
   */
  async remove() {
    return WebhookWrapper.remove(this.client, {
      webhookId: this._id,
      siteId: this.site,
    });
  }
}
