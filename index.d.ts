declare class Webflow {
  constructor(options: Webflow.Options);
  token: string;

  get<Result extends any>(
    path: string,
    query?: Webflow.QueryArg
  ): Promise<Result>;
  post<Data extends any, Result extends any>(
    path: string,
    data?: Data,
    query?: Webflow.QueryArg
  ): Promise<Result>;
  put<Data extends any, Result extends any>(
    path: string,
    data?: Data,
    query?: Webflow.QueryArg
  ): Promise<Result>;
  patch<Data extends any, Result extends any>(
    path: string,
    data?: Data,
    query?: Webflow.QueryArg
  ): Promise<Result>;
  delete<Result extends any>(
    path: string,
    query?: Webflow.QueryArg
  ): Promise<Result>;

  // meta
  info(): Promise<Webflow.ApiModel.Info>;
  installer(): Promise<Webflow.ApiModel.Installer>;

  // oauth
  authorizeUrl(params: {
    client_id: string;
    redirect_uri?: string;
    state?: string;
    scope?: string;
    response_type?: string;
  }): string;

  accessToken(params: {
    client_id: string;
    client_secret: string;
    redirect_uri?: string;
    code: string;
    grant_type?: string;
  }): Promise<{
    token_type: string;
    access_token: string;
  }>;

  revokeToken(params: {
    client_id: string;
    client_secret: string;
    access_token: string;
  }): Promise<{ didRevoke: boolean }>;

  // sites
  sites(query?: Webflow.QueryArg): Promise<Webflow.ApiModel.Site[]>;

  site(
    params: {
      siteId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.Site>;

  publishSite(
    data: {
      siteId: string;
      domains: string[];
    },
    query?: Webflow.QueryArg
  ): Promise<{ queued: boolean }>;

  // Domains

  domains(
    data: {
      siteId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.Domain[]>;

  // Collections

  collections(
    data: {
      siteId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.Collection[]>;
  collection(
    data: {
      collectionId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.Collection>;

  // Users
  users(
    data: {
      siteId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.User[]>;

  user(
    data: {
      siteId: string;
      userId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.User>;

  updateUser(
    data: { siteId: string; userId: string } & Record<string, any>,
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.User>;

  removeUser(
    data: { siteId: string; userId: string },
    query?: Webflow.QueryArg
  ): Promise<{ deleted: number }>;

  inviteUser(
    data: { siteId: string; email: string },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.User>;

  // Items

  items(
    data: {
      collectionId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.ItemsResponse>;

  item(
    data: {
      collectionId: string;
      itemId: string;
    },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.CollectionItem>;

  createItem(
    // TODO: add a better data type
    data: { collectionId: string } & Record<string, any>,
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.CollectionItem>;

  updateItem(
    // TODO: add a better data type
    data: { collectionId: string; itemId: string } & Record<string, any>,
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.CollectionItem>;

  removeItem(
    data: { collectionId: string; itemId: string },
    query?: Webflow.QueryArg
  ): Promise<{ deleted: number }>;

  patchItem(
    // TODO: add a better data type
    data: { collectionId: string; itemId: string } & Record<string, any>,
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.CollectionItem>;

  // Webhooks

  webhooks(
    data: { siteId: string },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.Webhook[]>;

  webhook(
    data: { siteId: string; webhookId: string },
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.Webhook>;

  createWebhook(
    // TODO: add a better data type
    data: { siteId: string } & Record<string, any>,
    query?: Webflow.QueryArg
  ): Promise<Webflow.ApiModel.Webhook>;

  removeWebhook(
    data: { siteId: string; webhookId: string },
    query?: Webflow.QueryArg
  ): Promise<{ deleted: number }>;
}

declare namespace Webflow {
  // other exported properties
  class WebflowError extends Error {}

  // helper types / namespaces
  type QueryArg = Record<string, any>;

  interface Options {
    token: string;
    endpoint?: string;
    version?: string;
    mode?: string;
    headers?: { [key: string]: string };
  }

  namespace ApiModel {
    interface Installer {
      user: {
        _id: string;
        email: string;
        firstName: string;
        lastName: string;
      };
    }

    interface InfoApplication {
      _id: string;
      description: string;
      homepage: string;
      name: string;
      owner: string;
      ownerType: string;
    }

    /**
     * https://developers.webflow.com/?javascript#get-current-authorization-info
     */
    interface Info {
      _id: string;
      createdOn: string;
      grantType: string;
      lastUsed: string;
      sites: string[];
      orgs: string[];
      users: string[];
      rateLimit: number;
      status: string;
      application: InfoApplication;
    }
    /**
     * https://developers.webflow.com/?javascript#sites
     */
    interface Site {
      _id: string;
      createdOn: string;
      name: string;
      shortName: string;
      lastPublished: string;
      previewUrl: string;
      timezone: string;
      database: string;

      collections: OmitFirstArgOfFunction<Webflow["collections"]>;
      webhooks: OmitFirstArgOfFunction<Webflow["webhooks"]>;
      domains: OmitFirstArgOfFunction<Webflow["domains"]>;
      webhook: OmitPropertyFromFirstArgOfFunction<Webflow["webhook"], "siteId">;
      createWebhook: OmitPropertyFromFirstArgOfFunction<
        Webflow["createWebhook"],
        "siteId"
      >;
      removeWebhook: OmitPropertyFromFirstArgOfFunction<
        Webflow["removeWebhook"],
        "siteId"
      >;
      publishSite: OmitPropertyFromFirstArgOfFunction<
        Webflow["publishSite"],
        "siteId"
      >;
    }

    /**
     * https://developers.webflow.com/?javascript#domains
     */
    interface Domain {
      _id: string;
      name: string;
    }

    interface User {
      _id: string;
      lastUpdated: string;
      createdOn: string;
      emailVerified: boolean;
      data: object;
    }

    /**
     * https://developers.webflow.com/?javascript#collections
     */
    interface Collection {
      _id: string;
      lastUpdated: string;
      createdOn: string;
      name: string;
      slug: string;
      singularName: string;
      fields: CollectionField[];

      items: OmitFirstArgOfFunction<Webflow["items"]>;
      item: OmitPropertyFromFirstArgOfFunction<Webflow["item"], "collectionId">;
      createItem: OmitPropertyFromFirstArgOfFunction<
        Webflow["createItem"],
        "collectionId"
      >;
      updateItem: OmitPropertyFromFirstArgOfFunction<
        Webflow["updateItem"],
        "collectionId"
      >;
      removeItem: OmitPropertyFromFirstArgOfFunction<
        Webflow["removeItem"],
        "collectionId"
      >;
    }

    type CollectionFieldType =
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
      | "User";

    /**
     * https://developers.webflow.com/?javascript#fields
     */
    interface CollectionField {
      id: string;
      type: CollectionFieldType;
      slug: string;
      name: string;
      required: boolean;
      editable: boolean;
      // TODO: add a better type
      validations: any;
    }

    /**
     * https://developers.webflow.com/?javascript#items
     */
    interface CollectionItem extends Record<string, any> {
      _archived: boolean;
      _draft: boolean;
      _id: string;
      _cid: string;
      name: string;
      slug: string;
      "updated-on": string;
      "created-on": string;
      "published-on": string;
      "updated-by": string;
      "created-by": string;
      "published-by": string;

      update: OmitPropertyFromFirstArgOfFunction<
        Webflow["updateItem"],
        "collectionId" | "itemId"
      >;
      remove: OmitFirstArgOfFunction<Webflow["removeItem"]>;
    }

    interface ResponseMeta {
      rateLimit: {
        limit: number;
        remaining: number;
      };
    }

    interface ItemsResponse {
      items: CollectionItem[];
      count: number;
      limit: number;
      offset: number;
      total: number;
      _meta: ResponseMeta;
    }

    type WebhookTriggerType =
      | "form_submission"
      | "site_publish"
      | "ecomm_new_order"
      | "ecomm_order_changed"
      | "ecomm_inventory_changed"
      | "collection_item_created"
      | "collection_item_changed"
      | "collection_item_deleted";

    interface Webhook {
      _id: string;
      triggerType: WebhookTriggerType;
      triggerId: string;
      site: string;
      filter: string;
      lastUsed: string;
      createdOn: string;

      remove: OmitFirstArgOfFunction<Webflow["removeWebhook"]>;
    }
  }
}

export = Webflow;

type OmitFirstArgOfFunction<Fn> = Fn extends (
  x: any,
  ...args: infer Args
) => infer R
  ? (...args: Args) => R
  : never;

type OmitPropertyFromFirstArgOfFunction<Fn, P extends string> = Fn extends (
  x: infer A,
  ...args: infer Args
) => infer R
  ? (x: Omit<A, P>, ...args: Args) => R
  : never;
