import { ResponseWrapper, ItemWrapper } from ".";
import { Client, QueryString } from "../core";
import { Collection, Item } from "../api";

export class CollectionWrapper implements Collection.ICollection {
  fields: Collection.CollectionField[];
  singularName: string;
  lastUpdated: string;
  createdOn: string;
  _id: string;
  name: string;
  slug: string;

  constructor(private client: Client, collection: Collection.ICollection) {
    Object.assign(this, collection);
  }

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a single Collection
   * @param client The Webflow client
   * @param params The Collection information
   * @param params.collectionId The Collection ID
   * @returns A single Collection
   */
  static async getOne(
    client: Client,
    { collectionId }: { collectionId: string }
  ) {
    const res = await Collection.getOne(client, { collectionId });
    const collection = new CollectionWrapper(client, res.data);
    return ResponseWrapper<typeof collection>(res, collection);
  }

  /**
   * Get a list of Collections
   * @param client The Webflow client
   * @param params1 The Site information
   * @param params1.siteId The Site ID
   * @param params The query parameters (optional)
   * @returns A list of Collections
   */
  static async list(
    client: Client,
    { siteId }: { siteId: string },
    params?: QueryString
  ) {
    const res = await Collection.list(client, { siteId }, params);
    const collections = res.data.map((c) => new CollectionWrapper(client, c));
    return ResponseWrapper<typeof collections>(res, collections);
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
    return ItemWrapper.getOne(this.client, { itemId, collectionId: this._id });
  }

  /**
   * Get a list of Items
   * @param params The params for the request
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @returns A list of Items
   */
  async items(params?: QueryString) {
    return ItemWrapper.list(this.client, { collectionId: this._id, ...params });
  }

  /**
   * Remove a single Item
   * @param params The params for the request
   * @param params.itemId The Item ID
   * @returns The result from the removal
   */
  async removeItem({ itemId }: { itemId: string }) {
    return ItemWrapper.remove(this.client, { itemId, collectionId: this._id });
  }

  /**
   * Create a new Item
   * @param params The params for the request
   * @param params.fields The Item fields to create
   * @returns The created Item
   */
  async createItem(fields: any) {
    return ItemWrapper.create(this.client, { collectionId: this._id, fields });
  }

  /**
   * Update a single Item
   * @param params The params for the request
   * @param params.itemId The Item ID
   * @param params.fields The fields to update
   * @returns The updated Item
   */
  async updateItem({ itemId, fields }: { itemId: string; fields: any }) {
    return ItemWrapper.update(this.client, {
      collectionId: this._id,
      itemId,
      fields,
    });
  }
}
