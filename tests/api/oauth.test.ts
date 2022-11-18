import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { OAuthFixture } from "../fixtures";
import { OAuth } from "../../src/api";

describe("OAuth", () => {
  const mock = new MockAdapter(axios);
  const client = axios.create();

  it("should generate an authorization url", () => {
    const { parameters } = OAuthFixture.authorize;
    const { client_id, state, response_type } = parameters;

    const baseURL = "https://api.test.com";
    const instance = axios.create({ baseURL });
    const url = OAuth.authorizeUrl({ client_id, state }, instance);
    const query = new URLSearchParams({ response_type, client_id, state });

    expect(url).toBeDefined();
    expect(url).toBe(`${baseURL.replace("api.", "")}/oauth/authorize?${query}`);
  });

  it("should generate an access token", async () => {
    const { parameters, response } = OAuthFixture.access_token;
    const path = `/oauth/access_token`;

    mock.onPost(path).reply(200, response);
    const { data } = await OAuth.accessToken(parameters, client);

    expect(data).toBeDefined();
    expect(data.access_token).toBe(response.access_token);
  });

  it("should revoke an access token", async () => {
    const { parameters, response } = OAuthFixture.revoke_token;
    const path = `/oauth/revoke_authorization`;

    mock.onPost(path).reply(200, response);
    const { data } = await OAuth.revokeToken(parameters, client);

    expect(data).toBeDefined();
    expect(data.didRevoke).toBe(true);
  });
});
