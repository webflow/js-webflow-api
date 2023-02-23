import { AxiosInstance } from "axios";
import { PaginatedData, requireArgs, WebflowRecord } from "../core";
import { ISku, Sku } from "./sku";

/**************************************************************
 * Types
 **************************************************************/

export type Enum = {
  id: string;
  name: string;
  slug: string;
};

export type SkuProperty = {
  id: string;
  name: string;
  enum: Enum[];
};

export type PaginatedProducts = PaginatedData & {
  items: IProductItem[];
};

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IProduct {
  shippable: boolean;
  _archived: boolean;
  _draft: boolean;
  name: string;
  "ec-product-type": string;
  "sku-properties": SkuProperty[];
  description: string;
  slug: string;
  "updated-on": string;
  "updated-by": string;
  "created-on": string;
  "created-by": string;
  "published-on"?: string;
  "published-by"?: string;
  "default-sku": string;
  _cid: string;
  _id: string;
}

export interface IProductItem {
  product: IProduct;
  skus: ISku[];
}

/**************************************************************
 * Class
 **************************************************************/

export class Product extends WebflowRecord<IProductItem> implements IProductItem {
  product: IProduct;
  skus: ISku[];

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a single Product and its Skus
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.productId The Product ID
   * @param client The Axios client instance
   * @returns A single Product and its Skus
   */
  static getOne(
    { siteId, productId }: { siteId: string; productId: string },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, productId });
    const path = `/sites/${siteId}/products/${productId}`;
    return client.get<PaginatedProducts>(path);
  }

  /**
   * Get a list of Products and their Skus
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @param client The Axios client instance
   * @returns A list of Products and their Skus
   */
  static list(
    { siteId, limit, offset }: { siteId: string; limit?: number; offset?: number },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId });
    const params = { limit, offset };
    const path = `/sites/${siteId}/products`;
    return client.get<PaginatedProducts>(path, { params });
  }

  /**
   * Create a new Product and default Sku
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.productFields The Product fields to create
   * @param params.skuFields The Sku fields to create
   * @param client The Axios client instance
   * @returns The created Product and default Sku
   */
  static create(
    {
      siteId,
      productFields,
      skuFields,
    }: { siteId: string; productFields: IProduct; skuFields: ISku },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, productFields, skuFields });
    const path = `/sites/${siteId}/products`;
    return client.post<IProductItem>(path, {
      product: { fields: productFields },
      sku: { fields: skuFields },
    });
  }

  /**
   * Update a single Product
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.productId The Product ID
   * @param params.fields The fields to update
   * @param client The Axios client instance
   * @returns The updated Product
   */
  static update(
    { siteId, productId, fields }: { siteId: string; productId: string; fields: any },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, productId });
    const path = `/sites/${siteId}/products/${productId}`;
    return client.patch<IProduct>(path, { fields });
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  // TODO: Inherit the siteId from the parent class
  /**
   * Create a new Sku
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.fields The Sku fields to create
   * @returns The created Sku
   */
  async createSku(siteId: string, fields: object) {
    const res = await Sku.create({ siteId, productId: this.product._id, fields }, this.client);
    return new Sku(this.client, res);
  }

  /**
   * Update a single Sku
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.skuId The Sku ID
   * @param params.fields The fields to update
   * @returns The updated Sku
   */
  async updateSku(siteId: string, skuId: string, fields: object) {
    const res = await Sku.update(
      { siteId, productId: this.product._id, skuId, fields },
      this.client,
    );
    return new Sku(this.client, res);
  }
}
