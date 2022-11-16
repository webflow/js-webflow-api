import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { PaginationFilter, ErrorInterceptor } from "../core";
import {
  Collection,
  IAccessTokenParams,
  IAuthorizeUrlParams,
  IRevokeTokenParams,
  User,
  Meta,
  OAuth,
  Site,
  Webhook,
  WebhookFilter,
  Item,
} from "../api";

export const DEFAULT_HOST = "webflow.com";
export const USER_AGENT = "Webflow Javascript SDK / 1.0";

export interface Options {
  host?: string;
  token?: string;
  version?: string;
  headers?: Record<string, string>;
}

/**************************************************************
 * Class
 **************************************************************/
export class Webflow {
  private client: AxiosInstance;
  constructor(public options: Options = {}) {
    this.client = axios.create(this.config);
    this.client.interceptors.response.use(ErrorInterceptor);
  }

  // Set the Authentication token
  set token(value: string) {
    this.options.token = value;
  }

  // clear the Authorization header
  clearToken() {
    delete this.options.token;
  }

  // The Axios configuration
  get config() {
    const { host = DEFAULT_HOST, token, version, headers } = this.options;

    const config: AxiosRequestConfig = {
      baseURL: `https://api.${host}/`,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": USER_AGENT,
        ...headers,
      },
    };

    // Add the version to the headers if passed in
    if (version) config.headers["Accept-Version"] = version;

