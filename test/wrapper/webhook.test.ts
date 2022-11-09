import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { WebhookWrapper, MetaResponse } from "../../src/wrapper";
import { WebhooksFixture } from "../api/webhook.fixture";
import { Webhook } from "../../src/api";
import { Client } from "../../src/core";

describe("Webhook Wrapper", () => {
  let _response: MetaResponse<any>;
  const mock = new MockAdapter(axios);
  const client = new Client();
  const webhook = new WebhookWrapper(client, WebhooksFixture.get.response);

  afterEach(() => {
    const { _meta } = _response;
    expect(_meta).toBeDefined();
    expect(_meta.rateLimit).toBeDefined();
    expect(_meta.rateLimit.limit).toBeDefined();
    expect(_meta.rateLimit.remaining).toBeDefined();
  });

  it("should remove a webhook", async () => {
    const { parameters, response } = WebhooksFixture.delete;
    const { siteId, webhookId } = parameters;

    const path = `/sites/${siteId}/webhooks/${webhookId}`;
    mock.onDelete(path).reply(200, response);
    const spy = jest.spyOn(Webhook, "remove");

    const result = (_response = await webhook.remove());

    expect(spy).toBeCalledWith(client, {
      params: undefined,
      webhookId,
      siteId,
    });

    expect(result).toBeDefined();
    expect(result.deleted).toBe(response.deleted);
  });
});
