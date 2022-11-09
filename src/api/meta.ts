import { Client } from "../core";

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
 * Functions
 **************************************************************/

/**
 * Get the authentication info for the current token
 * @param client The Webflow client
 * @returns The authentication info
 */
export function info(client: Client) {
  return client.get<IAuthentiationInfo>("/info");
}

/**
 * Get the authenticated user
 * @param client The Webflow client
 * @returns The authenticated user
 */
export function user(client: Client) {
  return client.get<IAuthenticatedUser>("/user");
}
