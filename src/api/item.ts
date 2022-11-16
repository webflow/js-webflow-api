import { AxiosInstance } from "axios";
import { PaginatedData, requireArgs, WebflowRecord } from "../core";

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
 * Class
 **************************************************************/

export class Item extends WebflowRecord<IItem> implements IItem {
  "published-on"?: string | null;
  "published-by"?: string | null;
  "updated-on": string;
  "created-on": string;
  "updated-by": string;
  "created-by": string;
  _archived: boolean;
  _draft: boolean;
  _cid: string;
  name: string;
  slug: string;
  _id: string;

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a single Item
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param client The Axios client instance
   * @returns A single Item
   */
  static getOne(
    { collectionId, itemId }: { collectionId: string; itemId: string },
    client: AxiosInstance,
  ) {
    requireArgs({ collectionId, itemId });
    const path = `/collections/${collectionId}/items/${itemId}`;
    // The API returns a paginated list with one record :(
    return client.get<PageinatedItems>(path);
  }

  /**
   * Get a list of Items
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @param client The Axios client instance
   * @returns A list of Items
   */
  static list(
    { collectionId, limit, offset }: { collectionId: string; limit?: number; offset?: number },
    client: AxiosInstance,
  ) {
    requireArgs({ collectionId });
    const params = { limit, offset };
    const path = `/collections/${collectionId}/items`;
    return client.get<PageinatedItems>(path, { params });
  }

  /**
   * Create a new Item
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.fields The Item fields to create
   * @param client The Axios client instance
   * @returns The created Item
   */
  static create(
    { collectionId, fields }: { fields: any; collectionId: string },
    client: AxiosInstance,
  ) {
    requireArgs({ collectionId });
    const path = `/collections/${collectionId}/items`;
    return client.post<IItem>(path, { fields });
  }

  /**
   * Update a single Item
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param params.fields The fields to update
   * @param client The Axios client instance
   * @returns The updated Item
   */
  static update(
    {
      collectionId,
      itemId,
      fields,
    }: {
      fields: any;
      itemId: string;
      collectionId: string;
    },
    client: AxiosInstance,
  ) {
    requireArgs({ collectionId, itemId });
    const path = `/collections/${collectionId}/items/${itemId}`;
    return client.put<IItem>(path, { fields });
  }

  /**
   * Patch a single Item
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param params.fields The fields to patch
   * @param client The Axios client instance
   * @returns The patched Item
   */
  static patch(
    {
      collectionId,
      itemId,
      fields,
    }: {
      fields: any;
      itemId: string;
      collectionId: string;
    },
    client: AxiosInstance,
  ) {
    requireArgs({ collectionId, itemId });
    const path = `/collections/${collectionId}/items/${itemId}`;
    return client.patch<IItem>(path, { fields });
  }

  /**
   * Remove a single Item
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @param client The Axios client instance
   * @returns The result from the removal
   */
  static remove(
    {
      collectionId,
      itemId,
    }: {
      itemId: string;
      collectionId: string;
    },
    client: AxiosInstance,
  ) {
    requireArgs({ collectionId, itemId });
    const path = `/collections/${collectionId}/items/${itemId}`;
    return client.delete<IItemDelete>(path);
  }

  /**
   * Unpublishes a list of Items
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.live Unpublish from the live site
   * @param client The Axios client instance
   * @returns The result of the unpublish
   */
  static unpublish(
    {
      collectionId,
      itemIds,
      live = false,
    }: {
      live?: boolean;
      itemIds: string[];
      collectionId: string;
    },
    client: AxiosInstance,
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
   * @param params The request parameters
   * @param params.collectionId The Collection ID
   * @param params.itemIds The list of Item IDs to publish
   * @param params.live Publish to live site
   * @param client The Axios client instance
   * @returns The result of the publish
   */
  static publish(
    {
      itemIds,
      live = false,
      collectionId,
    }: { live?: boolean; itemIds: string[]; collectionId: string },
    client: AxiosInstance,
  ) {
    requireArgs({ collectionId, itemIds });
    const params = { live };
    const path = `/collections/${collectionId}/items/publish`;
    return client.put<IPublishItems>(path, { itemIds }, { params });
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Update a single Item
   * @param fields The fields to update
   * @returns The updated Item
   */
  async update({ ...fields }) {
    const params = { collectionId: this._cid, itemId: this._id, fields };
    const res = await Item.update(params, this.client);
    return new Item(this.client, res);
  }

  /**
   * Remove a single Item
   * @returns The result from the removal
   */
  async remove() {
    const params = { collectionId: this._cid, itemId: this._id };
    const res = await Item.remove(params, this.client);
    return res.data;
  }
}
