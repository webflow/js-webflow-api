import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { Webflow, WebflowArgumentError } from "../src/Webflow";
import { CollectionsFixture } from "./Collections.fixture";
import { ItemsFixture } from "./Items.fixture";

describe("Collections", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  it("should respond with a list of site collections", async () => {
    const { parameters, response } = CollectionsFixture.collections;
    const { siteId } = parameters;

    const scope = api.get(`/sites/${siteId}/collections`).reply(200, response);
    const collections = await webflow.collections(parameters);
    scope.done();

    expect(collections).toBeDefined();
    expect(collections.length).toBe(response.length);
    expect(collections[0]._id).toBe(response[0]._id);
  });

  it("should throw an error when getting collections without an id", () => {
    expect(webflow.collections({})).rejects.toBeInstanceOf(
      WebflowArgumentError
    );
  });

  it("should respond with a single site collection", async () => {
    const { parameters, response } = CollectionsFixture.collection;
    const { collectionId } = parameters;

    const scope = api.get(`/collections/${collectionId}`).reply(200, response);
    const collection = await webflow.collection(parameters);
    scope.done();

    expect(collection).toBeDefined();
    expect(collection._id).toBe(response._id);
  });

  it("should throw an error when getting a collection without ids", () => {
    expect(webflow.collection({})).rejects.toBeInstanceOf(WebflowArgumentError);
  });

  describe("Collection Response Wrapper", () => {
    let collection;

    beforeEach(async () => {
      const { parameters, response } = CollectionsFixture.collection;
      const { collectionId } = parameters;

      const scope = api
        .get(`/collections/${collectionId}`)
        .reply(200, response);
      collection = await webflow.collection(parameters);
      scope.done();
    });

    it("should respond with a list of items", async () => {
      const { parameters, response } = ItemsFixture.items;
      const { collectionId } = parameters;

      const scope = api
        .get(`/collections/${collectionId}/items`)
        .reply(200, response);
      const { items } = await collection.items();
      scope.done();

      expect(items).toBeDefined();
      expect(items.length).toBe(response.items.length);
      expect(items[0]._id).toBe(response.items[0]._id);
    });

    it("should respond with a single item", async () => {
      const { parameters, response } = ItemsFixture.item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .get(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const item = await collection.item({ itemId });
      scope.done();

      expect(item).toBeDefined();
      expect(item._id).toBe(response.items[0]._id);
    });

    it("should create an item", async () => {
      const { parameters, response } = ItemsFixture.item;
      const { collectionId } = parameters;

      const scope = api
        .post(`/collections/${collectionId}/items`, response)
        .reply(200, response);
      const item = await collection.createItem(response);
      scope.done();

      expect(item).toBeDefined();
      expect(item._id).toBe(response._id);
    });

    it("should update an item", async () => {
      const { parameters, response } = ItemsFixture.item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .put(`/collections/${collectionId}/items/${itemId}`, response)
        .reply(200, response);

      const item = await collection.updateItem({ itemId, ...response });
      scope.done();

      expect(item).toBeDefined();
      expect(item._id).toBe(response._id);
    });

    it("should remove an item", async () => {
      const { parameters, response } = ItemsFixture.remove_item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .delete(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const result = await collection.removeItem({ itemId });
      scope.done();

      expect(result).toBeDefined();
      expect(result.deleted).toBe(response.deleted);
    });
  });
});
