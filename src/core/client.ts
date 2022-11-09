import { Axios } from "axios";
import { DEFAULT_HOST, USER_AGENT, Options, RequestError } from "../core";

/**************************************************************
 * Types
 **************************************************************/
export type QueryString = Record<string, any>;
export type PaginationFilter = { limit?: number; offset?: number };

/**************************************************************
 * Interfaces
 ************************************************************* */
export interface PaginatedData {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

export interface WebflowOptions {
  host?: string;
  token?: string;
  version?: string;
  headers?: Record<string, string>;
}

/**************************************************************
 * Classes
 **************************************************************/
export class Client extends Axios {
  constructor({
    host = DEFAULT_HOST,
    headers = {},
    version,
    token,
  }: Options = {}) {
    super({
      transformRequest: [(data) => JSON.stringify(data)],
      baseURL: `https://api.${host}/`,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": USER_AGENT,
        "Accept-Version": version,
        ...headers,
      },
    });

    if (token) this.token = token;

    // check for webflow errors
    this.defaults.transformResponse = [this.transformResponse];
  }

  /**
   * Transforms JSON response to an object
   * if the response is a Webflow error, it will throw an error
   * @param data JSON response
   * @returns response object
   */
  private transformResponse(data: any = {}) {
    // parse json if string
    if (String(data) === data) data = JSON.parse(data);
    if (data.err) throw new RequestError(data);
    return data;
  }

  // set the Authorization header
  set token(value: string) {
    this.defaults.headers["Authorization"] = `Bearer ${value}`;
  }

  // clear the Authorization header
  clearToken() {
    delete this.defaults.headers["Authorization"];
  }
}
