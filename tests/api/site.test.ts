import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { CollectionFixture, SiteFixture, WebhookFixture } from "../fixtures";
import { Site, Collection, Webhook } from "../../src/api";

describe("Sites", () => {
  const mock = new MockAdapter(axios);
  const client = axios.create();
  describe("Static Methods", () => {
    it("should respond with a list of sites", async () => {
      const { response } = SiteFixture.list;
      const path = "/sites";

      mock.onGet(path).reply(200, response);
      const { data } = await Site.list(client);

      expect(data).toBeDefined();
      expect(data.length).toBe(response.length);
      expect(data[0]).toMatchObject(response[0]);
    });

    it("should respond with a single site", async () => {
      const { parameters, response } = SiteFixture.getOne;
      const { siteId } = parameters;
      const path = `/sites/${siteId}`;

      mock.onGet(path).reply(200, response);
      const { data } = await Site.getOne(parameters, client);

      expect(data).toBeDefined();
      expect(data._id).toBe(siteId);
    });

    it("should respond with a list of domains", async () => {
      const { parameters, response } = SiteFixture.domains;
      const { siteId } = parameters;
      const path = `/sites/${siteId}/domains`;

      mock.onGet(path).reply(200, response);
      const { data } = await Site.domains(parameters, client);

      expect(data).toBeDefined();
      expect(data.length).toBe(response.length);
      expect(data[0]).toMatchObject(response[0]);
    });

    it("should publish a site", async () => {
      const { parameters, response } = SiteFixture.publish;
      const { siteId } = parameters;
      const path = `/sites/${siteId}/publish`;

      mock.onPost(path).reply(200, response);
      const { data } = await Site.publish(parameters, client);

      expect(data).toBeDefined();
      expect(data.queued).toBe(true);
    });
  });

  describe("Instance Methods", () => {
    const res = { data: {}, status: 200, statusText: "", headers: {}, config: {} };
    const site = new Site(client, res, SiteFixture.getOne.response);

    it("should respond with a list of collections", async () => {
      const { parameters, response } = CollectionFixture.list;
      const { siteId } = parameters;

      const path = `/sites/${siteId}/collections`;
      mock.onGet(path).reply(200, response);
      const spy = jest.spyOn(Collection, "list");

      const result = await site.collections();

      expect(spy).toHaveBeenCalledWith({ siteId }, client);

      expect(result).toBeDefined();
      expect(result.length).toBe(response.length);

      const [first] = result;
      expect(first._id).toBe(response[0]._id);

      // collection wrapper functions
      expect(typeof first.item).toBe("function");
      expect(typeof first.items).toBe("function");
      expect(typeof first.removeItem).toBe("function");
      expect(typeof first.createItem).toBe("function");
      expect(typeof first.updateItem).toBe("function");
    });

    it("should respond with a list of webhooks", async () => {
      const { parameters, response } = WebhookFixture.list;
      const { siteId } = parameters;

      const path = `/sites/${siteId}/webhooks`;
      mock.onGet(path).reply(200, response);
      const spy = jest.spyOn(Webhook, "list");

      const result = await site.webhooks();

      expect(spy).toHaveBeenCalledWith({ siteId }, client);

      expect(result).toBeDefined();
      expect(result.length).toBe(response.length);

      const [first] = result;
      expect(first._id).toBe(response[0]._id);

      // webhook wrapper functions
      expect(typeof first.remove).toBe("function");
    });

    it("should respond with a single webhook", async () => {
      const { parameters, response } = WebhookFixture.getOne;
      const { siteId, webhookId } = parameters;

      const path = `/sites/${siteId}/webhooks/${webhookId}`;
      mock.onGet(path).reply(200, response);
      const spy = jest.spyOn(Webhook, "getOne");

      const result = await site.webhook({ webhookId });

      expect(spy).toHaveBeenCalledWith({ siteId, webhookId }, client);

      expect(result).toBeDefined();
      expect(result._id).toBe(response._id);

      // webhook wrapper functions
      expect(typeof result.remove).toBe("function");
    });

    it("should create a webhook", async () => {
      const { parameters, response } = WebhookFixture.create;
      const { siteId } = parameters;

      const path = `/sites/${siteId}/webhooks`;
      const spy = jest.spyOn(Webhook, "create");
      mock.onPost(path).reply(200, response);

      const result = await site.createWebhook(parameters);

      expect(spy).toHaveBeenCalledWith(parameters, client);

      expect(result).toBeDefined();
      expect(result._id).toBe(response._id);

      // webhook wrapper functions
      expect(typeof result.remove).toBe("function");
    });

    it("should remove a webhook", async () => {
      const { parameters, response } = WebhookFixture.delete;
      const { siteId, webhookId } = parameters;

      const path = `/sites/${siteId}/webhooks/${webhookId}`;
      const spy = jest.spyOn(Webhook, "remove");
      mock.onDelete(path).reply(200, response);

      const result = await site.removeWebhook(parameters);

      expect(spy).toHaveBeenCalledWith(parameters, client);

      expect(result).toBeDefined();
      expect(result.deleted).toEqual(response.deleted);
    });

    it("should respond with a list of domains", async () => {
      const { parameters, response } = SiteFixture.domains;
      const { siteId } = parameters;

      const path = `/sites/${siteId}/domains`;
      const spy = jest.spyOn(Site, "domains");
      mock.onGet(path).reply(200, response);

      const result = await site.domains();

      expect(spy).toHaveBeenCalledWith(parameters, client);

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

      const result = await site.publishSite(domains);

      expect(spy).toHaveBeenCalledWith(parameters, client);

      expect(result).toBeDefined();
      expect(result.queued).toBe(true);
    });
  });
});
