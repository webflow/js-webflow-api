import unirest from 'unirest';

import { isObjectEmpty, pick, requiredArg } from './utils';
import WebflowError from './WebflowError';

export const DEFAULT_ENDPOINT = 'https://api.webflow.com';
export const TRIGGER_TYPES = ['form_submission'];

export default class Webflow {
  constructor({ endpoint = DEFAULT_ENDPOINT, token = requiredArg('token') }) {
    this.endpoint = endpoint;
    this.token = token;

    this.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'accept-version': '1.0.0',
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
          const attachMeta = obj => ({
            ...obj,
            _meta: {
              rateLimit: {
                limit: res.headers['x-ratelimit-limit'],
                remaining: res.headers['x-ratelimit-remaining'],
              },
            },
          });

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

  get(path, query) {
    return this.promiseUnirest('get', path, false, query);
  }

  post(path, data) {
    return this.promiseUnirest('post', path, data);
  }

  put(path, data) {
    return this.promiseUnirest('put', path, data);
  }

  patch(path, data) {
    return this.promiseUnirest('patch', path, data);
  }

  delete(path) {
    return this.promiseUnirest('delete', path);
  }

  // Meta

  info() {
    return this.get('/info');
  }

  // Sites

  sites() {
    return this.get('/sites');
  }

  site(siteID = requiredArg('siteID')) {
    return this.get(`/sites/${siteID}`);
  }

  // Collections

  collections(siteID = requiredArg('siteID')) {
    return this.get(`/sites/${siteID}/collections`);
  }

  collection(collectionID = requiredArg('collectionID')) {
    return this.get(`/collections/${collectionID}`);
  }

  // Items

  items(collectionID = requiredArg('collectionID'), query) {
    return this.get(`/collections/${collectionID}/items`, pick(query, 'limit', 'offset'));
  }

  createItem(collectionID = requiredArg('collectionID'), data) {
    return this.post(`/collections/${collectionID}/items`, data);
  }

  updateItem(collectionID = requiredArg('collectionID'), itemID = requiredArg('itemID'), data) {
    return this.put(`/collections/${collectionID}/items/${itemID}`, data);
  }

  removeItem(collectionID = requiredArg('collectionID'), itemID = requiredArg('itemID')) {
    return this.delete(`/collections/${collectionID}/items/${itemID}`);
  }

  // Images

  // TODO

  // Webhooks

  webhooks(siteID = requiredArg('siteID')) {
    return this.get(`/sites/${siteID}/webhooks`);
  }

  webhook(siteID = requiredArg('siteID'), webhookID = requiredArg('webhookID')) {
    return this.get(`/sites/${siteID}/webhooks/${webhookID}`);
  }

  createWebhook(siteID = requiredArg('siteID'), data) {
    const filteredData = pick(data, 'triggerType', 'url', 'filter');

    if (!filteredData.triggerType || TRIGGER_TYPES.includes(filteredData.triggerType)) {
      throw new WebflowError('Missing valid webhook trigger type');
    }

    if (!filteredData.url) {
      throw new WebflowError('Missing webhook URL');
    }

    return this.post(`/sites/${siteID}/webhooks`, filteredData);
  }

  removeWebhook(siteID = requiredArg('siteID'), webhookID = requiredArg('webhookID')) {
    return this.delete(`/sites/${siteID}/webhooks/${webhookID}`);
  }
}
