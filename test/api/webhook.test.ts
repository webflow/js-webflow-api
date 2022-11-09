import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { WebhooksFixture } from "./webhook.fixture";
import * as Webhook from "../../src/api/webhook";
import { Client } from "../../src/core/client";

describe("Webhooks", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of webhooks", async () => {
    const { parameters, response } = WebhooksFixture.list;
    const { siteId } = parameters;
    const path = `/sites/${siteId}/webhooks`;

    mock.onGet(path).reply(200, response);
    const { data } = await Webhook.list(client, parameters);

    expect(data).toBeDefined();
    expect(data.length).toEqual(response.length);
    expect(data[0]).toEqual(response[0]);
  });

  it("should respond with a single webhook", async () => {
    const { parameters, response } = WebhooksFixture.get;
    const { siteId, webhookId } = parameters;

    const path = `/sites/${siteId}/webhooks/${webhookId}`;
    mock.onGet(path).reply(200, response);
    const { data } = await Webhook.getOne(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
  });

  it("should create a webhook", async () => {
    const { parameters, response } = WebhooksFixture.create;
    const { siteId } = parameters;

    const path = `/sites/${siteId}/webhooks`;
    mock.onPost(path).reply(200, response);
    const { data } = await Webhook.create(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
  });

  it("should remove a webhook", async () => {
    const { parameters, response } = WebhooksFixture.delete;
    const { siteId, webhookId } = parameters;

    const path = `/sites/${siteId}/webhooks/${webhookId}`;
    mock.onDelete(path).reply(200, response);
    const { data } = await Webhook.remove(client, parameters);

    expect(data).toBeDefined();
    expect(data.deleted).toEqual(response.deleted);
  });
});
