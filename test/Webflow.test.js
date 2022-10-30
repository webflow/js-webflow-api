import { WebflowArgumentError, WebflowRequestError } from "../src/WebflowError";
import { expect, it } from "@jest/globals";
import { Webflow } from "../src/Webflow";
import yaml from "js-yaml";
import nock from "nock";
import fs from "fs";

const apiData = yaml.load(fs.readFileSync("./test/api-data.yml", "utf8"));

describe("Webflow Client", () => {
  let api;
  let webflow;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  describe("Common", () => {
    it("should return a WebflowRequestError on bad requests", async () => {
      const { response } = apiData.common.error;
      api.get("/sites").reply(200, response);

      try {
        await webflow.sites();
      } catch (error) {
        expect(error).toBeInstanceOf(WebflowRequestError);
        expect(error.err).toBe(response.err);
        expect(error.msg).toBe(response.msg);
        expect(error.code).toBe(response.code);
        expect(error.name).toBe(response.name);
      }
    });

    it("should requires an access token", () => {
      expect(() => new Webflow({})).toThrow(WebflowArgumentError);
    });

    it("should pass the access token as an HTTP header", async () => {
      const scope = api
        .matchHeader("Authorization", /Bearer token/)
        .get("/info")
        .reply(200, {});

      const result = await webflow.info();
      scope.done();

      expect(result).toBeDefined();
    });

    it("should attach rate limit information to response objects", async () => {
      const { response } = apiData.endpoints.info;
      const { headers } = apiData.common;

      const scope = api.get("/info").reply(200, response, headers);
      const result = await webflow.info();
      scope.done();

      expect(result._meta.rateLimit.limit).toBe(100);
      expect(result._meta.rateLimit.remaining).toBe(99);
    });
  });

  describe("Meta", () => {
    it("should get info", async () => {
      const { response } = apiData.endpoints.info;

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
      const { response } = apiData.endpoints.installer;
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

  describe("Sites", () => {
    it("should respond with a list of sites", async () => {
      const { response } = apiData.endpoints.sites;

      const scope = api.get("/sites").reply(200, response);
      const sites = await webflow.sites();
      scope.done();

      expect(sites).toBeDefined();
      expect(sites.length).toBe(response.length);
      expect(sites[0]._id).toBe(response[0]._id);
    });

    it("should throw an error when getting a site without an id", () => {
      expect(() => webflow.site({})).toThrow(WebflowArgumentError);
    });

    it("should respond with a single site", async () => {
      const { parameters, response } = apiData.endpoints.site;
      const { siteId } = parameters;

      const scope = api.get(`/sites/${siteId}`).reply(200, response);
      const site = await webflow.site(parameters);
      scope.done();

      expect(site).toBeDefined();
      expect(site._id).toBe(siteId);
    });

    it("should respond with a list of domains", async () => {
      const { parameters, response } = apiData.endpoints.domains;
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
      const { parameters, response } = apiData.endpoints.publish;
      const { siteId } = parameters;

      const scope = api.post(`/sites/${siteId}/publish`).reply(200, response);
      const result = await webflow.publishSite(parameters);
      scope.done();

      expect(result).toBeDefined();
      expect(result.queued).toBe(true);
    });
  });

  describe("Collections", () => {
    it("should respond with a list of site collections", async () => {
      const { parameters, response } = apiData.endpoints.collections;
      const { siteId } = parameters;

      const scope = api
        .get(`/sites/${siteId}/collections`)
        .reply(200, response);
      const collections = await webflow.collections(parameters);
      scope.done();

      expect(collections).toBeDefined();
      expect(collections.length).toBe(response.length);
      expect(collections[0]._id).toBe(response[0]._id);
    });

    it("should throw an error when getting collections without an id", () => {
      expect(() => webflow.collections({})).toThrow(WebflowArgumentError);
    });

    it("should respond with a single site collection", async () => {
      const { parameters, response } = apiData.endpoints.collection;
      const { collectionId } = parameters;

      const scope = api
        .get(`/collections/${collectionId}`)
        .reply(200, response);
      const collection = await webflow.collection(parameters);
      scope.done();

      expect(collection).toBeDefined();
      expect(collection._id).toBe(response._id);
    });

    it("should throw an error when getting a collection without ids", () => {
      expect(() => webflow.collection({})).toThrow(WebflowArgumentError);
    });
  });

  describe("Items", () => {
    it("should respond with a list of items", async () => {
      const { parameters, response } = apiData.endpoints.items;
      const { collectionId } = parameters;

      const scope = api
        .get(`/collections/${collectionId}/items`)
        .reply(200, response);
      const { items } = await webflow.items(parameters);
      scope.done();

      expect(items).toBeDefined();
      expect(items.length).toBe(response.items.length);
      expect(items[0]._id).toBe(response.items[0]._id);
    });

    it("should respond with a single item", async () => {
      const { parameters, response } = apiData.endpoints.item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .get(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const item = await webflow.item(parameters);
      scope.done();

      expect(item).toBeDefined();
      expect(item._id).toBe(response.items[0]._id);
    });

    it("should create an item", async () => {
      const { parameters, response } = apiData.endpoints.item;
      const { collectionId } = parameters;

      const scope = api
        .post(`/collections/${collectionId}/items`)
        .reply(200, response);
      const item = await webflow.createItem(parameters);
      scope.done();

      expect(item).toBeDefined();
      expect(item._id).toBe(response._id);
    });

    it("should update an item", async () => {
      const { parameters, response } = apiData.endpoints.item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .put(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const item = await webflow.updateItem(parameters);
      scope.done();

      expect(item).toBeDefined();
      expect(item._id).toBe(response._id);
    });

    it("should patch an item", async () => {
      const { parameters, response } = apiData.endpoints.item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .patch(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const item = await webflow.patchItem(parameters);
      scope.done();

      expect(item).toBeDefined();
      expect(item._id).toBe(response._id);
    });

    it("should remove an item", async () => {
      const { parameters, response } = apiData.endpoints.remove_item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .delete(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const result = await webflow.removeItem(parameters);
      scope.done();

      expect(result).toBeDefined();
      expect(result.deleted).toBe(response.deleted);
    });

    it("should remove multiple items", async () => {
      const { parameters, response } = apiData.endpoints.remove_items;
      const { collectionId } = parameters;

      const scope = api
        .delete(`/collections/${collectionId}/items`)
        .reply(200, response);

      const result = await webflow.deleteItems(parameters);
      scope.done();

      expect(result).toBeDefined();
      expect(result.deletedItemIds.length).toBe(parameters.itemIds.length);
      expect(result.deletedItemIds[0]).toBe(parameters.itemIds[0]);
    });

    it("should remove multiple items live", async () => {
      const { parameters, response } = apiData.endpoints.remove_items;
      const { collectionId } = parameters;

      const scope = api
        .delete(`/collections/${collectionId}/items?live=true`)
        .reply(200, response);

      const result = await webflow.deleteItems(parameters, { live: true });
      scope.done();

      expect(result).toBeDefined();
      expect(result.deletedItemIds.length).toBe(parameters.itemIds.length);
      expect(result.deletedItemIds[0]).toBe(parameters.itemIds[0]);
    });

    it("should publish multiple items", async () => {
      const { parameters, response } = apiData.endpoints.publish_items;
      const { collectionId } = parameters;

      const scope = api
        .put(`/collections/${collectionId}/items/publish`)
        .reply(200, response);

      const result = await webflow.publishItems(parameters);
      scope.done();

      expect(result).toBeDefined();
      expect(result.publishedItemIds.length).toBe(parameters.itemIds.length);
      expect(result.publishedItemIds[0]).toBe(parameters.itemIds[0]);
    });

    it("should publish multiple items live", async () => {
      const { parameters, response } = apiData.endpoints.publish_items;
      const { collectionId } = parameters;

      const scope = api
        .put(`/collections/${collectionId}/items/publish?live=true`)
        .reply(200, response);

      const result = await webflow.publishItems(parameters, { live: true });
      scope.done();

      expect(result).toBeDefined();
      expect(result.publishedItemIds.length).toBe(parameters.itemIds.length);
      expect(result.publishedItemIds[0]).toBe(parameters.itemIds[0]);
    });
  });

  describe("Users", () => {
    it("should respond with a list of users", async () => {
      const { response, parameters } = apiData.endpoints.users;
      const { siteId } = parameters;

      const scope = api.get(`/sites/${siteId}/users`).reply(200, response);

      const { users } = await webflow.users(parameters);
      scope.done();

      expect(users).toBeDefined();
      expect(users.length).toBe(response.users.length);
      expect(users[0]._id).toBe(response.users[0]._id);
    });

    it("should respond with a single user", async () => {
      const { response, parameters } = apiData.endpoints.user;
      const { siteId, userId } = parameters;

      const scope = api
        .get(`/sites/${siteId}/users/${userId}`)
        .reply(200, response);
      const user = await webflow.user(parameters);
      scope.done();

      expect(user).toBeDefined();
      expect(user._id).toBe(response._id);
    });

    it("should invite a user", async () => {
      const { response, parameters } = apiData.endpoints.invite_user;
      const { siteId } = parameters;

      const scope = api
        .post(`/sites/${siteId}/users/invite`)
        .reply(200, response);
      const user = await webflow.inviteUser(parameters);

      scope.done();
      expect(user).toBeDefined();
      expect(user._id).toBe(response._id);
      expect(user.data).toBeDefined();
      expect(user.data.email).toBe(response.data.email);
    });

    it("should remove a user", async () => {
      const { response, parameters } = apiData.endpoints.user;
      const { siteId, userId } = parameters;

      const scope = api
        .delete(`/sites/${siteId}/users/${userId}`)
        .reply(200, response);

      const result = await webflow.removeUser(parameters);
      scope.done();

      expect(result).toBeDefined();
    });
  });

  describe("Webhooks", () => {
    it("should respond with a list of webhooks", async () => {
      const { parameters, response } = apiData.endpoints.webhooks;
      const { siteId } = parameters;

      const scope = api.get(`/sites/${siteId}/webhooks`).reply(200, response);
      const webhooks = await webflow.webhooks(parameters);
      scope.done();

      expect(webhooks).toBeDefined();
      expect(webhooks.length).toBe(response.length);
      expect(webhooks[0]._id).toBe(response[0]._id);
    });

    it("should respond with a single webhook", async () => {
      const { parameters, response } = apiData.endpoints.webhook;
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
      const { parameters, response } = apiData.endpoints.webhook;
      const { siteId } = parameters;

      const scope = api.post(`/sites/${siteId}/webhooks`).reply(200, response);
      const webhook = await webflow.createWebhook({
        siteId,
        url: "https://example.com",
      });
      scope.done();

      expect(webhook).toBeDefined();
      expect(webhook._id).toBe(response._id);
    });

    it("should remove a webhook", async () => {
      const { parameters, response } = apiData.endpoints.webhook;
      const { siteId, webhookId } = parameters;

      const scope = api
        .delete(`/sites/${siteId}/webhooks/${webhookId}`)
        .reply(200, response);

      const result = await webflow.removeWebhook(parameters);
      scope.done();

      expect(result).toBeDefined();
    });
  });
});