    // Add the Authorization header if a token is set
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  }

  /**************************************************************
   * HTTP Methods
   **************************************************************/

  /**
   * Send a GET request to the Webflow API
   * @param path The path to the endpoint
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  get(path: string, params?: Record<string, any>) {
    return this.client.get(path, { params });
  }
  /**
   * Send a DELETE request to the Webflow API
   * @param path The path to the endpoint
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  delete(path: string, params?: Record<string, any>) {
    return this.client.delete(path, { params });
  }
  /**
   * Send a POST request to create a new Collection
   * @param path The path to the endpoint
   * @param data The data to send
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  post(path: string, data: any, params?: Record<string, any>) {
    return this.client.post(path, data, { params });
  }
  /**
   * Send a PUT request to create a new Collection
   * @param path The path to the endpoint
   * @param data The data to send
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  put(path: string, data: any, params?: Record<string, any>) {
    return this.client.put(path, data, { params });
  }
  /**
   * Send a PATCH request to create a new Collection
   * @param path The path to the endpoint
   * @param data The data to send
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  patch(path: string, data: any, params?: Record<string, any>) {
    return this.client.patch(path, data, { params });
  }

  /**************************************************************
   * OAuth Endpoints
   **************************************************************/

  /**
   * Create an OAuth Authorization url
   * @param params The OAuth information
   * @param params.state The state parameter (optional)
   * @param params.scope The scope parameter (optional)
   * @param params.client_id The client_id parameter (optional)
   * @param params.redirect_uri The redirect_uri parameter (optional)
   * @param params.response_type The response_type parameter (default: "code")
   * @returns The url to redirect to
   */
  authorizeUrl(params: IAuthorizeUrlParams) {
    return OAuth.authorizeUrl(params, this.client);
  }
  /**
   * Create an OAuth Access Token
   * @param params The OAuth information
   * @param params.code The code parameter
   * @param params.client_id The client_id parameter
   * @param params.client_secret The client_secret parameter
   * @param params.redirect_uri The redirect_uri parameter (optional)
   * @param params.grant_type The grant_type parameter (default: "authorization_code")
   * @returns The access token
   */
  async accessToken(params: IAccessTokenParams) {
    const res = await OAuth.accessToken(params, this.client);
    return res.data;
  }
  /**
   * Revoke an OAuth Access Token
   * @param params The access token information
   * @param params.access_token The access token
   * @param params.client_id The client_id parameter
   * @param params.client_secret The client_secret parameter
   * @returns The result of the revoked token
   */
  async revokeToken(params: IRevokeTokenParams) {
    const res = await OAuth.revokeToken(params, this.client);
    return res.data;
  }

  /**************************************************************
   * Meta Endpoints
   **************************************************************/

  /**
   * Get the current authorization information
   * @returns The authorization information
   */
  async info() {
    const res = await Meta.info(this.client);
    return res.data;
  }
  /**
   * Get the current authenticated user
   * @returns The current authenticated user
   */
  async authenticatedUser() {
    const res = await Meta.user(this.client);
    return res.data;
  }

  /**************************************************************
   * Site Endpoints
   **************************************************************/

  /**
   * Get a list of Sites available
   * @returns A list of Sites
   */
  async sites() {
    const res = await Site.list(this.client);
    return res.data.map((data) => new Site(this.client, { ...res, data }));
  }
  /**
   * Get a single Site
   * @param params The Site information
   * @param params.siteId The Site ID
   * @returns The Site
   */
  async site({ siteId }: { siteId: string }) {
    const res = await Site.getOne({ siteId }, this.client);
    return new Site(this.client, res);
  }
  /**
   * Publish a Site
   * @param params The Site information
   * @param params.siteId The Site ID
   * @param params.domain The domains to publish
   * @returns The result of the publish
   */
  async publishSite({ siteId, domains }: { siteId: string } & { domains: string[] }) {
    const res = await Site.publish({ siteId, domains }, this.client);
    return res.data;
  }
  /**
   * Get a list of Domains for a Site
   * @param params The Site information
   * @param params.siteId The Site ID
   * @returns A list of Domains
   */
  async domains({ siteId }: { siteId: string }) {
    const res = await Site.domains({ siteId }, this.client);
    return res.data;
  }

  /**************************************************************
   * Collection Endpoints
   **************************************************************/

  /**
   * Get a list of Collections
   * @param params The Site information
   * @param params.siteId The Site ID
   * @returns A list of Collections
   */
  async collections({ siteId }: { siteId: string }) {
    const res = await Collection.list({ siteId }, this.client);
    return res.data.map((data) => new Collection(this.client, { ...res, data }));
  }
  /**
   * Get a single Collection
   * @param params The Collection information
   * @param params.collectionId The Collection ID
   * @returns A single Collection
   */
  async collection({ collectionId }: { collectionId: string }) {
    const res = await Collection.getOne({ collectionId }, this.client);
    return new Collection(this.client, res);
  }

  /**************************************************************
   * Item Endpoints
   **************************************************************/

  /**
   * Get a list of Collection Items
   * @param params The Collection information
   * @param params.collectionId The Collection ID
   * @param params.limit The number of items to return
   * @param params.offset The number of items to skip
   * @returns A list of Items
   */
  async items({ collectionId, limit, offset }: { collectionId: string } & PaginationFilter) {
    const res = await Item.list({ collectionId, limit, offset }, this.client);
    return res.data.items.map((data) => new Item(this.client, { ...res, data }));
  }
  /**
   * Get a single Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @returns A single Collection Item
   */
  async item({ itemId, collectionId }: { itemId: string; collectionId: string }) {
    const res = await Item.getOne({ itemId, collectionId }, this.client);
    const [item] = res.data.items.map((data) => new Item(this.client, { ...res, data }));
    return item;
  }
  /**
   * Create a new Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @returns The created Collection Item
   */
  async createItem({ collectionId, fields }: { collectionId: string; fields: any }) {
    const res = await Item.create({ collectionId, fields }, this.client);
    return new Item(this.client, res);
  }
  /**
   * Update a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param query The query parameters (optional)
   * @returns The updated Collection Item
   */
  async updateItem({ collectionId, itemId, ...fields }: { itemId: string; collectionId: string }) {
    const _params = { collectionId, itemId, fields };
    const res = await Item.update(_params, this.client);
    return new Item(this.client, res);
  }
  /**
   * Patch a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @returns The patched Collection Item
   */
  async patchItem({ collectionId, itemId, ...fields }: { collectionId: string; itemId: string }) {
    const _params = { collectionId, itemId, fields };
    const res = await Item.patch(_params, this.client);
    return new Item(this.client, res);
  }
  /**
   * Delete a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @returns The deleted Collection Item result
   */
  async removeItem({ collectionId, itemId }: { itemId: string; collectionId: string }) {
    const res = await Item.remove({ collectionId, itemId }, this.client);
    return res.data;
  }
  /**
   * Upublish a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param params.live Update the live version
   * @returns The unpublished Collection Item result
   */
  async deleteItems({
    collectionId,
    itemIds,
    live,
  }: {
    collectionId: string;
    itemIds: string[];
    live?: boolean;
  }) {
    const res = await Item.unpublish({ collectionId, itemIds, live }, this.client);
    return res.data;
  }
  /**
   * Publish a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param params.live Update the live version
   * @returns The Published Collection Item result
   */
  async publishItems({
    collectionId,
    itemIds,
    live,
  }: {
    collectionId: string;
    itemIds: string[];
    live?: boolean;
  }) {
    const res = await Item.publish({ collectionId, itemIds, live }, this.client);
    return res.data;
  }

  /**************************************************************
   * Membership Endpoints
   **************************************************************/

  /**
   * Get a list of User accounts
   * @param params The Site information
   * @param params.siteId The Site ID
   * @param pageParams The pagination information (optional)
   * @returns A list of User accounts
   */
  async users({ siteId }: { siteId: string }, pageParams?: PaginationFilter) {
    const res = await User.list({ siteId, ...pageParams }, this.client);
    return res.data.users.map((data) => new User(this.client, { ...res, data }));
  }

  /**
   * Get a single User account
   * @param param The Site and User information
   * @param param.siteId The Site ID
   * @param param.userId The User ID
   * @returns The User information
   */
  async user({ siteId, userId }: { siteId: string; userId: string }) {
    const res = await User.getOne({ siteId, userId }, this.client);
    return new User(this.client, res, res.data, { siteId });
  }

  /**
   * Update a User account
   * @param params The Site and User information
   * @param params.siteId The Site ID
   * @param params.userId The User ID
   * @returns The updated User
   */
  async updateUser({ siteId, userId, ...data }: { siteId: string; userId: string; data: any }) {
    const _params = { siteId, userId, data };
    const res = await User.update(_params, this.client);
    return new User(this.client, res, res.data, { siteId });
  }

  /**
   * Invite a User to a Site
   * @param params The Site and User information
   * @param params.siteId The Site ID
   * @param params.email The User's email address
   * @returns The created User account
   */
  async inviteUser({ siteId, email }: { siteId: string; email: string }) {
    const res = await User.invite({ siteId, email }, this.client);
    return new User(this.client, res, res.data, { siteId });
  }

  /**
   * Remove a user from a Site
   * @param params The Site and User information
   * @param params.siteId The Site ID
   * @param params.userId The User ID
   * @returns The result from the remove request
   */
  async removeUser({ siteId, userId }: { siteId: string; userId: string }) {
    const res = await User.remove({ siteId, userId }, this.client);
    return res.data;
  }

  /**
   * Get a list of User Access Groups
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @param params.sort The sort order of the groups (optional)
   * @returns A list of Access Groups
   */
  async accessGroups({
    siteId,
    limit,
    offset,
    sort,
  }: {
    siteId: string;
    limit?: number;
    offset?: number;
    sort?: string;
  }) {
    const params = { siteId, limit, offset, sort };
    const res = await User.accessGroups(params, this.client);
    return res.data;
  }

  /**************************************************************
   * Webhook Endpoints
   **************************************************************/

  /**
   * Get a list of webhooks for a Site
   * @param params The site information to get the Webhooks from
   * @param params.siteId The Site ID
   * @returns A list of Webhooks
   */
  async webhooks({ siteId }: { siteId: string }) {
    const res = await Webhook.list({ siteId }, this.client);
    return res.data.map((data) => new Webhook(this.client, { ...res, data }));
  }

  /**
   * Get a single Webhook
   * @param params The Webhook and Site information
   * @param params.siteId The Site Id
   * @param params.webhookId The Webhook Id
   * @returns The Webhook
   */
  async webhook({ siteId, webhookId }: { siteId: string; webhookId: string }) {
    const res = await Webhook.getOne({ siteId, webhookId }, this.client);
    return new Webhook(this.client, res);
  }

  /**
   * Remove a Webhook
   * @param params The Webhook and Site information
   * @param params.siteId The Site Id
   * @param params.webhookId The Webhook Id
   * @returns the result from the remove request
   */
  async removeWebhook({ siteId, webhookId }: { siteId: string; webhookId: string }) {
    const res = await Webhook.remove({ siteId, webhookId }, this.client);
    return res.data;
  }

  /**
   * Create a Webhook
   * @param params The params to create a webhooks
   * @param params.siteId The Site Id
   * @param params.url The Url the Webhook should call on events
   * @param params.triggerType The type of event that should trigger the Webhook
   * @param params.filter The filter to apply to the Webhook (form_submssion only)
   * @returns The created webhook
   */
  async createWebhook({
    url,
    siteId,
    triggerType,
    filter,
  }: {
    url: string;
    siteId: string;
    triggerType: string;
    filter?: WebhookFilter;
  }) {
    const _params = { url, siteId, triggerType, filter };
    const res = await Webhook.create(_params, this.client);
    return new Webhook(this.client, res);
  }
}
