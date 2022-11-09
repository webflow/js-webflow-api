import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Webflow } from "../src/webflow";
import { OAuthFixture } from "./api/oauth.fixture";
import { MetaFixture } from "./api/meta.fixture";
import { SiteFixture } from "./api/site.fixture";
import { ItemFixture } from "./api/item.fixture";
import { WebhooksFixture } from "./api/webhook.fixture";
import { CollectionFixture } from "./api/collection.fixture";
import { MembershipFixture } from "./api/membership.fixture";

describe("Webflow", () => {
  const options = { host: "test.com" };
  const webflow = new Webflow(options);
  const mock = new MockAdapter(axios);

  afterEach(() => {
    mock.reset();
  });

  describe("Instance", () => {
    it("should create a new instance of Webflow", () => {
      expect(() => new Webflow()).not.toThrowError();
    });

    it("should create a new instance of Webflow with options", () => {
      const options = { token: "token", host: "test.com" };
      const instance = new Webflow(options);
      expect(instance.options).toEqual(options);
    });
  });

  describe("Helpers", () => {
    it("should set the authorization token", () => {
      mock.onGet("/", "", { Authorization: "Bearer token" }).reply(200, {});
      const instance = new Webflow();
      instance.token = "token";
      instance.get("/");
    });
  });

  describe("HTTP Methods", () => {
    it("should call GET", async () => {
      mock.onGet("/?query=true").reply(200, {});
      await webflow.get("/", { query: true });
      expect(mock.history.get.length).toBe(1);
    });
    it("should call DELETE", async () => {
      mock.onDelete("/?query=true").reply(200, {});
      await webflow.delete("/", { query: true });
      expect(mock.history.delete.length).toBe(1);
    });
    it("should call POST", async () => {
      mock.onPost("/?query=true").reply(200, { body: true });
      await webflow.post("/", { body: true }, { query: true });
      expect(mock.history.post.length).toBe(1);
    });
    it("should call PUT", async () => {
      mock.onPut("/?query=true").reply(200, { body: true });
      await webflow.put("/", { body: true }, { query: true });
      expect(mock.history.put.length).toBe(1);
    });
    it("should call PATCH", async () => {
      mock.onPatch("/?query=true").reply(200, { body: true });
      await webflow.patch("/", { body: true }, { query: true });
      expect(mock.history.patch.length).toBe(1);
    });
  });

  describe("API Calls", () => {
    describe("OAuth", () => {
      it("should generate an authorization url", () => {
        const { parameters } = OAuthFixture.authorize;
        const { client_id, state, response_type } = parameters;

        const url = webflow.authorizeUrl({ client_id, state });
        const query = new URLSearchParams({ response_type, client_id, state });

        expect(url).toBeDefined();
        expect(url).toBe(
          `https://api.${options.host}/oauth/authorize?${query}`
        );
      });

      it("should generate an access token", async () => {
        const { parameters, response, path } = OAuthFixture.access_token;

        mock.onPost(path, parameters).reply(200, response);
        const result = await webflow.accessToken(parameters);

        expect(result).toBeDefined();
        expect(result.access_token).toBe(response.access_token);
      });

      it("should revoke an access token", async () => {
        const { parameters, response, path } = OAuthFixture.revoke_token;

        mock.onPost(path, parameters).reply(200, response);
        const result = await webflow.revokeToken(parameters);

        expect(result).toBeDefined();
        expect(result.didRevoke).toBe(true);
      });
    });

    describe("Meta", () => {
      it("should get info", async () => {
        const { response } = MetaFixture.info;
        const path = `/info`;

        mock.onGet(path).reply(200, response);
        const result = await webflow.info();

        expect(result).toBeDefined();
        expect(result.users).toEqual(response.users);
        expect(result.sites).toEqual(response.sites);
        expect(result.workspaces).toEqual(response.workspaces);
        expect(result.application).toEqual(response.application);
      });

      it("should get info about the user", async () => {
        const { response } = MetaFixture.installer;

        const path = `/user`;
        mock.onGet(path).reply(200, response);
        const result = await webflow.authenticatedUser();

        expect(result).toBeDefined();
        expect(result.user._id).toEqual(response.user._id);
        expect(result.user.email).toEqual(response.user.email);
        expect(result.user.firstName).toEqual(response.user.firstName);
        expect(result.user.lastName).toEqual(response.user.lastName);
      });
    });

    describe("Sites", () => {
      it("should respond with a list of sites", async () => {
        const { response } = SiteFixture.list;
        const path = "/sites";

        mock.onGet(path).reply(200, response);
        const sites = await webflow.sites();

        expect(sites).toBeDefined();
        expect(sites.length).toBe(response.length);
        expect(sites[0]).toMatchObject(response[0]);
      });

      it("should respond with a single site", async () => {
        const { parameters, response } = SiteFixture.get;
        const { siteId } = parameters;
        const path = `/sites/${siteId}`;

        mock.onGet(path).reply(200, response);
        const site = await webflow.site(parameters);

        expect(site).toBeDefined();
        expect(site._id).toBe(siteId);
      });

      it("should respond with a list of domains", async () => {
        const { parameters, response } = SiteFixture.domains;
        const { siteId } = parameters;
        const path = `/sites/${siteId}/domains`;

        mock.onGet(path).reply(200, response);
        const domains = await webflow.domains(parameters);

        expect(domains).toBeDefined();
        expect(domains.length).toBe(response.length);
        expect(domains[0]).toMatchObject(response[0]);
      });

      it("should publish a site", async () => {
        const { parameters, response } = SiteFixture.publish;
        const { siteId, domains } = parameters;
        const path = `/sites/${siteId}/publish`;

        mock.onPost(path, { domains }).reply(200, response);
        const result = await webflow.publishSite(parameters);

        expect(result).toBeDefined();
        expect(result.queued).toBe(true);
      });
    });

    describe("Collections", () => {
      it("should respond with a list of site collections", async () => {
        const { parameters, response } = CollectionFixture.list;
        const { siteId } = parameters;
        const path = `/sites/${siteId}/collections`;

        mock.onGet(path).reply(200, response);
        const collections = await webflow.collections(parameters);

        expect(collections).toBeDefined();
        expect(collections.length).toBe(response.length);
        expect(collections[0]).toMatchObject(response[0]);
      });

      it("should respond with a single site collection", async () => {
        const { parameters, response } = CollectionFixture.get;
        const { collectionId } = parameters;
        const path = `/collections/${collectionId}`;

        mock.onGet(path).reply(200, response);
        const collection = await webflow.collection(parameters);

        expect(collection).toBeDefined();
        expect(collection._id).toBe(response._id);
      });
    });

    describe("Items", () => {
      it("should respond with a list of items", async () => {
        const { parameters, response } = ItemFixture.list;
        const { collectionId } = parameters;
        const path = `/collections/${collectionId}/items`;

        mock.onGet(path).reply(200, response);
        const items = await webflow.items(parameters);

        expect(items).toBeDefined();
        expect(items.length).toBe(response.items.length);
        expect(items[0]).toMatchObject(response.items[0]);
      });

      it("should respond with a list of paginated items", async () => {
        const { parameters, response } = ItemFixture.list;
        const { collectionId } = parameters;

        const limit = 2;
        const offset = 2;
        const path = `/collections/${collectionId}/items`;

        mock.onGet(path, { params: { limit, offset } }).reply(200, response);
        const items = await webflow.items(parameters, { limit, offset });

        expect(items).toBeDefined();
        expect(items.length).toBe(response.items.length);
        expect(items[0]).toMatchObject(response.items[0]);
      });

      it("should respond with a single item", async () => {
        const { parameters, response } = ItemFixture.get;
        const { collectionId, itemId } = parameters;
        const path = `/collections/${collectionId}/items/${itemId}`;

        mock.onGet(path).reply(200, response);
        const item = await webflow.item(parameters);

        expect(item).toBeDefined();
        expect(item._id).toBe(response.items[0]._id);
      });

      it("should create an item", async () => {
        const { parameters, response } = ItemFixture.create;
        const { collectionId, fields } = parameters;

        const path = `/collections/${collectionId}/items`;

        mock.onPost(path, { fields }).reply(200, response);
        const item = await webflow.createItem(parameters);

        expect(item).toBeDefined();
        expect(item._id).toBe(response._id);
      });

      it("should update an item", async () => {
        const { parameters, response } = ItemFixture.update;
        const { collectionId, itemId } = parameters;
        const path = `/collections/${collectionId}/items/${itemId}`;

        mock.onPut(path).reply(200, response);
        const item = await webflow.updateItem(parameters);

        expect(item).toBeDefined();
        expect(item._id).toBe(response._id);
      });

      it("should patch an item", async () => {
        const { parameters, response } = ItemFixture.update;
        const { collectionId, itemId } = parameters;
        const path = `/collections/${collectionId}/items/${itemId}`;

        mock.onPatch(path).reply(200, response);
        const item = await webflow.patchItem(parameters);

        expect(item).toBeDefined();
        expect(item._id).toBe(response._id);
      });

      it("should remove an item", async () => {
        const { parameters, response } = ItemFixture.remove;
        const { collectionId, itemId } = parameters;
        const path = `/collections/${collectionId}/items/${itemId}`;

        mock.onDelete(path).reply(200, response);
        const item = await webflow.removeItem(parameters);

        expect(item).toBeDefined();
        expect(item.deleted).toBe(response.deleted);
      });

      it("should unpublish multiple items", async () => {
        const { parameters, response } = ItemFixture.unpublish;
        const { collectionId, itemIds } = parameters;
        const path = `/collections/${collectionId}/items`;

        mock.onDelete(path).reply(200, response);
        const result = await webflow.deleteItems(parameters);

        expect(result).toBeDefined();
        expect(result.deletedItemIds.length).toBe(itemIds.length);
        expect(result.deletedItemIds[0]).toBe(itemIds[0]);
      });

      it("should live unpublish multiple items", async () => {
        const { parameters, response } = ItemFixture.unpublish;
        const { collectionId, itemIds } = parameters;
        const path = `/collections/${collectionId}/items`;

        const { live } = parameters;
        mock.onDelete(path, { params: { live } }).reply(200, response);
        const result = await webflow.deleteItems(parameters);

        expect(result).toBeDefined();
        expect(result.deletedItemIds.length).toBe(itemIds.length);
        expect(result.deletedItemIds[0]).toBe(itemIds[0]);
      });

      it("should publish multiple items", async () => {
        const { parameters, response } = ItemFixture.publish;
        const { collectionId, itemIds } = parameters;

        const { live } = parameters;
        const path = `/collections/${collectionId}/items/publish`;

        mock.onPut(path, { itemIds }).reply(200, response);
        const result = await webflow.publishItems(parameters);
        expect(mock.history.put[0].params).toMatchObject({ live });

        expect(result).toBeDefined();
        expect(result.publishedItemIds.length).toBe(itemIds.length);
        expect(result.publishedItemIds[0]).toBe(itemIds[0]);
      });

      it("should live publish multiple items", async () => {
        const { parameters, response } = ItemFixture.publish;
        const { collectionId, itemIds } = parameters;

        const { live } = parameters;
        const path = `/collections/${collectionId}/items/publish`;

        mock.onPut(path, { itemIds }).reply(200, response);
        const result = await webflow.publishItems(parameters);
        expect(mock.history.put[0].params).toMatchObject({ live });

        expect(result).toBeDefined();
        expect(result.publishedItemIds.length).toBe(itemIds.length);
        expect(result.publishedItemIds[0]).toBe(itemIds[0]);
      });
    });

    describe("Memberships", () => {
      it("should respond with a list of users", async () => {
        const { response, parameters } = MembershipFixture.list;
        const { siteId } = parameters;
        const path = `/sites/${siteId}/users`;

        mock.onGet(path).reply(200, response);
        const users = await webflow.users(parameters);

        expect(users).toBeDefined();
        expect(users.length).toBe(response.users.length);
        expect(users[0]).toMatchObject(response.users[0]);
      });

      it("should respond with a single user", async () => {
        const { response, parameters } = MembershipFixture.get;
        const { siteId, userId } = parameters;
        const path = `/sites/${siteId}/users/${userId}`;

        mock.onGet(path).reply(200, response);
        const user = await webflow.user(parameters);

        expect(user).toBeDefined();
        expect(user._id).toBe(response._id);
      });

      it("should invite a user", async () => {
        const { response, parameters } = MembershipFixture.invite;
        const { siteId, email } = parameters;
        const path = `/sites/${siteId}/users/invite`;

        mock.onPost(path, { email }).reply(200, response);
        const user = await webflow.inviteUser(parameters);

        expect(user).toBeDefined();
        expect(user.data).toBeDefined();
        expect(user._id).toBe(response._id);
        expect(user.data).toMatchObject(response.data);
      });

      it("should update a user", async () => {
        const { response, parameters } = MembershipFixture.update;
        const { siteId, userId } = parameters;
        const path = `/sites/${siteId}/users/${userId}`;

        mock.onPatch(path).reply(200, response);
        const user = await webflow.updateUser(parameters);

        expect(user).toBeDefined();
        expect(user._id).toBe(response._id);
        expect(user.data).toBeDefined();
        expect(user.data).toMatchObject(response.data);
      });

      it("should remove a user", async () => {
        const { response, parameters } = MembershipFixture.delete;
        const { siteId, userId } = parameters;
        const path = `/sites/${siteId}/users/${userId}`;

        mock.onDelete(path).reply(200, response);
        const result = await webflow.removeUser(parameters);

        expect(result).toBeDefined();
        expect(result.deleted).toBe(response.deleted);
      });
    });

    describe("Webhooks", () => {
      it("should respond with a list of webhooks", async () => {
        const { parameters, response } = WebhooksFixture.list;
        const { siteId } = parameters;
        const path = `/sites/${siteId}/webhooks`;

        mock.onGet(path).reply(200, response);
        const webhooks = await webflow.webhooks(parameters);

        expect(webhooks).toBeDefined();
        expect(webhooks.length).toEqual(response.length);
        expect(webhooks[0]).toMatchObject(response[0]);
      });

      it("should respond with a single webhook", async () => {
        const { parameters, response } = WebhooksFixture.get;
        const { siteId, webhookId } = parameters;

        const path = `/sites/${siteId}/webhooks/${webhookId}`;
        mock.onGet(path).reply(200, response);
        const webhook = await webflow.webhook(parameters);

        expect(webhook).toBeDefined();
        expect(webhook._id).toBe(response._id);
      });

      it("should create a webhook", async () => {
        const { parameters, response } = WebhooksFixture.create;
        const { siteId, triggerType, url } = parameters;

        const path = `/sites/${siteId}/webhooks`;
        mock.onPost(path, { triggerType, url }).reply(200, response);
        const webhook = await webflow.createWebhook(parameters);

        expect(webhook).toBeDefined();
        expect(webhook._id).toBe(response._id);
      });

      it("should remove a webhook", async () => {
        const { parameters, response } = WebhooksFixture.delete;
        const { siteId, webhookId } = parameters;

        const path = `/sites/${siteId}/webhooks/${webhookId}`;
        mock.onDelete(path).reply(200, response);
        const result = await webflow.removeWebhook(parameters);

        expect(result).toBeDefined();
        expect(result.deleted).toEqual(response.deleted);
      });
    });
  });
});
