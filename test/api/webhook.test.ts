import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { WebhooksFixture } from "../fixtures/webhook.fixture";
import * as Webhook from "../../src/api/webhook";
import { Client } from "../../src/core/client";

describe("Webhooks", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of webhooks", async () => {
    const { parameters, response, path } = WebhooksFixture.list;
    mock.onGet(path).reply(200, response);

    const { data } = await Webhook.list(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should respond with a single webhook", async () => {
    const { parameters, response, path } = WebhooksFixture.get;
    mock.onGet(path).reply(200, response);

    const { data } = await Webhook.getOne(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should create a webhook", async () => {
    const { parameters, response, body, path } = WebhooksFixture.create;
    mock.onPost(path, body).reply(200, response);

    const { data } = await Webhook.create(client, { ...parameters, ...body });
    expect(data).toMatchObject(response);
  });

  it("should remove a webhook", async () => {
    const { parameters, response, path } = WebhooksFixture.delete;
    mock.onDelete(path).reply(200, response);

    const { data } = await Webhook.remove(client, parameters);
    expect(data).toMatchObject(response);
  });
});
