import fetch from "isomorphic-fetch";
import { WebflowRequestError } from "./WebflowError";

const DEFAULT_HOST = "webflow.com";
const USER_AGENT = "Webflow Javascript SDK / 1.0";

export class WebflowClient {
  constructor({ host, token, version, headers } = {}) {
    this.host = host || DEFAULT_HOST;
    this.version = version || "1.0.0";
    this.headers = headers || {};
    this.token = token;
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
}

export default WebflowClient;
