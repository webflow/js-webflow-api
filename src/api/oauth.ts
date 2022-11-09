import { Client, requireArgs } from "../core";

/**************************************************************
 * Interfaces
 **************************************************************/
export interface IAuthorizeUrlParams {
  state?: string;
  scope?: string;
  client_id: string;
  redirect_uri?: string;
  response_type?: string;
}

export interface IRevokeTokenParams {
  client_secret: string;
  access_token: string;
  client_id: string;
}

export interface IAccessTokenParams {
  code: string;
  client_id: string;
  grant_type?: string;
  client_secret: string;
  redirect_uri?: string;
}

export interface IAccessToken {
  token_type: string;
  access_token: string;
}

export interface IRevokeToken {
  didRevoke: boolean;
}

/**************************************************************
 * Functions
 **************************************************************/

/**
 * Get the URL to authorize a user
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.client_id The OAuth client ID
 * @param params.scope The scope (optional)
 * @param params.state The state (optional)
 * @param params.redirect_uri The redirect URI (optional)
 * @param params.response_type The response type (default: code)
 * @returns The URL to authorize a user
 */
export function authorizeUrl(
  client: Client,
  {
    response_type = "code",
    redirect_uri,
    client_id,
    state,
    scope,
  }: IAuthorizeUrlParams
) {
  requireArgs({ client_id });

  const params = { response_type, client_id };
  if (redirect_uri) params["redirect_uri"] = redirect_uri;
  if (state) params["state"] = state;
  if (scope) params["scope"] = scope;

  const url = "/oauth/authorize";
  return client.getUri({ url, method: "GET", params });
}

/**
 * Get an access token
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.code The OAuth code
 * @param params.client_id The OAuth client ID
 * @param params.client_secret The OAuth client secret
 * @param params.redirect_uri The redirect URI (optional)
 * @param params.grant_type The grant type (default: "authorization_code")
 * @returns An access token
 */
export function accessToken(
  client: Client,
  {
    grant_type = "authorization_code",
    client_secret,
    redirect_uri,
    client_id,
    code,
  }: IAccessTokenParams
) {
  requireArgs({ client_id, client_secret, code });

  const path = "/oauth/access_token";
  const data = { client_secret, redirect_uri, grant_type, client_id, code };
  return client.post<IAccessToken>(path, data);
}

/**
 * Revoke an access token
 * @param client The Webflow client
 * @param params The params for the request
 * @param params.client_id The OAuth client ID
 * @param params.client_secret The OAuth client secret
 * @param params.access_token The OAuth access token
 * @returns The result of the revoke
 */
export function revokeToken(
  client: Client,
  { client_secret, access_token, client_id }: IRevokeTokenParams
) {
  requireArgs({ client_id, client_secret, access_token });

  const path = "/oauth/revoke_authorization";
  const data = { client_secret, access_token, client_id };
  return client.post<IRevokeToken>(path, data);
}
