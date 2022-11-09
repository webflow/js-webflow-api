import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { SiteWrapper, MetaResponse } from "../../src/wrapper";
import { Webhook, Site, Collection } from "../../src/api";
import { CollectionFixture } from "../api/collection.fixture";
import { WebhooksFixture } from "../api/webhook.fixture";
import { SiteFixture } from "../api/site.fixture";
import { Client } from "../../src/core";

describe("Site Wrapper", () => {
  let _response: MetaResponse<any>;
  const mock = new MockAdapter(axios);
  const client = new Client();

  afterEach(() => {
    const { _meta } = _response;
    expect(_meta).toBeDefined();
    expect(_meta.rateLimit).toBeDefined();
    expect(_meta.rateLimit.limit).toBeDefined();
    expect(_meta.rateLimit.remaining).toBeDefined();
  });

  const site = new SiteWrapper(client, SiteFixture.get.response);

  it("should respond with a list of wrapped collections", async () => {
    const { parameters, response } = CollectionFixture.list;
    const { siteId } = parameters;

    const path = `/sites/${siteId}/collections`;
    mock.onGet(path).reply(200, response);
    const spy = jest.spyOn(Collection, "list");

    const result = (_response = await site.collections());

    expect(spy).toHaveBeenCalledWith(client, { siteId }, undefined);

    expect(result).toBeDefined();
    expect(result.length).toBe(response.length);

    const [first] = result;
    expect(first._id).toBe(response[0]._id);

    // collection wrapper functions
    expect(first.item).toBeDefined();
    expect(first.items).toBeDefined();
    expect(first.removeItem).toBeDefined();
    expect(first.createItem).toBeDefined();
    expect(first.updateItem).toBeDefined();
  });

  it("should respond with a list of wrapped webhooks", async () => {
    const { parameters, response } = WebhooksFixture.list;
    const { siteId } = parameters;

    const path = `/sites/${siteId}/webhooks`;
    mock.onGet(path).reply(200, response);
    const spy = jest.spyOn(Webhook, "list");

    const result = (_response = await site.webhooks());

    expect(spy).toHaveBeenCalledWith(client, { siteId }, undefined);

    expect(result).toBeDefined();
    expect(result.length).toBe(response.length);

    const [first] = result;
    expect(first._id).toBe(response[0]._id);

    // webhook wrapper functions
    expect(first.remove).toBeDefined();
  });

  it("should respond with a single wrapped webhook", async () => {
    const { parameters, response } = WebhooksFixture.get;
    const { siteId, webhookId } = parameters;

    const path = `/sites/${siteId}/webhooks/${webhookId}`;
    mock.onGet(path).reply(200, response);
    const spy = jest.spyOn(Webhook, "getOne");

    const result = (_response = await site.webhook({ webhookId }));

    expect(spy).toHaveBeenCalledWith(client, { siteId, webhookId });

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);

    // webhook wrapper functions
    expect(result.remove).toBeDefined();
  });

  it("should create a webhook and wrap it", async () => {
    const { parameters, response } = WebhooksFixture.create;
    const { siteId } = parameters;

    const path = `/sites/${siteId}/webhooks`;
    const spy = jest.spyOn(Webhook, "create");
    mock.onPost(path).reply(200, response);

    const result = (_response = await site.createWebhook(parameters));

    expect(spy).toHaveBeenCalledWith(client, parameters);

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);

    // webhook wrapper functions
    expect(result.remove).toBeDefined();
  });

  it("should remove a webhook", async () => {
    const { parameters, response } = WebhooksFixture.delete;
    const { siteId, webhookId } = parameters;

    const path = `/sites/${siteId}/webhooks/${webhookId}`;
    const spy = jest.spyOn(Webhook, "remove");
    mock.onDelete(path).reply(200, response);

    const result = (_response = await site.removeWebhook(parameters));

    expect(spy).toHaveBeenCalledWith(client, parameters);

    expect(result).toBeDefined();
    expect(result.deleted).toEqual(response.deleted);
  });

  it("should respond with a list of domains", async () => {
    const { parameters, response } = SiteFixture.domains;
    const { siteId } = parameters;

    const path = `/sites/${siteId}/domains`;
    const spy = jest.spyOn(Site, "domains");
    mock.onGet(path).reply(200, response);

    const result = (_response = await site.domains());

    expect(spy).toHaveBeenCalledWith(client, parameters);

    expect(result).toBeDefined();
    expect(result.length).toBe(response.length);

    const [first] = result;
    expect(first._id).toBe(response[0]._id);
    expect(first.name).toBe(response[0].name);
  });

  it("should publish a site", async () => {
    const { parameters, response } = SiteFixture.publish;
    const { siteId, domains } = parameters;

    const path = `/sites/${siteId}/publish`;
    const spy = jest.spyOn(Site, "publish");
    mock.onPost(path).reply(200, response);

    const result = (_response = await site.publishSite(domains));

    expect(spy).toHaveBeenCalledWith(client, parameters);

    expect(result).toBeDefined();
    expect(result.queued).toBe(true);
  });
});
