import { WebflowClient, WebflowRequestError } from "./WebflowClient";
import ResponseWrapper from "./ResponseWrapper";

export { WebflowRequestError };
export class WebflowArgumentError extends Error {
  constructor(name) {
    super(`Argument '${name}' is required but was not present`);
  }
}
export class Webflow {
  constructor(options = {}) {
    this.client = new WebflowClient(options);
    this.responseWrapper = new ResponseWrapper(this);
  }

  set token(value) {
    this.client.token = value;
  }
  get token() {
    return this.client.token;
  }

  get(path, query = {}) {
    return this.client.get(path, query);
  }

  post(path, data, query = {}) {
    return this.client.post(path, data, query);
  }

  put(path, data, query = {}) {
    return this.client.put(path, data, query);
  }

  patch(path, data, query = {}) {
    return this.client.patch(path, data, query);
  }

  delete(path, data, query = {}) {
    return this.client.delete(path, data, query);
  }

  // Meta
  info() {
    return this.get("/info");
  }

  installer() {
    return this.get("/user");
  }

  // Sites
  async sites(query = {}) {
    const sites = await this.get("/sites", query);
    return sites.map((site) => this.responseWrapper.site(site));
  }

  async site({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    const site = await this.get(`/sites/${siteId}`, query);
    return this.responseWrapper.site(site);
  }

  publishSite({ siteId, domains }) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!domains) throw new WebflowArgumentError("domains");

    return this.post(`/sites/${siteId}/publish`, { domains });
  }

  async domains({ siteId }) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    const domains = await this.client.get(`/sites/${siteId}/domains`);
    return domains.map((domain) => this.responseWrapper.domain(domain, siteId));
  }

  // Collections
  async collections({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    const collections = await this.get(`/sites/${siteId}/collections`, query);
    return collections.map((collection) =>
      this.responseWrapper.collection(collection)
    );
  }

  async collection({ collectionId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");

    const uri = `/collections/${collectionId}`;
    const collection = await this.client.get(uri, query);
    return this.responseWrapper.collection(collection);
  }

  // Items
  async items({ collectionId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");

    const uri = `/collections/${collectionId}/items`;
    const res = await this.client.get(uri, query);

    return {
      ...res,

      items: res.items.map((item) =>
        this.responseWrapper.item(item, collectionId)
      ),
    };
  }

  async item({ collectionId, itemId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    const uri = `/collections/${collectionId}/items/${itemId}`;
    const { items } = await this.client.get(uri, query);
    return this.responseWrapper.item(items[0], collectionId);
  }

  async createItem({ collectionId, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");

    const uri = `/collections/${collectionId}/items`;
    const item = await this.post(uri, data, query);
    return this.responseWrapper.item(item, collectionId);
  }

  updateItem({ collectionId, itemId, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    const uri = `/collections/${collectionId}/items/${itemId}`;
    return this.put(uri, data, query);
  }

  removeItem({ collectionId, itemId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    const uri = `/collections/${collectionId}/items/${itemId}`;
    return this.delete(uri, null, query);
  }

  patchItem({ collectionId, itemId, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    const uri = `/collections/${collectionId}/items/${itemId}`;
    return this.patch(uri, data, query);
  }

  deleteItems({ collectionId, itemIds, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemIds) throw new WebflowArgumentError("itemIds");

    const uri = `/collections/${collectionId}/items`;
    return this.delete(uri, { ...data, itemIds }, query);
  }

  publishItems({ collectionId, itemIds, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemIds) throw new WebflowArgumentError("itemIds");

    const uri = `/collections/${collectionId}/items/publish`;
    return this.put(uri, { ...data, itemIds }, query);
  }

  // Users
  async users({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    const res = await this.get(`/sites/${siteId}/users`, query);
    return {
      ...res,
      users: res.users.map((user) => this.responseWrapper.user(user, siteId)),
    };
  }

  async user({ siteId, userId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!userId) throw new WebflowArgumentError("userId");

    const uri = `/sites/${siteId}/users/${userId}`;
    const user = await this.get(uri, query);
    return this.responseWrapper.user(user, siteId);
  }

  async updateUser({ siteId, userId, ...data }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!userId) throw new WebflowArgumentError("userId");

    const uri = `/sites/${siteId}/users/${userId}`;
    const user = await this.patch(uri, data, query);
    return this.responseWrapper.user(user, siteId);
  }

  async inviteUser({ siteId, email }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!email) throw new WebflowArgumentError("email");

    const uri = `/sites/${siteId}/users/invite`;
    const user = await this.post(uri, { email }, query);
    return this.responseWrapper.user(user, siteId);
  }

  removeUser({ siteId, userId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!userId) throw new WebflowArgumentError("userId");

    return this.delete(`/sites/${siteId}/users/${userId}`, null, query);
  }

  // Webhooks
  async webhooks({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    const uri = `/sites/${siteId}/webhooks`;
    const webhooks = await this.client.get(uri, query);
    return webhooks.map((webhook) =>
      this.responseWrapper.webhook(webhook, siteId)
    );
  }

  async webhook({ siteId, webhookId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!webhookId) throw new WebflowArgumentError("webhookId");

    const uri = `/sites/${siteId}/webhooks/${webhookId}`;
    const webhook = await this.client.get(uri, query);
    return this.responseWrapper.webhook(webhook, siteId);
  }

  async createWebhook({ siteId, triggerType, ...data }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!triggerType) throw new WebflowArgumentError("triggerType");

    const uri = `/sites/${siteId}/webhooks`;
    const webhook = { ...data, triggerType };
    const createdWebhook = await this.client.post(uri, webhook, query);
    return this.responseWrapper.webhook(createdWebhook, siteId);
  }

  removeWebhook({ siteId, webhookId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!webhookId) throw new WebflowArgumentError("webhookId");

    return this.delete(`/sites/${siteId}/webhooks/${webhookId}`, null, query);
  }

  // OAuth
  authorizeUrl({
    client_id,
    redirect_uri,
    state,
    scope,
    response_type = "code",
  }) {
    if (!client_id) throw new WebflowArgumentError("clientId");

    const query = new URLSearchParams({ response_type, client_id });

    if (redirect_uri) query.set("redirect_uri", redirect_uri);
    if (state) query.set("state", state);
    if (scope) query.set("scope", scope);

    return `https://${this.host}/oauth/authorize?${query}`;
  }

  accessToken({
    client_id,
    client_secret,
    code,
    redirect_uri,
    grant_type = "authorization_code",
  }) {
    if (!client_id) throw new WebflowArgumentError("client_id");
    if (!client_secret) throw new WebflowArgumentError("client_secret");
    if (!code) throw new WebflowArgumentError("code");

    return this.post("/oauth/access_token", {
      client_id,
      client_secret,
      code,
      redirect_uri,
      grant_type,
    });
  }

  revokeToken({ client_id, client_secret, access_token }) {
    if (!client_id) throw new WebflowArgumentError("client_id");
    if (!client_secret) throw new WebflowArgumentError("client_secret");
    if (!access_token) throw new WebflowArgumentError("access_token");

    const uri = "/oauth/revoke_authorization";
    return this.post(uri, { client_id, client_secret, access_token });
  }
}

export default Webflow;
