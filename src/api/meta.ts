import { AxiosInstance } from "axios";

/**************************************************************
 * Types
 **************************************************************/
export type InfoApplication = {
  description: string;
  ownerType: string;
  homepage: string;
  owner: string;
  name: string;
  _id: string;
};

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IAuthenticatedUser {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
  };
}

export interface IAuthentiationInfo {
  application: InfoApplication;
  workspaces: string[];
  rateLimit: number;
  createdOn: string;
  grantType: string;
  lastUsed: string;
  sites: string[];
  users: string[];
  orgs: string[];
  status: string;
  _id: string;
}

/**************************************************************
 * Class
 **************************************************************/
export class Meta {
  /**
   * Get the authentication info for the current token
   * @param client The Axios client instance
   * @returns The authentication info
   */
  static info(client: AxiosInstance) {
    return client.get<IAuthentiationInfo>("/info");
  }

  /**
   * Get the authenticated user
   * @param client The Axios client instance
   * @returns The authenticated user
   */
  static user(client: AxiosInstance) {
    return client.get<IAuthenticatedUser>("/user");
  }
}
