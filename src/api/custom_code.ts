import { AxiosInstance, AxiosResponse } from "axios";
import { requireArgs, WebflowRecord } from "../core";

/**************************************************************
 * Interfaces
 **************************************************************/
export interface ICustomCode {
  code: string;
  createdOn: string;
  lastUpdated: string;
}

/**************************************************************
 * Class
 **************************************************************/
export class CustomCode extends WebflowRecord<ICustomCode> implements ICustomCode {
  code: string;
  createdOn: string;
  lastUpdated: string;

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a Site's Custom Code
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param client The Axios client instance
   * @returns The code as well as the createdOn and lastUpdated timestamps.
   */
  static get({ siteId }: { siteId: string }, client: AxiosInstance) {
    requireArgs({ siteId });
    const path = `sites/${siteId}/custom_code`;
    return client.get<ICustomCode>(path);
  }

  /**
   * Create or replace a Site's Custom Code
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.code The code to add to the site's header
   * @param client The Axios client instance
   * @returns The code as well as the createdOn and lastUpdated timestamps.
   */
  static write({ siteId, code }: { siteId: string; code: string }, client: AxiosInstance) {
    requireArgs({ siteId });
    const path = `sites/${siteId}/custom_code`;
    return client.put<ICustomCode>(path, { code });
  }

  /**
   * Delete a Site's Custom Code
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param client The Axios client instance
   * @returns A 204 No Content response
   */
  static delete({ siteId }: { siteId: string }, client: AxiosInstance) {
    requireArgs({ siteId });
    const path = `sites/${siteId}/custom_code`;
    return client.delete(path);
  }
}
