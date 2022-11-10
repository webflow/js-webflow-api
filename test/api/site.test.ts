import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { SiteFixture } from "../fixtures/site.fixture";
import { Client } from "../../src/core/client";
import * as Site from "../../src/api/site";

describe("Sites", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of sites", async () => {
    const { response, path } = SiteFixture.list;
    mock.onGet(path).reply(200, response);

    const { data } = await Site.list(client);
    expect(data).toMatchObject(response);
  });

  it("should respond with a single site", async () => {
    const { parameters, response, path } = SiteFixture.get;
    mock.onGet(path).reply(200, response);

    const { data } = await Site.getOne(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should respond with a list of domains", async () => {
    const { parameters, response, path } = SiteFixture.domains;
    mock.onGet(path).reply(200, response);

    const { data } = await Site.domains(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should publish a site", async () => {
    const { parameters, response, body, path } = SiteFixture.publish;
    mock.onPost(path, body).reply(200, response);

    const { data } = await Site.publish(client, { ...parameters, ...body });
    expect(data).toMatchObject(response);
  });
});
