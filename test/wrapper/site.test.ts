import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { SiteWrapper, MetaResponse } from "../../src/wrapper";
import { Webhook, Site, Collection } from "../../src/api";
import { MembershipFixture } from "../fixtures/membership.fixture";
import { CollectionFixture } from "../fixtures/collection.fixture";
import { WebhooksFixture } from "../fixtures/webhook.fixture";
import { SiteFixture } from "../fixtures/site.fixture";
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
    const { parameters, response, path } = CollectionFixture.list;
    const { siteId } = parameters;

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
    const { parameters, response, path } = WebhooksFixture.list;
    const { siteId } = parameters;

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
    const { parameters, response, path } = WebhooksFixture.get;
    const { siteId, webhookId } = parameters;

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
    const { parameters, response, body, path } = WebhooksFixture.create;

    const spy = jest.spyOn(Webhook, "create");
    mock.onPost(path, body).reply(200, response);

    const _params = { ...parameters, ...body };
    const result = (_response = await site.createWebhook(_params));

    expect(spy).toHaveBeenCalledWith(client, _params);

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);

    // webhook wrapper functions
    expect(result.remove).toBeDefined();
  });

  it("should remove a webhook", async () => {
    const { parameters, response, path } = WebhooksFixture.delete;

    const spy = jest.spyOn(Webhook, "remove");
    mock.onDelete(path).reply(200, response);

    const result = (_response = await site.removeWebhook(parameters));

    expect(spy).toHaveBeenCalledWith(client, parameters);

    expect(result).toBeDefined();
    expect(result.deleted).toEqual(response.deleted);
  });

  it("should respond with a list of domains", async () => {
    const { parameters, response, path } = SiteFixture.domains;

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
    const { parameters, response, path, body } = SiteFixture.publish;
    const { domains } = body;

    const spy = jest.spyOn(Site, "publish");
    mock.onPost(path, body).reply(200, response);

    const result = (_response = await site.publishSite(domains));

    expect(spy).toHaveBeenCalledWith(client, { ...parameters, domains });

    expect(result).toBeDefined();
    expect(result.queued).toBe(true);
  });

  it("should return a single user", async () => {
    const { response, path, parameters } = MembershipFixture.get;
    const { userId } = parameters;

    mock.onGet(path).reply(200, response);
    const result = (_response = await site.user({ userId }));

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);
  });

  it("should return users", async () => {
    const { response, path } = MembershipFixture.list;

    mock.onGet(path).reply(200, response);
    const result = (_response = await site.users());

    expect(result).toBeDefined();
    expect(result.length).toBe(response.users.length);
  });

  it("should return access groups", async () => {
    const { response, path } = MembershipFixture.access_groups;

    mock.onGet(path).reply(200, response);
    const result = (_response = await site.accessGroups());

    expect(result).toBeDefined();
    expect(result.accessGroups.length).toBe(response.accessGroups.length);
  });

  it("should invite a user", async () => {
    const { response, path, body } = MembershipFixture.invite;
    const { email } = body;

    mock.onPost(path, body).reply(200, response);
    const result = (_response = await site.inviteUser({ email }));

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);
  });

  it("should remove a user", async () => {
    const { response, path, parameters } = MembershipFixture.delete;
    const { userId } = parameters;

    mock.onDelete(path).reply(200, response);
    const result = (_response = await site.removeUser({ userId }));

    expect(result).toBeDefined();
    expect(result.deleted).toBe(response.deleted);
  });
});
