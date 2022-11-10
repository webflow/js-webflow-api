import { Client, PaginatedData, requireArgs } from "../core";

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IItem {
  _archived: boolean;
  _draft: boolean;
  _id: string;
  _cid: string;
  name: string;
  slug: string;
  "updated-on": string;
  "created-on": string;
  "updated-by": string;
  "created-by": string;
  "published-on"?: string | null;
  "published-by"?: string | null;
}

export interface IItemDelete {
  deleted: number;
}

export interface IPublishItems {
  publishedItemIds: string[];
  errors: string[];
}

export interface IDeletedItems {
  deletedItemIds: string[];
  errors: string[];
}

/**************************************************************
 * Types
 **************************************************************/
export type PageinatedItems = PaginatedData & {
  items: IItem[];
};

/**************************************************************
 * Functions
 **************************************************************/

/**
 * Get a single Item
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The Collection ID
 * @param params.itemId The Item ID
 * @returns A single Item
 */
export function getOne(
  client: Client,
  { collectionId, itemId }: { collectionId: string; itemId: string }
) {
  requireArgs({ collectionId, itemId });
  const path = `/collections/${collectionId}/items/${itemId}`;
  // The API returns a paginated list with one record :(
  return client.get<PageinatedItems>(path);
}

/**
 * Get a list of Items
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The Collection ID
 * @param params.limit The number of items to return (optional)
 * @param params.offset The number of items to skip (optional)
 * @returns A list of Items
 */
export function list(
  client: Client,
  {
    collectionId,
    limit,
    offset,
  }: { collectionId: string; limit?: number; offset?: number }
) {
  requireArgs({ collectionId });
  const params = { limit, offset };
  const path = `/collections/${collectionId}/items`;
  return client.get<PageinatedItems>(path, { params });
}

/**
 * Create a new Item
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The Collection ID
 * @param params.fields The Item fields to create
 * @returns The created Item
 */
export function create(
  client: Client,
  { collectionId, fields }: { fields: any; collectionId: string }
) {
  requireArgs({ collectionId });
  const path = `/collections/${collectionId}/items`;
  return client.post<IItem>(path, { fields });
}

/**
 * Update a single Item
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The Collection ID
 * @param params.itemId The Item ID
 * @param params.fields The fields to update
 * @returns The updated Item
 */
export function update(
  client: Client,
  {
    collectionId,
    itemId,
    fields,
  }: {
    fields: any;
    itemId: string;
    collectionId: string;
  }
) {
  requireArgs({ collectionId, itemId });
  const path = `/collections/${collectionId}/items/${itemId}`;
  return client.put<IItem>(path, { fields });
}

/**
 * Patch a single Item
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The Collection ID
 * @param params.itemId The Item ID
 * @param params.fields The fields to patch
 * @returns The patched Item
 */
export function patch(
  client: Client,
  {
    collectionId,
    itemId,
    fields,
  }: {
    fields: any;
    itemId: string;
    collectionId: string;
  }
) {
  requireArgs({ collectionId, itemId });
  const path = `/collections/${collectionId}/items/${itemId}`;
  return client.patch<IItem>(path, { fields });
}

/**
 * Remove a single Item
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The Collection ID
 * @param params.itemId The Item ID
 * @returns The result from the removal
 */
export function remove(
  client: Client,
  {
    collectionId,
    itemId,
  }: {
    itemId: string;
    collectionId: string;
  }
) {
  requireArgs({ collectionId, itemId });
  const path = `/collections/${collectionId}/items/${itemId}`;
  return client.delete<IItemDelete>(path);
}

/**
 * Unpublishes a list of Items
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The Collection ID
 * @param params.live Unpublish from the live site
 * @returns The result of the unpublish
 */
export function unpublish(
  client: Client,
  {
    collectionId,
    itemIds,
    live = false,
  }: {
    live?: boolean;
    itemIds: string[];
    collectionId: string;
  }
) {
  requireArgs({ collectionId, itemIds });
  const params = { live };
  const data = { itemIds };
  const url = `/collections/${collectionId}/items`;
  const _params = { method: "DELETE", url, data, params };

  // DELETE spec doesn't support body in delete
  // RFC-9110 https://tools.ietf.org/html/rfc9110
  return client.request<IDeletedItems>(_params);
}

/**
 * Publishes a list of Items
 * @param client The Webflow client
 * @param params The request parameters
 * @param params.collectionId The Collection ID
 * @param params.itemIds The list of Item IDs to publish
 * @param params.live Publish to live site
 * @returns The result of the publish
 */
export function publish(
  client: Client,
  {
    itemIds,
    live = false,
    collectionId,
  }: { live?: boolean; itemIds: string[]; collectionId: string }
) {
  requireArgs({ collectionId, itemIds });
  const params = { live };
  const path = `/collections/${collectionId}/items/publish`;
  return client.put<IPublishItems>(path, { itemIds }, { params });
}
