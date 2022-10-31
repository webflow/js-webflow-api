import fetch from "isomorphic-fetch";
import { WebflowArgumentError, WebflowRequestError } from "./WebflowError";
import ResponseWrapper from "./ResponseWrapper";

const DEFAULT_HOST = "webflow.com";
const USER_AGENT = "Webflow Javascript SDK / 1.0";

export class WebflowClient {
  constructor({
    host = DEFAULT_HOST,
    token,
    version = "1.0.0",
    headers = {},
  } = {}) {
    this.responseWrapper = new ResponseWrapper(this);
    this.version = version;
    this.headers = headers;
    this.token = token;
    this.host = host;
  }

  authenticatedFetch(method, path, data, query) {
    // querystring
    const hasQuery = Object.keys(query).length > 0;
    const queryString = hasQuery ? `?${new URLSearchParams(query)}` : "";

    // headers
    const headers = {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
      "accept-version": this.version,
      Accept: "application/json",
      "User-Agent": USER_AGENT,

      // user headers
      ...this.headers,
    };

    // url and options
    const uri = `https://api.${this.host}${path}${queryString}`;
    const opts = { method, headers, mode: "cors" };

    // body
    if (data) opts.body = JSON.stringify(data);

    // call fetch and wrap response
    return fetch(uri, opts).then(this.responseHandler);
  }

  async responseHandler(res) {
    const body = await res.json();

    // append ratelimit meta data to response
    if (res.headers) {
      const limit = parseInt(res.headers.get("x-ratelimit-limit"), 10);
      const remaining = parseInt(res.headers.get("x-ratelimit-remaining"), 10);
      body._meta = { rateLimit: { limit, remaining } };
    }

    // webflow error
    // if (res.status >= 400) throw new WebflowRequestError(body);
    if (body.err) throw new WebflowRequestError(body);

    return body;
  }

  // Generic HTTP request handlers
  get(path, query = {}) {
    return this.authenticatedFetch("GET", path, null, query);
  }

  post(path, data, query = {}) {
    return this.authenticatedFetch("POST", path, data, query);
  }

  put(path, data, query = {}) {
    return this.authenticatedFetch("PUT", path, data, query);
  }

  patch(path, data, query = {}) {
    return this.authenticatedFetch("PATCH", path, data, query);
  }

  delete(path, data, query = {}) {
    return this.authenticatedFetch("DELETE", path, data, query);
  }

  // Meta
  info(query = {}) {
    return this.get("/info", query);
  }

  installer(query = {}) {
    return this.get("/user", query);
  }

  // Sites
  sites(query = {}) {
    return this.get("/sites", query).then((sites) =>
      sites.map((site) => this.responseWrapper.site(site))
    );
  }

  site({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    return this.get(`/sites/${siteId}`, query).then((site) =>
      this.responseWrapper.site(site)
    );
  }

  publishSite({ siteId, domains }) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!domains) throw new WebflowArgumentError("domains");

    return this.post(`/sites/${siteId}/publish`, { domains });
  }

  domains({ siteId }) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    return this.get(`/sites/${siteId}/domains`).then((domains) =>
      domains.map((domain) => this.responseWrapper.domain(domain, siteId))
    );
  }

  // Collections
  collections({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    return this.get(`/sites/${siteId}/collections`, query).then((collections) =>
      collections.map((collection) =>
        this.responseWrapper.collection(collection)
      )
    );
  }

  collection({ collectionId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");

    return this.get(`/collections/${collectionId}`, query).then((collection) =>
      this.responseWrapper.collection(collection)
    );
  }

  // Items
  items({ collectionId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");

    return this.get(`/collections/${collectionId}/items`, query).then(
      (res) => ({
        ...res,

        items: res.items.map((item) =>
          this.responseWrapper.item(item, collectionId)
        ),
      })
    );
  }

  item({ collectionId, itemId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    return this.get(`/collections/${collectionId}/items/${itemId}`, query).then(
      (res) => this.responseWrapper.item(res.items[0], collectionId)
    );
  }

  createItem({ collectionId, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");

    return this.post(`/collections/${collectionId}/items`, data, query).then(
      (item) => this.responseWrapper.item(item, collectionId)
    );
  }

  updateItem({ collectionId, itemId, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    return this.put(
      `/collections/${collectionId}/items/${itemId}`,
      data,
      query
    );
  }

  removeItem({ collectionId, itemId }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    return this.delete(
      `/collections/${collectionId}/items/${itemId}`,
      null,
      query
    );
  }

  patchItem({ collectionId, itemId, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemId) throw new WebflowArgumentError("itemId");

    return this.patch(
      `/collections/${collectionId}/items/${itemId}`,
      data,
      query
    );
  }

  deleteItems({ collectionId, itemIds, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemIds) throw new WebflowArgumentError("itemIds");

    return this.delete(
      `/collections/${collectionId}/items`,
      { ...data, itemIds },
      query
    );
  }

  publishItems({ collectionId, itemIds, ...data }, query = {}) {
    if (!collectionId) throw new WebflowArgumentError("collectionId");
    if (!itemIds) throw new WebflowArgumentError("itemIds");

    return this.put(
      `/collections/${collectionId}/items/publish`,
      { ...data, itemIds },
      query
    );
  }

  // Users
  users({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    return this.get(`/sites/${siteId}/users`, query).then((res) => ({
      ...res,
      users: res.users.map((user) => this.responseWrapper.user(user)),
    }));
  }

  user({ siteId, userId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!userId) throw new WebflowArgumentError("userId");

    return this.get(`/sites/${siteId}/users/${userId}`, query).then((user) =>
      this.responseWrapper.user(user, siteId)
    );
  }

  updateUser({ siteId, userId, ...data }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!userId) throw new WebflowArgumentError("userId");

    return this.patch(`/sites/${siteId}/users/${userId}`, data, query);
  }

  inviteUser({ siteId, email }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!email) throw new WebflowArgumentError("email");

    return this.post(`/sites/${siteId}/users/invite`, { email }, query).then(
      (user) => this.responseWrapper.user(user, siteId)
    );
  }

  removeUser({ siteId, userId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!userId) throw new WebflowArgumentError("userId");

    return this.delete(`/sites/${siteId}/users/${userId}`, null, query);
  }

  // Webhooks
  webhooks({ siteId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    return this.get(`/sites/${siteId}/webhooks`, query).then((webhooks) =>
      webhooks.map((webhook) => this.responseWrapper.webhook(webhook, siteId))
    );
  }

  webhook({ siteId, webhookId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!webhookId) throw new WebflowArgumentError("webhookId");

    return this.get(`/sites/${siteId}/webhooks/${webhookId}`, query).then(
      (webhook) => this.responseWrapper.webhook(webhook, siteId)
    );
  }

  createWebhook({ siteId, ...data }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");

    return this.post(`/sites/${siteId}/webhooks`, data, query).then((webhook) =>
      this.responseWrapper.webhook(webhook, siteId)
    );
  }

  removeWebhook({ siteId, webhookId }, query = {}) {
    if (!siteId) throw new WebflowArgumentError("siteId");
    if (!webhookId) throw new WebflowArgumentError("webhookId");

    return this.delete(`/sites/${siteId}/webhooks/${webhookId}`, null, query);
  }

  // Webhooks
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

    return this.post("/oauth/revoke_authorization", {
      client_id,
      client_secret,
      access_token,
    });
  }
}

export default WebflowClient;
