import { AxiosInstance } from "axios";
import { requireArgs, WebflowRecord } from "../core";
import { Item } from ".";

/**************************************************************
 * Types
 **************************************************************/
export type CollectionFieldType =
  | "Bool"
  | "Color"
  | "Date"
  | "ExtFileRef"
  | "Set"
  | "ImageRef"
  | "Set"
  | "ItemRef"
  | "ItemRefSet"
  | "Link"
  | "Number"
  | "Option"
  | "PlainText"
  | "RichText"
  | "Video"
  | "User"
  | string;

export type CollectionField = {
  id: string;
  type: CollectionFieldType;
  slug: string;
  name: string;
  required: boolean;
  editable: boolean;
  // TODO: add a better type
  validations?: Record<string, string | number | boolean | object>;
};

/**************************************************************
 * Interfaces
 **************************************************************/
export interface ICollection {
  _id: string;
  lastUpdated: string;
  createdOn: string;
  name: string;
  slug: string;
  singularName: string;
  fields: CollectionField[];
}

/**************************************************************
 * Class
 **************************************************************/
export class Collection extends WebflowRecord<ICollection> implements ICollection {
  fields: CollectionField[];
  singularName: string;
  lastUpdated: string;
  createdOn: string;
  _id: string;
  name: string;
  slug: string;

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a list of Collections
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param client The Axios client instance
   * @returns A list of Collections
   */
  static list({ siteId }: { siteId: string }, client: AxiosInstance) {
    requireArgs({ siteId });
    const path = `/sites/${siteId}/collections`;
    return client.get<ICollection[]>(path);
  }

  /**
   * Get a single Collection
   * @param params The params for the request
   * @param params.collectionId The collection ID
   * @param client The Axios client instance
   * @returns A single Collection
   */
  static getOne({ collectionId }: { collectionId: string }, client: AxiosInstance) {
    requireArgs({ collectionId });
    const path = `/collections/${collectionId}`;
    return client.get<ICollection>(path);
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Get a single Item
   * @param params The params for the request
   * @param params.itemId The Item ID
   * @returns A single Item
   */
  async item({ itemId }: { itemId: string }) {
    const res = await Item.getOne({ itemId, collectionId: this._id }, this.client);
    const [item] = res.data.items.map((data) => new Item(this.client, { ...res, data }));
    return item;
  }

  /**
   * Get a list of Items
   * @param params The params for the request
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @returns A list of Items
   */
  async items({ limit, offset }: { limit?: number; offset?: number } = {}) {
    const res = await Item.list({ collectionId: this._id, limit, offset }, this.client);
    return res.data.items.map((data) => new Item(this.client, { ...res, data }));
  }

  /**
   * Remove a single Item
   * @param params The params for the request
   * @param params.itemId The Item ID
   * @returns The result from the removal
   */
  async removeItem({ itemId }: { itemId: string }) {
    const res = await Item.remove({ itemId, collectionId: this._id }, this.client);
    return res.data;
  }

  /**
   * Create a new Item
   * @param fields The Item fields to create
   * @returns The created Item
   */
  async createItem(fields: object) {
    const res = await Item.create({ collectionId: this._id, fields }, this.client);
    return new Item(this.client, res);
  }

  /**
   * Update a single Item
   * @param params The params for the request
   * @param params.itemId The Item ID
   * @param params.fields The fields to update
   * @returns The updated Item
   */
  async updateItem({ itemId, fields }: { itemId: string; fields: object }) {
    const params = { itemId, collectionId: this._id, fields };
    const res = await Item.update(params, this.client);
    return new Item(this.client, res);
  }
}
