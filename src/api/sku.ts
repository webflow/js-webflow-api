import { AxiosInstance } from "axios";
import { requireArgs, WebflowRecord } from "../core";

/**************************************************************
 * Types
 **************************************************************/

export type Price = {
  unit: string;
  value: number;
};

export type Image = {
  fileId: string;
  url: string;
  alt?: string;
};

export type DownloadFile = {
  id: string;
  name: string;
  url: string;
};

/**************************************************************
 * Interfaces
 **************************************************************/

export interface ISku {
  price: Price;
  _archived: boolean;
  _draft: boolean;
  // TODO: add a better type
  "sku-values": Record<string, any>;
  width: number;
  length: number;
  height: number;
  weight: number;
  name: string;
  "main-image": Image;
  "more-images": Image[];
  "download-files": DownloadFile[];
  slug: string;
  product: string;
  "updated-on": string;
  "updated-by": string;
  "created-on": string;
  "created-by": string;
  "published-on"?: string;
  "published-by"?: string;
  _cid: string;
  _id: string;
}

/**************************************************************
 * Class
 **************************************************************/

export class Sku extends WebflowRecord<ISku> implements ISku {
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
  price: Price;
  "sku-values": Record<string, any>;
  width: number;
  length: number;
  height: number;
  weight: number;
  "main-image": Image;
  "more-images": Image[];
  "download-files": DownloadFile[];
  product: string;

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Create a single Sku
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.productId The Product ID
   * @param params.fields The Sku fields to create
   * @param client The Axios client instance
   * @returns A single Sku
   */
  static create(
    {
      siteId,
      productId,
      fields,
    }: {
      siteId: string;
      productId: string;
      fields: Partial<ISku>;
    },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, productId, fields });
    const path = `/sites/${siteId}/products/${productId}/sku`;
    return client.post(path, { skus: [fields] });
  }

  /**
   * Create multiple Skus
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.productId The Product ID
   * @param params.skus The Skus to create
   * @param client The Axios client instance
   * @returns Multiple Skus
   */
  static createMany(
    {
      siteId,
      productId,
      skus,
    }: {
      siteId: string;
      productId: string;
      skus: Partial<ISku>[];
    },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, productId, skus });
    const path = `/sites/${siteId}/products/${productId}/sku`;
    return client.post<{ skus: ISku[] }>(path, { skus });
  }

  /**
   * Update a single Sku
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.productId The Product ID
   * @param params.skuId The Sku ID
   * @param params.fields The Sku fields to update
   * @param client The Axios client instance
   * @returns A single Sku
   */
  static update(
    {
      siteId,
      productId,
      skuId,
      fields,
    }: {
      siteId: string;
      productId: string;
      skuId: string;
      fields: Partial<ISku>;
    },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, productId, skuId, fields });
    const path = `/sites/${siteId}/products/${productId}/skus/${skuId}`;
    return client.patch(path, { sku: { fields } });
  }
}
