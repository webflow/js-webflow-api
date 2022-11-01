import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { Webflow, WebflowArgumentError } from "../src/Webflow";
import { CollectionsFixture } from "./Collections.fixture";
import { WebhooksFixture } from "./Webhooks.fixture";
import { SitesFixture } from "./Sites.fixture";

describe("Sites", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  it("should respond with a list of sites", async () => {
    const { response } = SitesFixture.sites;

    const scope = api.get("/sites").reply(200, response);
    const sites = await webflow.sites();
    scope.done();

    expect(sites).toBeDefined();
    expect(sites.length).toBe(response.length);
    expect(sites[0]._id).toBe(response[0]._id);
  });

  it("should throw an error when getting a site without an id", () => {
    expect(webflow.site({})).rejects.toBeInstanceOf(WebflowArgumentError);
  });

  it("should respond with a single site", async () => {
    const { parameters, response } = SitesFixture.site;
    const { siteId } = parameters;

    const scope = api.get(`/sites/${siteId}`).reply(200, response);
    const site = await webflow.site(parameters);
    scope.done();

    expect(site).toBeDefined();
    expect(site._id).toBe(siteId);
  });

  it("should respond with a list of domains", async () => {
    const { parameters, response } = SitesFixture.domains;
    const { siteId } = parameters;

    const scope = api.get(`/sites/${siteId}/domains`).reply(200, response);
    const domains = await webflow.domains(parameters);
    scope.done();

    expect(domains).toBeDefined();
    expect(domains.length).toBe(response.length);
    expect(domains[0]._id).toBe(response[0]._id);
    expect(domains[0].domain).toBe(response[0].domain);
  });

  it("should publish a site", async () => {
    const { parameters, response } = SitesFixture.publish;
    const { siteId } = parameters;

    const scope = api.post(`/sites/${siteId}/publish`).reply(200, response);
    const result = await webflow.publishSite(parameters);
    scope.done();

    expect(result).toBeDefined();
    expect(result.queued).toBe(true);
  });

  describe("Site Response Wrapper", () => {
    let site;

    beforeEach(async () => {
      const { parameters, response } = SitesFixture.site;
      const { siteId } = parameters;

      const scope = api.get(`/sites/${siteId}`).reply(200, response);
      site = await webflow.site(parameters);
      scope.done();
    });

    it("should respond with a list of collections", async () => {
      const { parameters, response } = CollectionsFixture.collections;
      const { siteId } = parameters;

      const collectionScope = api
        .get(`/sites/${siteId}/collections`)
        .reply(200, response);
      const collections = await site.collections();
      collectionScope.done();

      expect(collections).toBeDefined();
      expect(collections.length).toBe(response.length);
      expect(collections[0]._id).toBe(response[0]._id);
    });

    it("should respond with a list of webhooks", async () => {
      const { parameters, response } = WebhooksFixture.webhooks;
      const { siteId } = parameters;

      const scope = api.get(`/sites/${siteId}/webhooks`).reply(200, response);
      const webhooks = await site.webhooks();
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
      const webhook = await site.webhook({ webhookId });
      scope.done();

      expect(webhook).toBeDefined();
      expect(webhook._id).toBe(response._id);
    });

    it("should create a webhook", async () => {
      const { parameters, response } = WebhooksFixture.webhook;
      const { siteId } = parameters;

      const newWebhook = {
        triggerType: "form_submit",
        url: "https://example.com",
      };

      const scope = api
        .post(`/sites/${siteId}/webhooks`, newWebhook)
        .reply(200, response);
      const webhook = await site.createWebhook({ siteId, ...newWebhook });
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

      const result = await site.removeWebhook(parameters);
      scope.done();

      expect(result).toBeDefined();
    });

    it("should respond with a list of domains", async () => {
      const { parameters, response } = SitesFixture.domains;
      const { siteId } = parameters;

      const scope = api.get(`/sites/${siteId}/domains`).reply(200, response);
      const domains = await site.domains();
      scope.done();

      expect(domains).toBeDefined();
      expect(domains.length).toBe(response.length);
      expect(domains[0]._id).toBe(response[0]._id);
      expect(domains[0].domain).toBe(response[0].domain);
    });

    it("should publish a site", async () => {
      const { parameters, response } = SitesFixture.publish;
      const { siteId } = parameters;

      const scope = api.post(`/sites/${siteId}/publish`).reply(200, response);
      const result = await site.publishSite(parameters);
      scope.done();

      expect(result).toBeDefined();
      expect(result.queued).toBe(true);
    });
  });
});
