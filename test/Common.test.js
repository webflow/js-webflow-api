import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { CommonFixture } from "./Common.fixture";
import { MetaFixture } from "./Meta.fixture";
import { Webflow, WebflowRequestError } from "../src/Webflow";

describe("Common", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  it("should return a WebflowRequestError on bad requests", async () => {
    const { response } = CommonFixture.error;
    api.get("/sites").reply(200, response);

    try {
      await webflow.sites();
    } catch (error) {
      expect(error).toBeInstanceOf(WebflowRequestError);
      expect(error.err).toBe(response.err);
      expect(error.msg).toBe(response.msg);
      expect(error.code).toBe(response.code);
      expect(error.name).toBe(response.name);
    }
  });

  it("should pass the access token as an HTTP header", async () => {
    const scope = api
      .matchHeader("Authorization", /Bearer token/)
      .get("/info")
      .reply(200, {});

    const result = await webflow.info();
    scope.done();

    expect(result).toBeDefined();
  });

  it("should attach rate limit information to response objects", async () => {
    const { response } = MetaFixture.info;
    const { headers } = CommonFixture;

    const scope = api.get("/info").reply(200, response, headers);
    const result = await webflow.info();
    scope.done();

    expect(result._meta.rateLimit.limit).toBe(100);
    expect(result._meta.rateLimit.remaining).toBe(99);
  });

  it("should allow the token to be set via the token property", async () => {
    const scope = api
      .matchHeader("Authorization", /Bearer new-token/)
      .get("/info")
      .reply(200, {});

    webflow.token = "new-token";
    const result = await webflow.info();
    scope.done();

    expect(result).toBeDefined();
  });
});
