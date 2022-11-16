import { AxiosInstance } from "axios";
import { Webhook, Collection, WebhookFilter } from ".";
import { requireArgs, WebflowRecord } from "../core";

/**************************************************************
 * Interfaces
 *************************************************************/
export interface IDomain {
  _id: string;
  name: string;
}

export interface ISite {
  lastPublished: string;
  previewUrl: string;
  createdOn: string;
  shortName: string;
  timezone: string;
  database: string;
  name: string;
  _id: string;
}

export interface IPublishSite {
  queued: boolean;
}

/**************************************************************
 * Class
 **************************************************************/

export class Site extends WebflowRecord<ISite> implements ISite {
  lastPublished: string;
  previewUrl: string;
  createdOn: string;
  shortName: string;
  timezone: string;
  database: string;
  name: string;
  _id: string;

  /**
   * Get a list of Sites
   * @param client The Axios client instance
   * @returns a list of Sites
   */
  static list(client: AxiosInstance) {
    const path = "/sites";
    return client.get<ISite[]>(path);
  }

  /**
   * Get a single Site
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.params The query string parameters (optional)
   * @param client The Axios client instance
   * @returns A single Site
   */
  static getOne({ siteId }: { siteId: string }, client: AxiosInstance) {
    requireArgs({ siteId });
    const path = `/sites/${siteId}`;
    return client.get<ISite>(path);
  }

  /**
   * Publish a site
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.domains The domains to publish to
   * @param client The Axios client instance
   * @returns The publish result
   */
  static publish(
    { siteId, domains }: { siteId: string; domains: string[] },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, domains });
    const path = `/sites/${siteId}/publish`;
    return client.post<IPublishSite>(path, { domains });
  }

  /**
   * Get a list of domains for a site
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param client The Axios client instance
   * @returns A list of domains
   */
  static domains({ siteId }: { siteId: string }, client: AxiosInstance) {
    requireArgs({ siteId });
    const path = `/sites/${siteId}/domains`;
    return client.get<IDomain[]>(path);
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Get a list of domains for a site
   * @returns A list of domains
   */
  async domains() {
    const res = await Site.domains({ siteId: this._id }, this.client);
    return res.data;
  }

  /**
   * Publish a site
   * @param domains The domains to publish to
   * @returns The publish result
   */
  async publishSite(domains: string[]) {
    const res = await Site.publish({ siteId: this._id, domains }, this.client);
    return res.data;
  }

  /**
   * Get a single Collection
   * @param params The params for the request
   * @param params.collectionId The collection ID
   * @returns A single Collection
   */
  async collection({ collectionId }: { collectionId: string }) {
    const res = await Collection.getOne({ collectionId }, this.client);
    return new Collection(this.client, res);
  }

  /**
   * Get a list of Collections
   * @returns A list of Collections
   */
  async collections() {
    const res = await Collection.list({ siteId: this._id }, this.client);
    return res.data.map((data) => new Collection(this.client, { ...res, data }));
  }

  /**
   * Get a single Webhook
   * @param params The params for the request
   * @param params.webhookId The webhook ID
   * @returns A single Webhook
   */
  async webhook({ webhookId }: { webhookId: string }) {
    const res = await Webhook.getOne({ siteId: this._id, webhookId }, this.client);
    return new Webhook(this.client, res);
  }

  /**
   * Get a list of Webhooks
   * @returns A list of Webhooks
   */
  async webhooks() {
    const res = await Webhook.list({ siteId: this._id }, this.client);
    return res.data.map((data) => new Webhook(this.client, { ...res, data }));
  }

  /**
   * Remove a Webhook
   * @param params The query string parameters (optional)
   * @param params.webhookId The Webhook ID
   * @returns The result of the removal
   */
  async removeWebhook({ webhookId }: { webhookId: string }) {
    const res = await Webhook.remove({ siteId: this._id, webhookId }, this.client);
    return res.data;
  }

  /**
   * Create a new Webhook
   * @param params The params for the request
   * @param params.url The URL to send the webhook to
   * @param params.triggerType The event to trigger the webhook
   * @param params.filter The filter to apply to the webhook (optional: form_submission only)
   * @returns The created webhook
   */
  async createWebhook({
    triggerType,
    filter,
    url,
  }: {
    url: string;
    siteId: string;
    triggerType: string;
    filter?: WebhookFilter;
  }) {
    const _params = { url, siteId: this._id, triggerType, filter };
    const res = await Webhook.create(_params, this.client);
    return new Webhook(this.client, res);
  }
}
