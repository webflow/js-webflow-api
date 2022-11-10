import { Client, PaginatedData, requireArgs } from "../core";

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IUser {
  emailVerified: boolean;
  lastUpdated?: string;
  createdOn: string;
  _id: string;
  data: any;
}

export interface IAccessGroup {
  _id: string;
  name: string;
  shortId: string;
  slug: string;
  createdOn: string;
}

export interface IUserDelete {
  deleted: number;
}

/**************************************************************
 * Types
 **************************************************************/
export type PaginatedUsers = PaginatedData & {
  users: IUser[];
};

export type PaginatedAccessGroups = PaginatedData & {
  accessGroups: IAccessGroup[];
};

export type UserIdParam = { siteId: string; userId: string };

/**************************************************************
 * Functions
 **************************************************************/

/**
 * Get a list of Users
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.limit The number of items to return (optional)
 * @param params.offset The number of items to skip (optional)
 * @returns A list of Users
 */
export function list(
  client: Client,
  { siteId, limit, offset }: { siteId: string; limit?: number; offset?: number }
) {
  requireArgs({ siteId });
  const params = { limit, offset };
  const path = `/sites/${siteId}/users`;
  return client.get<PaginatedUsers>(path, { params });
}

/**
 * Get a single User
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.userId The user ID
 * @returns A single User
 */
export function getOne(
  client: Client,
  { siteId, userId }: { siteId: string; userId: string }
) {
  requireArgs({ siteId, userId });
  const path = `/sites/${siteId}/users/${userId}`;
  return client.get<IUser>(path);
}

/**
 * Update a User
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.userId The user ID
 * @param params.data The data to update
 * @returns The updated User
 */
export function update(
  client: Client,
  {
    siteId,
    userId,
    ...data
  }: {
    siteId: string;
    userId: string;
  }
) {
  requireArgs({ siteId, userId });
  const path = `/sites/${siteId}/users/${userId}`;
  return client.patch<IUser>(path, data);
}

/**
 * Invite a User to a site
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.email The email address of the user to invite
 * @returns The newly created User
 */
export async function invite(
  client: Client,
  { siteId, email }: { siteId: string; email: string }
) {
  requireArgs({ siteId, email });
  const path = `/sites/${siteId}/users/invite`;
  return client.post<IUser>(path, { email });
}

/**
 * Remove a User
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The site ID
 * @param params.userId The user ID
 * @returns The result of the remove
 */
export function remove(
  client: Client,
  { siteId, userId }: { siteId: string; userId: string }
) {
  requireArgs({ siteId, userId });
  const path = `/sites/${siteId}/users/${userId}`;
  return client.delete<IUserDelete>(path);
}

/**
 * Get a list of Access Groups
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.siteId The Site ID
 * @param params.limit The number of items to return (optional)
 * @param params.offset The number of items to skip (optional)
 * @returns A list of Access Groups
 */
export function accessGroups(
  client: Client,
  { siteId, limit, offset }: { siteId: string; limit?: number; offset?: number }
) {
  requireArgs({ siteId });
  const params = { limit, offset };
  const path = `/sites/${siteId}/users/accessgroups`;
  return client.get<PaginatedAccessGroups>(path, { params });
}
