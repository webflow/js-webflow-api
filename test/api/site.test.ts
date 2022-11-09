import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { SiteFixture } from "./site.fixture";
import { Client } from "../../src/core/client";
import * as Site from "../../src/api/site";

describe("Sites", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of sites", async () => {
    const { response } = SiteFixture.list;
    const path = "/sites";

    mock.onGet(path).reply(200, response);
    const { data } = await Site.list(client);

    expect(data).toBeDefined();
    expect(data.length).toBe(response.length);
    expect(data[0]).toMatchObject(response[0]);
  });

  it("should respond with a single site", async () => {
    const { parameters, response } = SiteFixture.get;
    const { siteId } = parameters;
    const path = `/sites/${siteId}`;

    mock.onGet(path).reply(200, response);
    const { data } = await Site.getOne(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(siteId);
  });

  it("should respond with a list of domains", async () => {
    const { parameters, response } = SiteFixture.domains;
    const { siteId } = parameters;
    const path = `/sites/${siteId}/domains`;

    mock.onGet(path).reply(200, response);
    const { data } = await Site.domains(client, parameters);

    expect(data).toBeDefined();
    expect(data.length).toBe(response.length);
    expect(data[0]).toMatchObject(response[0]);
  });

  it("should publish a site", async () => {
    const { parameters, response } = SiteFixture.publish;
    const { siteId } = parameters;
    const path = `/sites/${siteId}/publish`;

    mock.onPost(path).reply(200, response);
    const { data } = await Site.publish(client, parameters);

    expect(data).toBeDefined();
    expect(data.queued).toBe(true);
  });
});
