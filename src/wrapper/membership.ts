import { Client, PaginationFilter } from "../core";
import { ResponseWrapper } from ".";
import { Membership } from "../api";

export class MembershipWrapper implements Membership.IUser {
  emailVerified: boolean;
  lastUpdated?: string;
  createdOn: string;
  _id: string;
  data: any;

  constructor(
    private client: Client,
    private siteId: string,
    membership: Membership.IUser
  ) {
    Object.assign(this, membership);
  }

  /**************************************************************
   * Static Methods
   **************************************************************/

  /**
   * Get a single User
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.userId The user ID
   * @returns A single User
   */
  static async getOne(
    client: Client,
    { userId, siteId }: { siteId: string; userId: string }
  ) {
    const res = await Membership.getOne(client, { userId, siteId });
    const user = ResponseWrapper<typeof res.data>(res);
    return new MembershipWrapper(client, siteId, user);
  }

  /**
   * Get a list of Users
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @returns A list of Users
   */
  static async list(
    client: Client,
    { siteId, limit, offset }: { siteId: string } & PaginationFilter
  ) {
    const res = await Membership.list(client, { siteId, limit, offset });
    const users = res.data.users.map(
      (u) => new MembershipWrapper(client, siteId, u)
    );
    return ResponseWrapper<typeof users>(res, users);
  }

  /**
   * Update a User
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.userId The user ID
   * @param params.data The data to update
   * @returns The updated User
   */
  static async update(
    client: Client,
    { userId, siteId, data }: { userId: string; siteId: string; data: any }
  ) {
    const res = await Membership.update(client, { userId, siteId, ...data });
    const user = ResponseWrapper<typeof res.data>(res);
    return new MembershipWrapper(client, siteId, user);
  }

  /**
   * Invite a User to a site
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.email The email address of the user to invite
   * @returns The newly created User
   */
  static async invite(
    client: Client,
    { siteId, email }: { siteId: string; email: string }
  ) {
    const res = await Membership.invite(client, { siteId, email });
    return ResponseWrapper<typeof res.data>(res);
  }

  /**
   * Get a list of Access Groups
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.siteId The Site ID
   * @param params.limit The number of items to return (optional)
   * @param params.offset The number of items to skip (optional)
   * @returns A list of Access Groups
   */
  static async accessGroups(
    client: Client,
    {
      siteId,
      limit,
      offset,
    }: { siteId: string; limit?: number; offset?: number }
  ) {
    const res = await Membership.accessGroups(client, {
      siteId,
      limit,
      offset,
    });
    return ResponseWrapper<typeof res.data>(res);
  }

  /**
   * Remove a User
   * @param client The Webflow client
   * @param params The params for the request
   * @param params.siteId The site ID
   * @param params.userId The user ID
   * @returns The result of the remove
   */
  static async remove(
    client: Client,
    { siteId, userId }: { siteId: string; userId: string }
  ) {
    const res = await Membership.remove(client, { userId, siteId });
    return ResponseWrapper<typeof res.data>(res);
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
    return MembershipWrapper.update(this.client, {
      siteId: this.siteId,
      userId: this._id,
      data,
    });
  }

  /**
   * Remove a User
   * @returns The result of the remove
   */
  async remove() {
    return MembershipWrapper.remove(this.client, {
      siteId: this.siteId,
      userId: this._id,
    });
  }
}
