import { WebflowClient as FernClient } from "../Client";
import { OauthScope } from "../api/types";
export declare class WebflowClient extends FernClient {
    /**
     * @param clientId The OAuth client ID
     * @param state The state
     * @param redirectUri The redirect URI
     * @param scope The OAuth scopes
     * @returns the URL to authorize a user
     */
    static authorizeURL({ clientId, state, redirectUri, scope, }: {
        clientId: string;
        state?: string;
        redirectUri?: string;
        scope: OauthScope | OauthScope[];
    }): string;
    /**
     * @param clientId The OAuth client ID
     * @param clientSecret The OAuth client secret
     * @param code The OAuth code
     * @param redirect_uri The redirect uri
     * @returns access token that can be used to hit our API
     */
    static getAccessToken({ clientId, clientSecret, code, redirectUri, }: {
        clientId: string;
        clientSecret: string;
        code: string;
        redirectUri?: string;
    }): Promise<string>;
}
