import fetch from "isomorphic-fetch";

const DEFAULT_HOST = "webflow.com";
const USER_AGENT = "Webflow Javascript SDK / 1.0";

export class WebflowRequestError extends Error {
  constructor(error) {
    super(error.err ? error.err : "Unknown error occured");
    Object.assign(this, error);
  }
}

export class WebflowClient {
  constructor({ host, token, version, headers, mode } = {}) {
    this.host = host || DEFAULT_HOST;
    this.headers = headers || {};
    this.version = version;
    this.token = token;
    this.mode = mode;
  }

  getUri(path, query = {}) {
    const hasQuery = Object.keys(query).length > 0;
    const queryString = hasQuery ? `?${new URLSearchParams(query)}` : "";
    return `https://api.${this.host}${path}${queryString}`;
  }

  getHeaders() {
    const { version, token } = this;

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": USER_AGENT,
    };

    // set authorization header if token is set
    if (token) headers.Authorization = `Bearer ${token}`;

    // set the API version
    if (version) headers["accept-version"] = version;

    // merge headers with user headers;
    return { ...headers, ...this.headers };
  }

  async parseBody(res) {
    const body = await res.json();

    // append ratelimit meta data to response
    if (res.headers) {
      const limit = parseInt(res.headers.get("x-ratelimit-limit"), 10);
      const remaining = parseInt(res.headers.get("x-ratelimit-remaining"), 10);
      body._meta = { rateLimit: { limit, remaining } };
    }

    // webflow error
    if (body.err) throw new WebflowRequestError(body);

    return body;
  }

  fetch(method, path, data, query) {
    // build uri
    const uri = this.getUri(path, query);

    // build request options
    const headers = this.getHeaders();
    const opts = { method, headers, mode: this.mode };
    if (data) opts.body = JSON.stringify(data);

    // call fetch and wrap response
    return fetch(uri, opts).then(this.parseBody.bind(this));
  }

  // Generic HTTP request handlers
  get(path, query = {}) {
    return this.fetch("GET", path, null, query);
  }

  post(path, data, query = {}) {
    return this.fetch("POST", path, data, query);
  }

  put(path, data, query = {}) {
    return this.fetch("PUT", path, data, query);
  }

  patch(path, data, query = {}) {
    return this.fetch("PATCH", path, data, query);
  }

  delete(path, data, query = {}) {
    return this.fetch("DELETE", path, data, query);
  }
}

export default WebflowClient;
