import {
  CreateWebhookParams,
  CollectionWrapper,
  ResponseWrapper,
  WebhookWrapper,
} from ".";
import { Client, QueryString } from "../core";
import { Site } from "../api";

export class SiteWrapper implements Site.ISite {
  lastPublished: string;
  previewUrl: string;
  createdOn: string;
  shortName: string;
  timezone: string;
  database: string;
  name: string;
  _id: string;

  constructor(private client: Client, site: Site.ISite) {
    Object.assign(this, site);
  }

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a single Site
   * @param client The Webflow client
   * @param params The Site information
   * @param params.siteId The Site ID
   * @returns The Site
   */
  static async getOne(client: Client, { siteId }: { siteId: string }) {
    const res = await Site.getOne(client, { siteId });
    const site = new SiteWrapper(client, res.data);
    return ResponseWrapper<typeof site>(res, site);
  }

  /**
   * Get a list of Sites available
   * @param client The Webflow client
   * @param params The query parameters (optional)
   * @returns A list of Sites
   */
  static async list(client: Client, params?: QueryString) {
    const res = await Site.list(client, params);
    const sites = res.data.map((s) => new SiteWrapper(client, s));
    return ResponseWrapper<typeof sites>(res, sites);
  }

  /**
   * Get a list of Domains for a Site
   * @param client The Webflow client
   * @param params The Site information
   * @param params.siteId The Site ID
   * @returns A list of Domains
   */
  static async domains(client: Client, { siteId }: { siteId: string }) {
    const res = await Site.domains(client, { siteId });
    return ResponseWrapper<typeof res.data>(res, res.data);
  }

  /**
   * Publish a Site
   * @param client The Webflow client
   * @param params The Site information
   * @param params.siteId The Site ID
   * @param params.domain The domains to publish
   * @returns The result of the publish
   */
  static async publish(
    client: Client,
    { siteId, domains }: { siteId: string; domains: string[] }
  ) {
    const res = await Site.publish(client, { siteId, domains });
    return ResponseWrapper<typeof res.data>(res);
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Get a list of domains for a site
   * @returns A list of domains
   */
  async domains() {
    const res = await Site.domains(this.client, { siteId: this._id });
    return ResponseWrapper<typeof res.data>(res);
  }

  /**
   * Publish a site
   * @param domains The domains to publish to
   * @returns The publish result
   */
  async publishSite(domains: string[]) {
    const res = await Site.publish(this.client, { siteId: this._id, domains });
    return ResponseWrapper<typeof res.data>(res);
  }

  /**
   * Get a single Collection
   * @param params The params for the request
   * @param params.collectionId The collection ID
   * @returns A single Collection
   */
  async collection({ collectionId }: { collectionId: string }) {
    return CollectionWrapper.getOne(this.client, { collectionId });
  }

  /**
   * Get a list of Collections
   * @returns A list of Collections
   */
  async collections() {
    return CollectionWrapper.list(this.client, { siteId: this._id });
  }

  /**
   * Get a single Webhook
   * @param params The params for the request
   * @param params.webhookId The webhook ID
   * @returns A single Webhook
   */
  async webhook({ webhookId }: { webhookId: string }) {
    return WebhookWrapper.getOne(this.client, { siteId: this._id, webhookId });
  }

  /**
   * Get a list of Webhooks
   * @param params The query string parameters (optional)
   * @returns A list of Webhooks
   */
  async webhooks(params?: QueryString) {
    return WebhookWrapper.list(this.client, { siteId: this._id }, params);
  }

  /**
   * Remove a Webhook
   * @param params The query string parameters (optional)
   * @param params.webhookId The Webhook ID
   * @returns The result of the removal
   */
  async removeWebhook({ webhookId }: { webhookId: string }) {
    return WebhookWrapper.remove(this.client, { siteId: this._id, webhookId });
  }

  /**
   * Create a new Webhook
   * @param params1 The params for the request
   * @param params1.url The URL to send the webhook to
   * @param params1.triggerType The event to trigger the webhook
   * @param params1.filter The filter to apply to the webhook (optional: form_submission only)
   * @param params The query string parameters (optional)
   * @returns The created webhook
   */
  async createWebhook({ triggerType, filter, url }: CreateWebhookParams) {
    const _params = { url, siteId: this._id, triggerType, filter };
    return WebhookWrapper.create(this.client, _params);
  }
}
