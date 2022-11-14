import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { ItemFixture } from "../fixtures";
import { Item } from "../../src/api";

describe("Items", () => {
  const mock = new MockAdapter(axios);
  const client = axios.create();

  describe("Static Methods", () => {
    it("should respond with a list of items", async () => {
      const { parameters, response } = ItemFixture.list;
      const { collectionId } = parameters;
      const path = `/collections/${collectionId}/items`;

      mock.onGet(path).reply(200, response);
      const { data } = await Item.list(parameters, client);

      expect(data).toBeDefined();
      expect(data.items.length).toBe(response.items.length);
      expect(data.items[0]).toMatchObject(response.items[0]);
    });

    it("should respond with a single item", async () => {
      const { parameters, response } = ItemFixture.getOne;
      const { collectionId, itemId } = parameters;
      const path = `/collections/${collectionId}/items/${itemId}`;

      mock.onGet(path).reply(200, response);
      const { data } = await Item.getOne(parameters, client);

      expect(data).toBeDefined();
      expect(data.items[0]._id).toBe(response.items[0]._id);
    });

    it("should create an item", async () => {
      const { parameters, response } = ItemFixture.create;
      const { collectionId } = parameters;

      const path = `/collections/${collectionId}/items`;

      mock.onPost(path).reply(200, response);
      const { data } = await Item.create(parameters, client);

      expect(data).toBeDefined();
      expect(data._id).toBe(response._id);
    });

    it("should update an item", async () => {
      const { parameters, response } = ItemFixture.update;
      const { collectionId, itemId } = parameters;
      const path = `/collections/${collectionId}/items/${itemId}`;

      mock.onPut(path).reply(200, response);
      const { data } = await Item.update(parameters, client);

      expect(data).toBeDefined();
      expect(data._id).toBe(response._id);
    });

    it("should patch an item", async () => {
      const { parameters, response } = ItemFixture.update;
      const { collectionId, itemId } = parameters;
      const path = `/collections/${collectionId}/items/${itemId}`;

      mock.onPatch(path).reply(200, response);
      const { data } = await Item.patch(parameters, client);

      expect(data).toBeDefined();
      expect(data._id).toBe(response._id);
    });

    it("should remove an item", async () => {
      const { parameters, response } = ItemFixture.remove;
      const { collectionId, itemId } = parameters;
      const path = `/collections/${collectionId}/items/${itemId}`;

      mock.onDelete(path).reply(200, response);
      const { data } = await Item.remove(parameters, client);

      expect(data).toBeDefined();
      expect(data.deleted).toBe(response.deleted);
    });

    it("should unpublish multiple items", async () => {
      const { parameters, response } = ItemFixture.unpublish;
      const { collectionId, itemIds } = parameters;
      const path = `/collections/${collectionId}/items`;

      mock.onDelete(path).reply(200, response);
      const { data } = await Item.unpublish(parameters, client);

      expect(data).toBeDefined();
      expect(data.deletedItemIds.length).toBe(itemIds.length);
      expect(data.deletedItemIds[0]).toBe(itemIds[0]);
    });

    it("should live unpublish multiple items", async () => {
      const { parameters, response } = ItemFixture.unpublish;
      const { collectionId, itemIds } = parameters;
      const path = `/collections/${collectionId}/items?live=true`;

      mock.onDelete(path).reply(200, response);
      const { data } = await Item.unpublish(parameters, client);

      expect(data).toBeDefined();
      expect(data.deletedItemIds.length).toBe(itemIds.length);
      expect(data.deletedItemIds[0]).toBe(itemIds[0]);
    });

    it("should publish multiple items", async () => {
      const { parameters, response } = ItemFixture.publish;
      const { collectionId, itemIds } = parameters;
      const path = `/collections/${collectionId}/items/publish`;

      mock.onPut(path).reply(200, response);
      const { data } = await Item.publish(parameters, client);

      expect(data).toBeDefined();
      expect(data.publishedItemIds.length).toBe(itemIds.length);
      expect(data.publishedItemIds[0]).toBe(itemIds[0]);
    });

    it("should live publish multiple items", async () => {
      const { parameters, response } = ItemFixture.publish;
      const { collectionId, itemIds } = parameters;
      const path = `/collections/${collectionId}/items/publish?live=true`;

      mock.onPut(path).reply(200, response);
      const { data } = await Item.publish(parameters, client);

      expect(data).toBeDefined();
      expect(data.publishedItemIds.length).toBe(itemIds.length);
      expect(data.publishedItemIds[0]).toBe(itemIds[0]);
    });
  });

  describe("Instance Methods", () => {
    const res = { data: {}, status: 200, statusText: "", headers: {}, config: {} };
    const item = new Item(client, res, ItemFixture.getOne.response.items[0]);

    it("should update an item", async () => {
      const { parameters, response } = ItemFixture.update;
      const { collectionId, itemId, fields } = parameters;

      const path = `/collections/${collectionId}/items/${itemId}`;
      mock.onPut(path).reply(200, response);
      const spy = jest.spyOn(Item, "update");

      const result = await item.update(fields);

      const _params = { params: undefined, collectionId, itemId, fields };
      expect(spy).toBeCalledWith(_params, client);

      expect(result).toBeDefined();
      expect(result._id).toBe(response._id);

      // item wrapper functions
      expect(result.update).toBeDefined();
      expect(result.remove).toBeDefined();
    });

    it("should remove an item", async () => {
      const { parameters, response } = ItemFixture.remove;
      const { collectionId, itemId } = parameters;

      const path = `/collections/${collectionId}/items/${itemId}`;
      mock.onDelete(path).reply(200, response);
      const spy = jest.spyOn(Item, "remove");

      const result = await item.remove();

      const _params = { params: undefined, collectionId, itemId };
      expect(spy).toBeCalledWith(_params, client);

      expect(result).toBeDefined();
      expect(result.deleted).toBe(response.deleted);
    });
  });
});
