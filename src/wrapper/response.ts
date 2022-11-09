import { AxiosResponse } from "axios";

export type MetaResponse<T> = T & {
  _meta: {
    rateLimit: {
      limit: number;
      remaining: number;
    };
  };
};

/**
 * Wraps an HTTP response with Webflow Rate Limiting information
 * @param response The HTTP response
 * @param data The data to use (defaults to response.data)
 * @returns The response with Webflow Rate Limiting information
 */
export function ResponseWrapper<T>(response: AxiosResponse, data?: T) {
  const limit = parseInt(response.headers["x-ratelimit-limit"], 10);
  const remaining = parseInt(response.headers["x-ratelimit-remaining"], 10);

  const result: MetaResponse<T> = data || response.data;
  result._meta = { rateLimit: { limit, remaining } };
  return result;
}
