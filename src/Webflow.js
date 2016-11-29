import fetch from 'isomorphic-fetch';
import qs from 'qs';

import { isObjectEmpty } from './utils';
import ResponseWrapper from './ResponseWrapper';
import WebflowError, { buildRequiredArgError } from './WebflowError';

const DEFAULT_ENDPOINT = 'https://api.webflow.com';

export default class Webflow {
  constructor({
    endpoint = DEFAULT_ENDPOINT,
    token,
    version = '1.0.0',
  } = {}) {
    if (!token) throw buildRequiredArgError('token');

    this.responseWrapper = new ResponseWrapper(this);

    this.endpoint = endpoint;
    this.token = token;

    this.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'accept-version': version,
      'Content-Type': 'application/json',
    };

    this.authenticatedFetch = (method, path, data, query) => {
      const queryString = query && !isObjectEmpty(query)
        ? `?${qs.stringify(query)}`
        : '';

      const uri = `${this.endpoint}${path}${queryString}`;
      const opts = {
        method,
        headers: this.headers,
        mode: 'cors',
      };

      if (data) {
        opts.body = JSON.stringify(data);
      }

      // Convenience function to attach metadata to responses or errors
      const attachMeta = (res, obj) => {
        obj._meta = { // eslint-disable-line no-param-reassign
          rateLimit: {
            limit: parseInt(res.headers.get('x-ratelimit-limit'), 10),
            remaining: parseInt(res.headers.get('x-ratelimit-remaining'), 10),
          },
        };

        return obj;
      };

      let savedRes;
      return fetch(uri, opts).then(
        (res) => {
          savedRes = res;

          if (res.status >= 400) {
            const err = attachMeta(res, new WebflowError(res.body.err));
            err._meta.body = res.body;
            throw err;
          } else {
            return res.json();
          }
        },
      ).then(
        body => attachMeta(savedRes, body),
      );
    };
  }

  // Generic HTTP request handlers

  get(path, query = {}) {
    return this.authenticatedFetch('GET', path, false, query);
  }

  post(path, data, query = {}) {
    return this.authenticatedFetch('POST', path, data, query);
  }

  put(path, data, query = {}) {
    return this.authenticatedFetch('PUT', path, data, query);
  }

  patch(path, data, query = {}) {
    return this.authenticatedFetch('PATCH', path, data, query);
  }

  delete(path, query = {}) {
    return this.authenticatedFetch('DELETE', path, query);
  }

  // Meta

  info(query = {}) {
    return this.get('/info', query);
  }

  // Sites

  sites(query = {}) {
    return this.get('/sites', query).then(sites => sites.map(site => this.responseWrapper.site(site)));
  }

  site({ siteId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError('siteId'));

    return this.get(`/sites/${siteId}`, query).then(site => this.responseWrapper.site(site));
  }

  // Collections

  collections({ siteId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError('siteId'));

    return this.get(`/sites/${siteId}/collections`, query).then(
      collections => collections.map(collection => this.responseWrapper.collection(collection)),
    );
  }

  collection({ collectionId }, query = {}) {
    if (!collectionId) return Promise.reject(buildRequiredArgError('collectionId'));

    return this.get(`/collections/${collectionId}`, query).then(
      collection => this.responseWrapper.collection(collection),
    );
  }

  // Items

  items({ collectionId }, query = {}) {
    if (!collectionId) return Promise.reject(buildRequiredArgError('collectionId'));

    return this.get(`/collections/${collectionId}/items`, query).then(
      res => ({
        ...res,

        items: res.items.map(item => this.responseWrapper.item(item, collectionId)),
      }),
    );
  }

  item({ collectionId, itemId }, query = {}) {
    if (!collectionId) return Promise.reject(buildRequiredArgError('collectionId'));
    if (!itemId) return Promise.reject(buildRequiredArgError('siteId'));

    return this.get(`/collections/${collectionId}/items/${itemId}`, query).then(
      res => this.responseWrapper.item(res.items[0], collectionId),
    );
  }

  createItem({ collectionId, ...data }, query = {}) {
    if (!collectionId) return Promise.reject(buildRequiredArgError('collectionId'));

    return this.post(`/collections/${collectionId}/items`, data, query).then(
      item => this.responseWrapper.item(item, collectionId),
    );
  }

  updateItem({ collectionId, itemId, ...data }, query = {}) {
    if (!collectionId) return Promise.reject(buildRequiredArgError('collectionId'));
    if (!itemId) return Promise.reject(buildRequiredArgError('itemId'));

    return this.put(`/collections/${collectionId}/items/${itemId}`, data, query);
  }

  removeItem({ collectionId, itemId }, query = {}) {
    if (!collectionId) return Promise.reject(buildRequiredArgError('collectionId'));
    if (!itemId) return Promise.reject(buildRequiredArgError('itemId'));

    return this.delete(`/collections/${collectionId}/items/${itemId}`, query);
  }

  // Images

  // TODO

  // Webhooks

  webhooks({ siteId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError('siteId'));

    return this.get(`/sites/${siteId}/webhooks`, query).then(
      webhooks => webhooks.map(webhook => this.responseWrapper.webhook(webhook, siteId)),
    );
  }

  webhook({ siteId, webhookId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError('siteId'));
    if (!webhookId) return Promise.reject(buildRequiredArgError('webhookId'));

    return this.get(`/sites/${siteId}/webhooks/${webhookId}`, query).then(
      webhook => this.responseWrapper.webhook(webhook, siteId),
    );
  }

  createWebhook({ siteId, ...data }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError('siteId'));

    return this.post(`/sites/${siteId}/webhooks`, data, query).then(
      webhook => this.responseWrapper.webhook(webhook, siteId),
    );
  }

  removeWebhook({ siteId, webhookId }, query = {}) {
    if (!siteId) return Promise.reject(buildRequiredArgError('siteId'));
    if (!webhookId) return Promise.reject(buildRequiredArgError('webhookId'));

    return this.delete(`/sites/${siteId}/webhooks/${webhookId}`, query);
  }
}
