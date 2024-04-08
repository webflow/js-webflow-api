import qs from "qs";
import { WebflowClient as FernClient } from "../Client";
import { OauthScope } from "../api/types";
import * as core from "../core";
import * as errors from "../errors";
import { Client as Collections } from "./CollectionsClient";

export class WebflowClient extends FernClient {
    constructor(protected readonly _options: FernClient.Options) {
        super(_options);
    }

    protected _collections: Collections | undefined;

    public get collections(): Collections {
        return (this._collections ??= new Collections(this._options));
    }

    /**
     * @param clientId The OAuth client ID
     * @param state The state
     * @param redirectUri The redirect URI
     * @param scope The OAuth scopes
     * @returns the URL to authorize a user
     */
    static authorizeURL({
        clientId,
        state,
        redirectUri,
        scope,
    }: {
        clientId: string;
        state?: string;
        redirectUri?: string;
        scope: OauthScope | OauthScope[];
    }): string {
        const params: Record<string, string> = { response_type: "code", client_id: clientId };
        if (redirectUri != null) {
            params["redirect_uri"] = redirectUri;
        }
        if (state != null) {
            params["state"] = state;
        }
        if (typeof scope === "string") {
            params["scope"] = scope;
        } else {
            params["scope"] = scope.join(" ");
        }
        return `https://webflow.com/oauth/authorize?${qs.stringify(params)}`;
    }

    /**
     * @param clientId The OAuth client ID
     * @param clientSecret The OAuth client secret
     * @param code The OAuth code
     * @param redirect_uri The redirect uri
     * @returns access token that can be used to hit our API
     */
    static async getAccessToken({
        clientId,
        clientSecret,
        code,
        redirectUri,
    }: {
        clientId: string;
        clientSecret: string;
        code: string;
        redirectUri?: string;
    }): Promise<string> {
        const body: Record<string, string> = {
            client_id: clientId,
            client_secret: clientSecret,
            code,
            grant_type: "authorization_code",
        };
        if (redirectUri != null) {
            body["redirect_uri"] = redirectUri;
        }
        const response = await core.fetcher({
            url: "https://api.webflow.com/oauth/access_token",
            method: "POST",
            contentType: "application/json",
            body,
        });
        if (response.ok) {
            return (response.body as any)["access_token"];
        }

        switch (response.error.reason) {
            case "status-code":
                throw new errors.WebflowError({
                    statusCode: response.error.statusCode,
                    body: response.error.body,
                });
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: response.error.statusCode,
                    body: response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: response.error.errorMessage,
                });
        }
    }
}
