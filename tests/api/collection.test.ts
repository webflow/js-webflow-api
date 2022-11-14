import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { ItemFixture, CollectionFixture } from "../fixtures";
import { Collection, Item } from "../../src/api";

describe("Collection", () => {
  const mock = new MockAdapter(axios);
  const client = axios.create();

  describe("Static Methods", () => {
    it("should respond with a list of site collections", async () => {
      const { parameters, response } = CollectionFixture.list;
      const { siteId } = parameters;
      const path = `/sites/${siteId}/collections`;

      mock.onGet(path).reply(200, response);
      const { data } = await Collection.list(parameters, client);

      expect(data).toBeDefined();
      expect(data.length).toBe(response.length);
      expect(data[0]).toMatchObject(response[0]);
    });

    it("should respond with a single site collection", async () => {
      const { parameters, response } = CollectionFixture.getOne;
      const { collectionId } = parameters;
      const path = `/collections/${collectionId}`;

      mock.onGet(path).reply(200, response);
      const { data } = await Collection.getOne(parameters, client);

      expect(data).toBeDefined();
      expect(data._id).toBe(response._id);
    });
  });

  describe("Instance Methods", () => {
    const res = { data: {}, status: 200, statusText: "", headers: {}, config: {} };
    const collection = new Collection(client, res, CollectionFixture.getOne.response);

    it("should respond with a list of items", async () => {
      const { parameters, response } = ItemFixture.list;
      const { collectionId } = parameters;

      const path = `/collections/${collectionId}/items`;
      mock.onGet(path).reply(200, response);
      const spy = jest.spyOn(Item, "list");

      const result = await collection.items();

      const _params = { params: undefined, collectionId };
      expect(spy).toBeCalledWith(_params, client);

      expect(result).toBeDefined();
      expect(result.length).toBe(response.items.length);

      expect(result[0]._id).toBe(response.items[0]._id);

      // item wrapper functions
      expect(result[0].update).toBeDefined();
      expect(result[0].remove).toBeDefined();
    });

    it("should respond with a single item", async () => {
      const { parameters, response } = ItemFixture.getOne;
      const { collectionId, itemId } = parameters;

      const path = `/collections/${collectionId}/items/${itemId}`;
      mock.onGet(path).reply(200, response);
      const spy = jest.spyOn(Item, "getOne");

      const result = await collection.item({ itemId });

      const _params = { params: undefined, collectionId, itemId };
      expect(spy).toBeCalledWith(_params, client);

      expect(result).toBeDefined();
      expect(result._id).toBe(response.items[0]._id);

      // item wrapper functions
      expect(result.update).toBeDefined();
      expect(result.remove).toBeDefined();
    });

    it("should create an item", async () => {
      const { parameters, response } = ItemFixture.create;
      const { collectionId, fields } = parameters;

      const path = `/collections/${collectionId}/items`;
      mock.onPost(path).reply(200, response);
      const spy = jest.spyOn(Item, "create");

      const result = await collection.createItem(fields);

      const _params = { params: undefined, collectionId, fields };
      expect(spy).toBeCalledWith(_params, client);

      expect(result).toBeDefined();
      expect(result._id).toBe(response._id);

      // item wrapper functions
      expect(result.update).toBeDefined();
      expect(result.remove).toBeDefined();
    });

    it("should update an item", async () => {
      const { parameters, response } = ItemFixture.update;
      const { collectionId, itemId, fields } = parameters;

      const path = `/collections/${collectionId}/items/${itemId}`;
      mock.onPut(path).reply(200, response);
      const spy = jest.spyOn(Item, "update");

      const result = await collection.updateItem({
        itemId,
        fields,
      });

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

      const result = await collection.removeItem({ itemId });

      const _params = { params: undefined, collectionId, itemId };
      expect(spy).toBeCalledWith(_params, client);

      expect(result).toBeDefined();
      expect(result.deleted).toBe(response.deleted);
    });
  });
});
