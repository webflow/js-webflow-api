export const DEFAULT_HOST = "webflow.com";
export const USER_AGENT = "Webflow Javascript SDK / 1.0";

export interface Options {
  host?: string;
  token?: string;
  version?: string;
  headers?: Record<string, string>;
}
