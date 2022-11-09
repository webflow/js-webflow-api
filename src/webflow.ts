import { QueryString, Options, Client, PaginationFilter } from "./core";
import { Meta, OAuth, Webhook } from "./api";
import {
  MembershipWrapper,
  CollectionWrapper,
  WebhookWrapper,
  SiteWrapper,
  ItemWrapper,
  ResponseWrapper,
} from "./wrapper";

/**************************************************************
 * Class
 **************************************************************/
export class Webflow {
  client: Client;

  constructor(public options: Options = {}) {
    this.client = new Client(options);
  }

  // Set the Authentication token
  set token(value: string) {
    this.client.token = value;
  }

  // clear the Authorization header
  clearToken() {
    this.client.clearToken();
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
  get(path: string, params?: QueryString) {
    return this.client.get(path, { params });
  }
  /**
   * Send a DELETE request to the Webflow API
   * @param path The path to the endpoint
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  delete(path: string, params?: QueryString) {
    return this.client.delete(path, { params });
  }
  /**
   * Send a POST request to create a new Collection
   * @param path The path to the endpoint
   * @param data The data to send
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  post(path: string, data: any, params?: QueryString) {
    return this.client.post(path, data, { params });
  }
  /**
   * Send a PUT request to create a new Collection
   * @param path The path to the endpoint
   * @param data The data to send
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  put(path: string, data: any, params?: QueryString) {
    return this.client.put(path, data, { params });
  }
  /**
   * Send a PATCH request to create a new Collection
   * @param path The path to the endpoint
   * @param data The data to send
   * @param params The query parameters (optional)
   * @returns The response from the Webflow API
   */
  patch(path: string, data: any, params?: QueryString) {
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
  authorizeUrl(params: OAuth.IAuthorizeUrlParams) {
    return OAuth.authorizeUrl(this.client, params);
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
  async accessToken(params: OAuth.IAccessTokenParams) {
    const res = await OAuth.accessToken(this.client, params);
    return ResponseWrapper<typeof res.data>(res);
  }
  /**
   * Revoke an OAuth Access Token
   * @param params The access token information
   * @param params.access_token The access token
   * @param params.client_id The client_id parameter
   * @param params.client_secret The client_secret parameter
   * @returns The result of the revoked token
   */
  async revokeToken(params: OAuth.IRevokeTokenParams) {
    const res = await OAuth.revokeToken(this.client, params);
    return ResponseWrapper<typeof res.data>(res);
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
    return ResponseWrapper<typeof res.data>(res);
  }
  /**
   * Get the current authenticated user
   * @returns The current authenticated user
   */
  async authenticatedUser() {
    const res = await Meta.user(this.client);
    return ResponseWrapper<typeof res.data>(res);
  }

  /**************************************************************
   * Site Endpoints
   **************************************************************/

  /**
   * Get a list of Sites available
   * @param query The query parameters (optional)
   * @returns A list of Sites
   */
  async sites(query?: QueryString) {
    return SiteWrapper.list(this.client, query);
  }
  /**
   * Get a single Site
   * @param params The Site information
   * @param params.siteId The Site ID
   * @returns The Site
   */
  async site({ siteId }: { siteId: string }) {
    return SiteWrapper.getOne(this.client, { siteId });
  }
  /**
   * Publish a Site
   * @param params The Site information
   * @param params.siteId The Site ID
   * @param params.domain The domains to publish
   * @returns The result of the publish
   */
  publishSite({ siteId, domains }: { siteId: string } & { domains: string[] }) {
    return SiteWrapper.publish(this.client, { siteId, domains });
  }
  /**
   * Get a list of Domains for a Site
   * @param params The Site information
   * @param params.siteId The Site ID
   * @returns A list of Domains
   */
  async domains({ siteId }: { siteId: string }) {
    return SiteWrapper.domains(this.client, { siteId });
  }

  /**************************************************************
   * Collection Endpoints
   **************************************************************/

  /**
   * Get a list of Collections
   * @param params The Site information
   * @param params.siteId The Site ID
   * @param query The query parameters (optional)
   * @returns A list of Collections
   */
  async collections({ siteId }: { siteId: string }, query?: QueryString) {
    return CollectionWrapper.list(this.client, { siteId }, query);
  }
  /**
   * Get a single Collection
   * @param params The Collection information
   * @param params.collectionId The Collection ID
   * @returns A single Collection
   */
  async collection({ collectionId }: { collectionId: string }) {
    return CollectionWrapper.getOne(this.client, { collectionId });
  }

  /**************************************************************
   * Item Endpoints
   **************************************************************/

  /**
   * Get a list of Collection Items
   * @param params The Collection information
   * @param params.collectionId The Collection ID
   * @param pageParams The pagination parameters (optional)
   * @returns A list of Items
   */
  async items(
    { collectionId }: { collectionId: string },
    pageParams?: PaginationFilter
  ) {
    return ItemWrapper.list(this.client, { collectionId, ...pageParams });
  }
  /**
   * Get a single Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @returns A single Collection Item
   */
  async item({
    itemId,
    collectionId,
  }: {
    itemId: string;
    collectionId: string;
  }) {
    return ItemWrapper.getOne(this.client, { itemId, collectionId });
  }
  /**
   * Create a new Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @returns The created Collection Item
   */
  async createItem({
    collectionId,
    fields,
  }: {
    collectionId: string;
    fields: any;
  }) {
    return ItemWrapper.create(this.client, { collectionId, fields });
  }
  /**
   * Update a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param query The query parameters (optional)
   * @returns The updated Collection Item
   */
  updateItem({
    collectionId,
    itemId,
    ...fields
  }: {
    itemId: string;
    collectionId: string;
  }) {
    const _params = { collectionId, itemId, fields };
    return ItemWrapper.update(this.client, _params);
  }
  /**
   * Patch a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param query The query parameters (optional)
   * @returns The patched Collection Item
   */
  patchItem(
    {
      collectionId,
      itemId,
      ...fields
    }: { collectionId: string; itemId: string },
    query?: QueryString
  ) {
    const _params = { collectionId, itemId, fields };
    return ItemWrapper.patch(this.client, _params, query);
  }
  /**
   * Delete a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @returns The deleted Collection Item result
   */
  removeItem({
    collectionId,
    itemId,
  }: {
    itemId: string;
    collectionId: string;
  }) {
    return ItemWrapper.remove(this.client, { collectionId, itemId });
  }
  /**
   * Upublish a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param query The query parameters (optional)
   * @param query.live Update the live version
   * @returns The unpublished Collection Item result
   */
  deleteItems({
    collectionId,
    itemIds,
    live,
  }: {
    collectionId: string;
    itemIds: string[];
    live?: boolean;
  }) {
    const params = { collectionId, itemIds, live };
    return ItemWrapper.unpublish(this.client, params);
  }
  /**
   * Publish a Collection Item
   * @param params The Item information
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param query The query parameters (optional)
   * @param query.live Update the live version
   * @returns The Published Collection Item result
   */
  publishItems({
    collectionId,
    itemIds,
    live,
  }: {
    collectionId: string;
    itemIds: string[];
    live?: boolean;
  }) {
    const params = { collectionId, itemIds, live };
    return ItemWrapper.publish(this.client, params);
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
    return MembershipWrapper.list(this.client, { siteId, ...pageParams });
  }

  /**
   * Get a single User account
   * @param param The Site and User information
   * @param param.siteId The Site ID
   * @param param.userId The User ID
   * @returns The User information
   */
  async user({ siteId, userId }: { siteId: string; userId: string }) {
    return MembershipWrapper.getOne(this.client, { siteId, userId });
  }

  /**
   * Update a User account
   * @param params The Site and User information
   * @param params.siteId The Site ID
   * @param params.userId The User ID
   * @returns The updated User
   */
  async updateUser({
    siteId,
    userId,
    ...data
  }: {
    siteId: string;
    userId: string;
    data: any;
  }) {
    const _params = { siteId, userId, data };
    return MembershipWrapper.update(this.client, _params);
  }

  /**
   * Invite a User to a Site
   * @param params The Site and User information
   * @param params.siteId The Site ID
   * @param params.email The User's email address
   * @returns The created User account
   */
  async inviteUser({ siteId, email }: { siteId: string; email: string }) {
    return MembershipWrapper.invite(this.client, { siteId, email });
  }

  /**
   * Remove a user from a Site
   * @param params The Site and User information
   * @param params.siteId The Site ID
   * @param params.userId The User ID
   * @returns The result from the remove request
   */
  removeUser({ siteId, userId }: { siteId: string; userId: string }) {
    return MembershipWrapper.remove(this.client, { siteId, userId });
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
  async webhooks({ siteId }: { siteId: string }, query?: QueryString) {
    return WebhookWrapper.list(this.client, { siteId }, query);
  }

  /**
   * Get a single Webhook
   * @param params The Webhook and Site information
   * @param params.siteId The Site Id
   * @param params.webhookId The Webhook Id
   * @returns The Webhook
   */
  async webhook({ siteId, webhookId }: { siteId: string; webhookId: string }) {
    return WebhookWrapper.getOne(this.client, { siteId, webhookId });
  }

  /**
   * Remove a Webhook
   * @param params The Webhook and Site information
   * @param params.siteId The Site Id
   * @param params.webhookId The Webhook Id
   * @returns the result from the remove request
   */
  removeWebhook({ siteId, webhookId }: { siteId: string; webhookId: string }) {
    return WebhookWrapper.remove(this.client, { siteId, webhookId });
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
    filter?: Webhook.Filter;
  }) {
    const _params = { url, siteId, triggerType, filter };
    return WebhookWrapper.create(this.client, _params);
  }
}
