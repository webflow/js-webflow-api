import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { OAuthFixture } from "./OAuth.fixture";
import Webflow from "../src";

describe("OAuth", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  it("should generate an authorization url", () => {
    const { parameters } = OAuthFixture.authorize;
    const { client_id, redirect_uri, state, response_type } = parameters;

    const url = webflow.authorizeUrl({
      client_id,
      redirect_uri,
      state,
    });

    const query = new URLSearchParams({
      response_type,
      client_id,
      redirect_uri,
      state,
    });

    expect(url).toBeDefined();
    expect(url).toBe(`https://${webflow.host}/oauth/authorize?${query}`);
  });

  it("should generate an access token", async () => {
    const { parameters, response } = OAuthFixture.access_token;
    const { client_id, client_secret, code, redirect_uri } = parameters;

    const scope = api.post("/oauth/access_token").reply(200, response);

    const token = await webflow.accessToken({
      client_id,
      client_secret,
      code,
      redirect_uri,
    });

    scope.done();

    expect(token).toBeDefined();
    expect(token.access_token).toBe(response.access_token);
  });

  it("should revoke an access token", async () => {
    const { parameters, response } = OAuthFixture.revoke_token;

    const scope = api.post("/oauth/revoke_authorization").reply(200, response);

    const result = await webflow.revokeToken(parameters);
    scope.done();

    expect(result).toBeDefined();
    expect(result.didRevoke).toBe(true);
  });
});
