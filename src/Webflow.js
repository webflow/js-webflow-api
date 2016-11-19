import unirest from 'unirest';

import { isObjectEmpty, requiredArg } from './utils';
import ResponseWrapper from './ResponseWrapper';
import importedWebflowError from './WebflowError';

const WebflowError = importedWebflowError;

const DEFAULT_ENDPOINT = 'https://api.webflow.com';

export default class Webflow {
  constructor({
    endpoint = DEFAULT_ENDPOINT,
    token = requiredArg('token'),
    version = '1.0.0',
  }) {
    this.responseWrapper = new ResponseWrapper(this);

    this.endpoint = endpoint;
    this.token = token;

    this.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'accept-version': version,
      'Content-Type': 'application/json',
    };

    this.promiseUnirest = (method, path, data, query) => {
      let req = unirest[method](`${this.endpoint}${path}`)
        .headers(this.headers);

      if (data) {
        req = req.send(data);
      }

      if (query && !isObjectEmpty(query)) {
        req = req.query(query);
      }

      return new Promise((resolve, reject) => {
        req.end((res) => {
          // Convenience function to attach metadata to responses or errors
          const attachMeta = (obj) => {
            obj._meta = { // eslint-disable-line no-param-reassign
              rateLimit: {
                limit: res.headers['x-ratelimit-limit'],
                remaining: res.headers['x-ratelimit-remaining'],
              },
            };

            return obj;
          };

          if (res.code >= 400) {
            reject(attachMeta(new WebflowError(res.body.err)));
          } else {
            resolve(attachMeta(res.body));
          }
        });
      });
    };
  }

  // Generic HTTP request handlers

  get(path, query = {}) {
    return this.promiseUnirest('get', path, false, query);
  }

  post(path, data, query = {}) {
    return this.promiseUnirest('post', path, data, query);
  }

  put(path, data, query = {}) {
    return this.promiseUnirest('put', path, data, query);
  }

  patch(path, data, query = {}) {
    return this.promiseUnirest('patch', path, data, query);
  }

  delete(path, query = {}) {
    return this.promiseUnirest('delete', path, query);
  }

  // Meta

  info(query = {}) {
    return this.get('/info', query);
  }

  // Sites

  sites(query = {}) {
    return this.get('/sites', query).then(sites => sites.map(site => this.responseWrapper.site(site)));
  }

  site({ siteId = requiredArg('siteId') }, query = {}) {
    return this.get(`/sites/${siteId}`, query).then(site => this.responseWrapper.site(site));
  }

  // Collections

  collections({ siteId = requiredArg('siteId') }, query = {}) {
    return this.get(`/sites/${siteId}/collections`, query).then(
      collections => collections.map(collection => this.responseWrapper.collection(collection)),
    );
  }

  collection({ collectionId = requiredArg('collectionId') }, query = {}) {
    return this.get(`/collections/${collectionId}`, query).then(
      collection => this.responseWrapper.collection(collection),
    );
  }

  // Items

  items({ collectionId = requiredArg('collectionId') }, query = {}) {
    return this.get(`/collections/${collectionId}/items`, query).then(
      res => ({
        ...res,

        items: res.items.map(item => this.responseWrapper.item(item, collectionId)),
      }),
    );
  }

  item({ collectionId = requiredArg('collectionId'), itemId = requiredArg('itemId') }, query = {}) {
    return this.get(`/collections/${collectionId}/items/${itemId}`, query).then(
      res => this.responseWrapper.item(res.items[0], collectionId),
    );
  }

  createItem(params, query = {}) {
    const collectionId = params.collectionId || requiredArg('collectionId');
    const data = { ...params };
    delete data.collectionId;

    return this.post(`/collections/${collectionId}/items`, data, query).then(
      item => this.responseWrapper.item(item, collectionId),
    );
  }

  updateItem(params, query = {}) {
    const collectionId = params.collectionId || requiredArg('collectionId');
    const itemId = params.itemId || requiredArg('itemId');
    const data = { ...params };
    delete data.collectionId;
    delete data.itemId;

    return this.put(`/collections/${collectionId}/items/${itemId}`, data, query);
  }

  removeItem(
    {
      collectionId = requiredArg('collectionId'),
      itemId = requiredArg('itemId'),
    },
    query = {},
  ) {
    return this.delete(`/collections/${collectionId}/items/${itemId}`, query);
  }

  // Images

  // TODO

  // Webhooks

  webhooks({ siteId = requiredArg('siteId') }, query = {}) {
    return this.get(`/sites/${siteId}/webhooks`, query).then(
      webhooks => webhooks.map(webhook => this.responseWrapper.webhook(webhook, siteId)),
    );
  }

  webhook({ siteId = requiredArg('siteId'), webhookId = requiredArg('webhookId') }, query = {}) {
    return this.get(`/sites/${siteId}/webhooks/${webhookId}`, query).then(
      webhook => this.responseWrapper.webhook(webhook, siteId),
    );
  }

  createWebhook(params, query = {}) {
    const siteId = params.siteId || requiredArg('siteId');
    const data = { ...params };
    delete data.siteId;

    return this.post(`/sites/${siteId}/webhooks`, data, query).then(
      webhook => this.responseWrapper.webhook(webhook, siteId),
    );
  }

  removeWebhook(
    {
      siteId = requiredArg('siteId'),
      webhookId = requiredArg('webhookId'),
    },
    query = {},
  ) {
    return this.delete(`/sites/${siteId}/webhooks/${webhookId}`, query);
  }
}
