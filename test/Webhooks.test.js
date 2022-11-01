import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { WebhooksFixture } from "./Webhooks.fixture";
import Webflow from "../src";

describe("Webhooks", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  it("should respond with a list of webhooks", async () => {
    const { parameters, response } = WebhooksFixture.webhooks;
    const { siteId } = parameters;

    const scope = api.get(`/sites/${siteId}/webhooks`).reply(200, response);
    const webhooks = await webflow.webhooks(parameters);
    scope.done();

    expect(webhooks).toBeDefined();
    expect(webhooks.length).toBe(response.length);
    expect(webhooks[0]._id).toBe(response[0]._id);
  });

  it("should respond with a single webhook", async () => {
    const { parameters, response } = WebhooksFixture.webhook;
    const { siteId, webhookId } = parameters;

    const scope = api
      .get(`/sites/${siteId}/webhooks/${webhookId}`)
      .reply(200, response);
    const webhook = await webflow.webhook(parameters);
    scope.done();

    expect(webhook).toBeDefined();
    expect(webhook._id).toBe(response._id);
  });

  it("should create a webhook", async () => {
    const { parameters, response } = WebhooksFixture.webhook;
    const { siteId } = parameters;

    const newWebhook = {
      triggerType: "form_submission",
      url: "https://example.com",
    };

    const scope = api
      .post(`/sites/${siteId}/webhooks`, newWebhook)
      .reply(200, response);
    const webhook = await webflow.createWebhook({ siteId, ...newWebhook });
    scope.done();

    expect(webhook).toBeDefined();
    expect(webhook._id).toBe(response._id);
  });

  it("should remove a webhook", async () => {
    const { parameters, response } = WebhooksFixture.webhook;
    const { siteId, webhookId } = parameters;

    const scope = api
      .delete(`/sites/${siteId}/webhooks/${webhookId}`)
      .reply(200, response);

    const result = await webflow.removeWebhook(parameters);
    scope.done();

    expect(result).toBeDefined();
  });

  describe("Webhook Response Wrapper", () => {
    let webhook;

    beforeEach(async () => {
      const { parameters, response } = WebhooksFixture.webhook;
      const { siteId, webhookId } = parameters;

      const scope = api
        .get(`/sites/${siteId}/webhooks/${webhookId}`)
        .reply(200, response);
      webhook = await webflow.webhook(parameters);
      scope.done();
    });

    it("should remove a webhook", async () => {
      const { parameters, response } = WebhooksFixture.webhook;
      const { siteId, webhookId } = parameters;

      const scope = api
        .delete(`/sites/${siteId}/webhooks/${webhookId}`)
        .reply(200, response);

      const result = await webhook.remove();
      scope.done();

      expect(result).toBeDefined();
    });
  });
});
