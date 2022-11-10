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

/**************************************************************
 * Functions
 **************************************************************/

/**
 * Transforms JSON response to an object
 * if the response is a Webflow error, it will throw an error
 * @param data JSON response
 * @returns response object
 */
function transformResponse(data: any = {}) {
  // parse json if string
  if (String(data) === data) data = JSON.parse(data);

  // throw an error if Webflow returns an error obejct
  if (data.err) throw new RequestError(data);
  return data;
}

/**
 * Transforms POST/PUT/PATCH request data to JSON
 * @param data A JavaScript object
 * @returns JSON string
 */
function transformRequest(data: any = {}) {
  return JSON.stringify(data);
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
      transformRequest: [transformRequest],
      transformResponse: [transformResponse],
      baseURL: `https://api.${host}/`,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": USER_AGENT,
        "Accept-Version": version,
        ...headers,
      },
    });

    if (token) this.token = token;
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
