import { Client, QueryString, requireArgs } from "../core";

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
  validations?: any;
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
 * Functions
 **************************************************************/

/**
 * Get a list of Collections
 * @param client The Webflow client
 * @param params1 The params for the request
 * @param params1.siteId The site ID
 * @param params The query string parameters (optional)
 * @returns A list of Collections
 */
export function list(
  client: Client,
  { siteId }: { siteId: string },
  params?: QueryString
) {
  requireArgs({ siteId });
  const path = `/sites/${siteId}/collections`;
  return client.get<ICollection[]>(path, { params });
}

/**
 * Get a single Collection
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.collectionId The collection ID
 * @param params.params The query string parameters (optional)
 * @returns A single Collection
 */
export function getOne(
  client: Client,
  { collectionId }: { collectionId: string },
  params?: QueryString
) {
  requireArgs({ collectionId });
  const path = `/collections/${collectionId}`;
  return client.get<ICollection>(path, { params });
}
