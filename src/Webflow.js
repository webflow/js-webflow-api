import fetch from "isomorphic-fetch";
import qs from "qs";

import { isObjectEmpty } from "./utils";
import ResponseWrapper from "./ResponseWrapper";
import WebflowError, { buildRequiredArgError } from "./WebflowError";

const DEFAULT_ENDPOINT = "https://api.webflow.com";

const buildMeta = (res) => {
  if (!res || !res.headers) {
    return {};
  }

  return {
    rateLimit: {
      limit: parseInt(res.headers.get("x-ratelimit-limit"), 10),
      remaining: parseInt(res.headers.get("x-ratelimit-remaining"), 10),
    },
  };
};

const responseHandler = (res) =>
  res
    .json()
    .catch((err) =>
      // Catch unexpected server errors where json isn't sent and rewrite
      // with proper class (WebflowError)
      Promise.reject(new WebflowError(err))
    )
    .then((body) => {
      if (res.status >= 400) {
        const errOpts = {
          code: body.code,
          msg: body.msg,
          _meta: buildMeta(res),
        };

        if (body.problems && body.problems.length > 0) {
          errOpts.problems = body.problems;
        }

        const errMsg = body && body.err ? body.err : "Unknown error occured";
        const err = new WebflowError(errMsg);

        return Promise.reject(Object.assign(err, errOpts));
      }

      body._meta = buildMeta(res); // eslint-disable-line no-param-reassign

      return body;
    });

export default class Webflow {
  constructor({ endpoint = DEFAULT_ENDPOINT, token, version = "1.0.0" } = {}) {
    if (!token) throw buildRequiredArgError("token");

    this.responseWrapper = new ResponseWrapper(this);

    this.endpoint = endpoint;
    this.token = token;

    this.headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "accept-version": version,
      "Content-Type": "application/json",
    };

    this.authenticatedFetch = (method, path, data, query) => {
      const queryString =
        query && !isObjectEmpty(query) ? `?${qs.stringify(query)}` : "";

      const uri = `${this.endpoint}${path}${queryString}`;
      const opts = {
        method,
        headers: this.headers,
        mode: "cors",
      };

      if (data) {
        opts.body = JSON.stringify(data);
      }

      return fetch(uri, opts).then(responseHandler);
    };
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

  // Sites

  sites(query = {}) {
    return this.get("/sites", query).then((sites) =>
      sites.map((site) => this.responseWrapper.site(site))
    );
  }

  site({ siteId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));

    return this.get(`/sites/${siteId}`, query).then((site) =>
      this.responseWrapper.site(site)
    );
  }

  publishSite({ siteId, domains }) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));
    if (!domains) return Promise.reject(buildRequiredArgError("domains"));

    return this.post(`/sites/${siteId}/publish`, { domains });
  }

  // Domains

  domains({ siteId }) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));

    return this.get(`/sites/${siteId}/domains`).then((domains) =>
      domains.map((domain) => this.responseWrapper.domain(domain, siteId))
    );
  }

  // Collections

  collections({ siteId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));

    return this.get(`/sites/${siteId}/collections`, query).then((collections) =>
      collections.map((collection) =>
        this.responseWrapper.collection(collection)
      )
    );
  }

  collection({ collectionId }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));

    return this.get(`/collections/${collectionId}`, query).then((collection) =>
      this.responseWrapper.collection(collection)
    );
  }

  // Items

  items({ collectionId }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));

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
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));
    if (!itemId) return Promise.reject(buildRequiredArgError("itemId"));

    return this.get(`/collections/${collectionId}/items/${itemId}`, query).then(
      (res) => this.responseWrapper.item(res.items[0], collectionId)
    );
  }

  createItem({ collectionId, ...data }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));

    return this.post(`/collections/${collectionId}/items`, data, query).then(
      (item) => this.responseWrapper.item(item, collectionId)
    );
  }

  updateItem({ collectionId, itemId, ...data }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));
    if (!itemId) return Promise.reject(buildRequiredArgError("itemId"));

    return this.put(
      `/collections/${collectionId}/items/${itemId}`,
      data,
      query
    );
  }

  removeItem({ collectionId, itemId }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));
    if (!itemId) return Promise.reject(buildRequiredArgError("itemId"));

    return this.delete(
      `/collections/${collectionId}/items/${itemId}`,
      null,
      query
    );
  }

  patchItem({ collectionId, itemId, ...data }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));
    if (!itemId) return Promise.reject(buildRequiredArgError("itemId"));

    return this.patch(
      `/collections/${collectionId}/items/${itemId}`,
      data,
      query
    );
  }

  deleteItems({ collectionId, itemIds, ...data }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));
    if (!itemIds) return Promise.reject(buildRequiredArgError("itemIds"));

    return this.delete(
      `/collections/${collectionId}/items`,
      { ...data, itemIds },
      query
    );
  }

  publishItems({ collectionId, itemIds, ...data }, query = {}) {
    if (!collectionId)
      return Promise.reject(buildRequiredArgError("collectionId"));
    if (!itemIds) return Promise.reject(buildRequiredArgError("itemIds"));

    return this.put(
      `/collections/${collectionId}/items/publish`,
      { ...data, itemIds },
      query
    );
  }

  // Users

  users({ siteId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));

    return this.get(`/sites/${siteId}/users`, query).then((res) =>
      res.users.map((user) => this.responseWrapper.user(user))
    );
  }

  user({ siteId, userId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));
    if (!userId) return Promise.reject(buildRequiredArgError("userId"));

    return this.get(`/sites/${siteId}/users/${userId}`, query).then((user) =>
      this.responseWrapper.user(user, siteId)
    );
  }

  updateUser({ siteId, userId, ...data }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));
    if (!userId) return Promise.reject(buildRequiredArgError("userId"));

    return this.patch(`/sites/${siteId}/users/${userId}`, data, query);
  }

  inviteUser({ siteId, email }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));
    if (!email) return Promise.reject(buildRequiredArgError("email"));

    return this.post(`/sites/${siteId}/users/invite`, { email }, query).then(
      (user) => this.responseWrapper.user(user, siteId)
    );
  }

  removeUser({ siteId, userId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));
    if (!userId) return Promise.reject(buildRequiredArgError("userId"));

    return this.delete(`/sites/${siteId}/users/${userId}`, null, query);
  }

  // Webhooks

  webhooks({ siteId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));

    return this.get(`/sites/${siteId}/webhooks`, query).then((webhooks) =>
      webhooks.map((webhook) => this.responseWrapper.webhook(webhook, siteId))
    );
  }

  webhook({ siteId, webhookId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));
    if (!webhookId) return Promise.reject(buildRequiredArgError("webhookId"));

    return this.get(`/sites/${siteId}/webhooks/${webhookId}`, query).then(
      (webhook) => this.responseWrapper.webhook(webhook, siteId)
    );
  }

  createWebhook({ siteId, ...data }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));

    return this.post(`/sites/${siteId}/webhooks`, data, query).then((webhook) =>
      this.responseWrapper.webhook(webhook, siteId)
    );
  }

  removeWebhook({ siteId, webhookId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError("siteId"));
    if (!webhookId) return Promise.reject(buildRequiredArgError("webhookId"));

    return this.delete(`/sites/${siteId}/webhooks/${webhookId}`, null, query);
  }
}
