import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { WebhookFixture } from "../fixtures";
import { Webhook } from "../../src/api";

describe("Webhooks", () => {
  const mock = new MockAdapter(axios);
  const client = axios.create();

  describe("Static Methods", () => {
    it("should respond with a list of webhooks", async () => {
      const { parameters, response } = WebhookFixture.list;
      const { siteId } = parameters;
      const path = `/sites/${siteId}/webhooks`;

      mock.onGet(path).reply(200, response);
      const { data } = await Webhook.list(parameters, client);

      expect(data).toBeDefined();
      expect(data.length).toEqual(response.length);
      expect(data[0]).toEqual(response[0]);
    });

    it("should respond with a single webhook", async () => {
      const { parameters, response } = WebhookFixture.getOne;
      const { siteId, webhookId } = parameters;

      const path = `/sites/${siteId}/webhooks/${webhookId}`;
      mock.onGet(path).reply(200, response);
      const { data } = await Webhook.getOne(parameters, client);

      expect(data).toBeDefined();
      expect(data._id).toBe(response._id);
    });

    it("should create a webhook", async () => {
      const { parameters, response } = WebhookFixture.create;
      const { siteId } = parameters;

      const path = `/sites/${siteId}/webhooks`;
      mock.onPost(path).reply(200, response);
      const { data } = await Webhook.create(parameters, client);

      expect(data).toBeDefined();
      expect(data._id).toBe(response._id);
    });

    it("should remove a webhook", async () => {
      const { parameters, response } = WebhookFixture.delete;
      const { siteId, webhookId } = parameters;

      const path = `/sites/${siteId}/webhooks/${webhookId}`;
      mock.onDelete(path).reply(200, response);
      const { data } = await Webhook.remove(parameters, client);

      expect(data).toBeDefined();
      expect(data.deleted).toEqual(response.deleted);
    });
  });

  describe("Instance Methods", () => {
    const res = { data: {}, status: 200, statusText: "", headers: {}, config: {} };
    const webhook = new Webhook(client, res, WebhookFixture.getOne.response);

    it("should remove a webhook", async () => {
      const { parameters, response } = WebhookFixture.delete;
      const { siteId, webhookId } = parameters;

      const path = `/sites/${siteId}/webhooks/${webhookId}`;
      mock.onDelete(path).reply(200, response);
      const spy = jest.spyOn(Webhook, "remove");

      const result = await webhook.remove();

      const _params = { siteId, webhookId, params: undefined };
      expect(spy).toBeCalledWith(_params, client);

      expect(result).toBeDefined();
      expect(result.deleted).toBe(response.deleted);
    });
  });
});
