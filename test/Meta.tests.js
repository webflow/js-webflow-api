import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { MetaFixture } from "./Meta.fixture";
import Webflow from "../src";

describe("Meta", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  it("should get info", async () => {
    const { response } = MetaFixture.info;

    const scope = api.get("/info").reply(200, response);
    const result = await webflow.info();
    scope.done();

    expect(result).toBeDefined();
    expect(result.users).toBeDefined();
    expect(result.sites).toBeDefined();
    expect(result.workspaces).toBeDefined();
    expect(result.sites[0]).toBe("62f3b1f7eafac55d0c64ef91");
  });

  it("should get info about the installer", async () => {
    const { response } = MetaFixture.installer;
    const scope = api.get("/user").reply(200, response);

    const result = await webflow.installer();
    scope.done();

    expect(result).toBeDefined();
    expect(result.user).toBeDefined();
    expect(result.user._id).toBe("545bbecb7bdd6769632504a7");
    expect(result.user.email).toBe("some@email.com");
    expect(result.user.firstName).toBe("Some");
    expect(result.user.lastName).toBe("One");
  });
});
