import { Client, QueryString, PaginationFilter } from "../core";
import { ResponseWrapper } from ".";
import { Item } from "../api";

export class ItemWrapper implements Item.IItem {
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

  constructor(private client: Client, item: Item.IItem) {
    Object.assign(this, item);
  }

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Create a new Item
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.fields The Item fields to create
   * @returns The created Item
   */
  static async create(
    client: Client,
    { collectionId, fields }: { collectionId: string; fields: any }
  ) {
    const res = await Item.create(client, { collectionId, fields });
    const item = new ItemWrapper(client, res.data);
    return ResponseWrapper<typeof item>(res, item);
  }

  /**
   * Get a single Item
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @returns A single Item
   */
  static async getOne(
    client: Client,
    itemParams: { collectionId: string; itemId: string }
  ) {
    const res = await Item.getOne(client, itemParams);
    const item = new ItemWrapper(client, res.data.items[0]);
    return ResponseWrapper<typeof item>(res, item);
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
  static async list(
    client: Client,
    { collectionId, limit, offset }: { collectionId: string } & PaginationFilter
  ) {
    const res = await Item.list(client, { collectionId, limit, offset });
    const items = res.data.items.map((i) => new ItemWrapper(client, i));
    return ResponseWrapper<typeof items>(res, items);
  }

  /**
   * Remove a single Item
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.itemId The Item ID
   * @returns The result from the removal
   */
  static async remove(
    client: Client,
    { collectionId, itemId }: { collectionId: string; itemId: string }
  ) {
    const res = await Item.remove(client, { collectionId, itemId });
    return ResponseWrapper<typeof res.data>(res);
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
  static async publish(
    client: Client,
    {
      collectionId,
      itemIds,
      live,
    }: { collectionId: string; itemIds: string[]; live: boolean }
  ) {
    const res = await Item.publish(client, { collectionId, itemIds, live });
    return ResponseWrapper<typeof res.data>(res);
  }

  /**
   * Unpublishes a list of Items
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.collectionId The Collection ID
   * @param params.live Unpublish from the live site
   * @returns The result of the unpublish
   */
  static async unpublish(
    client: Client,
    {
      collectionId,
      itemIds,
      live,
    }: { collectionId: string; itemIds: string[]; live: boolean }
  ) {
    const res = await Item.unpublish(client, { collectionId, itemIds, live });
    return ResponseWrapper<typeof res.data>(res);
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
  static async update(
    client: Client,
    {
      collectionId,
      itemId,
      fields,
    }: { collectionId: string; itemId: string; fields: any }
  ) {
    const res = await Item.update(client, {
      collectionId,
      fields,
      itemId,
    });

    const item = new ItemWrapper(client, res.data);
    return ResponseWrapper<typeof item>(res, item);
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
  static async patch(
    client: Client,
    {
      collectionId,
      itemId,
      fields,
    }: { collectionId: string; itemId: string; fields: any },
    params?: QueryString
  ) {
    const res = await Item.patch(client, {
      collectionId,
      fields,
      itemId,
    });

    const item = new ItemWrapper(client, res.data);
    return ResponseWrapper<typeof item>(res, item);
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Update a single Item
   * @param fields The fields to update
   * @returns The updated Item
   */
  update({ ...fields }) {
    return ItemWrapper.update(this.client, {
      collectionId: this._cid,
      itemId: this._id,
      fields,
    });
  }

  /**
   * Remove a single Item
   * @returns The result from the removal
   */
  remove() {
    return ItemWrapper.remove(this.client, {
      collectionId: this._cid,
      itemId: this._id,
    });
  }
}
