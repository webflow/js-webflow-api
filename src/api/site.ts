import { Client, QueryString, requireArgs } from "../core";

/**************************************************************
 * Interfaces
 *************************************************************/
export interface IDomain {
  _id: string;
  name: string;
}

export interface ISite {
  lastPublished: string;
  previewUrl: string;
  createdOn: string;
  shortName: string;
  timezone: string;
  database: string;
  name: string;
  _id: string;
}

export interface IPublishSite {
  queued: boolean;
}

/**************************************************************
 * Functions
 **************************************************************/

/**
 * Get a list of Sites
 * @param client The Webflow client
 * @param params The query string parameters (optional)
 * @returns
 */
export function list(client: Client, params?: QueryString) {
  const path = "/sites";
  return client.get<ISite[]>(path, { params });
}

/**
 * Get a single Site
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.params The query string parameters (optional)
 * @returns A single Site
 */
export function getOne(
  client: Client,
  { siteId, params }: { siteId: string; params?: QueryString }
) {
  requireArgs({ siteId });
  const path = `/sites/${siteId}`;
  return client.get<ISite>(path, { params });
}

/**
 * Publish a site
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.domains The domains to publish to
 * @returns The publish result
 */
export function publish(
  client: Client,
  { siteId, domains }: { siteId: string; domains: string[] }
) {
  requireArgs({ siteId, domains });
  const path = `/sites/${siteId}/publish`;
  return client.post<IPublishSite>(path, { domains });
}

/**
 * Get a list of domains for a site
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @returns A list of domains
 */
export function domains(client: Client, { siteId }: { siteId: string }) {
  requireArgs({ siteId });
  const path = `/sites/${siteId}/domains`;
  return client.get<IDomain[]>(path);
}
