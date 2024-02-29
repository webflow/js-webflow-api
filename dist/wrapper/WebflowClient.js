"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebflowClient = void 0;
const Client_1 = require("../Client");
const errors = __importStar(require("../errors"));
const core = __importStar(require("../core"));
const qs_1 = __importDefault(require("qs"));
class WebflowClient extends Client_1.WebflowClient {
    /**
     * @param clientId The OAuth client ID
     * @param state The state
     * @param redirectUri The redirect URI
     * @param scope The OAuth scopes
     * @returns the URL to authorize a user
     */
    static authorizeURL({ clientId, state, redirectUri, scope, }) {
        const params = { response_type: "code", client_id: clientId };
        if (redirectUri != null) {
            params["redirect_uri"] = redirectUri;
        }
        if (state != null) {
            params["state"] = state;
        }
        if (typeof scope === "string") {
            params["scope"] = scope;
        }
        else {
            params["scope"] = scope.join("+");
        }
        return `https://webflow.com/oauth/authorize?${qs_1.default.stringify(params)}`;
    }
    /**
     * @param clientId The OAuth client ID
     * @param clientSecret The OAuth client secret
     * @param code The OAuth code
     * @param redirect_uri The redirect uri
     * @returns access token that can be used to hit our API
     */
    static getAccessToken({ clientId, clientSecret, code, redirectUri, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                client_id: clientId,
                client_secret: clientSecret,
                code,
                grant_type: "authorization_code",
            };
            if (redirectUri != null) {
                body["redirect_uri"] = redirectUri;
            }
            const response = yield core.fetcher({
                url: "https://api.webflow.com/oauth/access_token",
                method: "POST",
                contentType: "application/json",
                body,
            });
            if (response.ok) {
                return response["access_token"];
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
        });
    }
}
exports.WebflowClient = WebflowClient;
