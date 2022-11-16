import { AxiosInstance } from "axios";
import { PaginatedData, requireArgs, WebflowRecord } from "../core";

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IUser {
  emailVerified: boolean;
  lastUpdated?: string;
  createdOn: string;
  _id: string;
  data: any;
}

export interface IAcessGroup {
  _id: string;
  name: string;
  shortId: string;
  slug: string;
  createdOn: string;
}

export interface IUserDelete {
  deleted: number;
}

/**************************************************************
 * Types
 **************************************************************/
export type PaginatedUsers = PaginatedData & {
  users: IUser[];
};

export type PaginatedAccessGroups = PaginatedData & {
  accessGroups: IAcessGroup[];
};

export type UserIdParam = { siteId: string; userId: string };

/**************************************************************
 * Class
 **************************************************************/

export class User extends WebflowRecord<IUser> implements IUser {
  emailVerified: boolean;
  lastUpdated?: string;
  createdOn: string;
  siteId: string;
  _id: string;
  data: any;

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a list of Users
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @param client The Axios client instance
   * @returns A list of Users
   */
  static list(
    { siteId, limit, offset }: { siteId: string; limit?: number; offset?: number },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId });
    const params = { limit, offset };
    const path = `/sites/${siteId}/users`;
    return client.get<PaginatedUsers>(path, { params });
  }

  /**
   * Get a single User
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.userId The user ID
   * @param client The Axios client instance
   * @returns A single User
   */
  static getOne({ siteId, userId }: { siteId: string; userId: string }, client: AxiosInstance) {
    requireArgs({ siteId, userId });
    const path = `/sites/${siteId}/users/${userId}`;
    return client.get<IUser>(path);
  }

  /**
   * Update a User
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.userId The user ID
   * @param params.data The data to update
   * @param client The Axios client instance
   * @returns The updated User
   */
  static update(
    {
      siteId,
      userId,
      data,
    }: {
      data: object;
      siteId: string;
      userId: string;
    },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId, userId });
    const path = `/sites/${siteId}/users/${userId}`;
    return client.patch<IUser>(path, data);
  }

  /**
   * Invite a User to a site
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.email The email address of the user to invite
   * @param client The Axios client instance
   * @returns The newly created User
   */
  static async invite({ siteId, email }: { siteId: string; email: string }, client: AxiosInstance) {
    requireArgs({ siteId, email });
    const path = `/sites/${siteId}/users/invite`;
    return client.post<IUser>(path, { email });
  }

  /**
   * Remove a User
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.userId The user ID
   * @param client The Axios client instance
   * @returns The result of the remove
   */
  static remove({ siteId, userId }: { siteId: string; userId: string }, client: AxiosInstance) {
    requireArgs({ siteId, userId });
    const path = `/sites/${siteId}/users/${userId}`;
    return client.delete<IUserDelete>(path);
  }

  /**
   * Get a list of User Access Groups
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @param params.sort The sort order of the groups (optional)
   * @param client The Axios client instance
   * @returns A list of Access Groups
   */
  static accessGroups(
    {
      siteId,
      limit,
      offset,
      sort,
    }: { siteId: string; limit?: number; offset?: number; sort?: string },
    client: AxiosInstance,
  ) {
    requireArgs({ siteId });
    const params = { limit, offset, sort };
    const path = `/sites/${siteId}/accessgroups`;
    return client.get<PaginatedAccessGroups>(path, { params });
  }

  /**************************************************************
   * Instance Methods
   **************************************************************/

  /**
   * Update a User
   * @param data The data to update
   * @returns The updated User
   */
  async update(data: any) {
    const params = { siteId: this.siteId, userId: this._id, data };
    const res = await User.update(params, this.client);
    return new User(this.client, res);
  }

  /**
   * Remove a User
   * @returns The result of the remove
   */
  async remove() {
    const params = { siteId: this.siteId, userId: this._id };
    const res = await User.remove(params, this.client);
    return res.data;
  }
}
