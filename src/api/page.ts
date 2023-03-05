import { AxiosInstance } from "axios";
import { PaginatedData, requireArgs, WebflowRecord } from "../core";

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IPage {
  id: string;
  siteId: string;
  title: string;
  slug: string;
  pageType: "dynamic" | "static";
  collectionId: string | null;
  createdOn: string;
  lastUpdated: string;
  archived: boolean;
  draft: boolean;
  canBranch: boolean;
  isMembersOnly: boolean;
  seo: {
    title: string;
    description: string | null;
  };
  openGraph: {
    title: string | null;
    titleCopied: boolean;
    description: string | null;
    descriptionCopied: boolean;
  };
}

/**************************************************************
 * Types
 **************************************************************/
export type PaginatedPages = PaginatedData & {
  pages: IPage[];
};

/**************************************************************
 * Class
 **************************************************************/
export class Page extends WebflowRecord<IPage> implements IPage {
  id: string;
  siteId: string;
  title: string;
  slug: string;
  pageType: "dynamic" | "static";
  collectionId: string | null;
  createdOn: string;
  lastUpdated: string;
  archived: boolean;
  draft: boolean;
  canBranch: boolean;
  isMembersOnly: boolean;
  seo: {
    title: string;
    description: string | null;
  };
  openGraph: {
    title: string | null;
    titleCopied: boolean;
    description: string | null;
    descriptionCopied: boolean;
  };

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a Page
   * @param params The params for the request
   * @param params.pageId The page ID
   * @param client The Axios client instance
   * @returns A single Page
   */
  static getOne({ pageId }: { pageId: string }, client: AxiosInstance) {
    requireArgs({ pageId });
    const path = `/pages/${pageId}`;
    return client.get<IPage>(path);
  }

  /**
   * Get a list of Pages
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @param client The Axios client instance
   * @returns A list of Pages
   */
  static list(
    { siteId, limit, offset }: { siteId: string; limit?: number; offset?: number },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId });
    const params = { limit, offset };
    const path = `/sites/${siteId}/pages`;
    return client.get<PaginatedPages>(path, { params });
  }
}
