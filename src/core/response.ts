import { AxiosInstance, AxiosResponse } from "axios";

/**************************************************************
 * Types
 **************************************************************/
export type PaginationFilter = { limit?: number; offset?: number };

export type WebflowHeaders = Record<string, any>;

/**************************************************************
 * Interfaces
 ************************************************************* */
export interface PaginatedData {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

export class MetaResponse<T> {
  rateLimit: {
    limit: number;
    remaining: number;
  };

  constructor(public response: AxiosResponse<T>) {
    this.rateLimit = {
      limit: parseInt(response.headers["x-ratelimit-limit"], 10),
      remaining: parseInt(response.headers["x-ratelimit-remaining"], 10),
    };
  }
}

export class WebflowRecord<T> {
  response: AxiosResponse<T>;
  _meta: MetaResponse<T>;
  client: AxiosInstance;

  constructor(client: AxiosInstance, response: AxiosResponse<any>, record?: T, ...args: any[]) {
    Object.assign(this, record || response.data, ...args); // Copy the record data

    // dynamically add client and response to object
    // without serializing during toString()
    Object.defineProperties(this, {
      client: { get: () => client },
      response: { get: () => response },
      _meta: { get: () => new MetaResponse(response) }, // legacy support
    });
  }
}
