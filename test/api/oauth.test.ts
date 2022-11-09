import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import * as OAuth from "../../src/api/oauth";
import { Client } from "../../src/core/client";
import { OAuthFixture } from "./oauth.fixture";

describe("OAuth", () => {
  const options = { host: "test.com" };
  const mock = new MockAdapter(axios);
  const client = new Client(options);

  it("should generate an authorization url", () => {
    const { parameters } = OAuthFixture.authorize;
    const { client_id, state, response_type } = parameters;

    const url = OAuth.authorizeUrl(client, { client_id, state });
    const query = new URLSearchParams({ response_type, client_id, state });

    expect(url).toBeDefined();
    expect(url).toBe(`https://api.${options.host}/oauth/authorize?${query}`);
  });

  it("should generate an access token", async () => {
    const { parameters, response } = OAuthFixture.access_token;
    const path = `/oauth/access_token`;

    mock.onPost(path).reply(200, response);
    const { data } = await OAuth.accessToken(client, parameters);

    expect(data).toBeDefined();
    expect(data.access_token).toBe(response.access_token);
  });

  it("should revoke an access token", async () => {
    const { parameters, response } = OAuthFixture.revoke_token;
    const path = `/oauth/revoke_authorization`;

    mock.onPost(path).reply(200, response);
    const { data } = await OAuth.revokeToken(client, parameters);

    expect(data).toBeDefined();
    expect(data.didRevoke).toBe(true);
  });
});
