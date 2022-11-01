import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { ItemsFixture } from "./Items.fixture";
import Webflow from "../src";

describe("Items", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  it("should respond with a list of items", async () => {
    const { parameters, response } = ItemsFixture.items;
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
    const { parameters, response } = ItemsFixture.item;
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
    const { parameters, response } = ItemsFixture.item;
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
    const { parameters, response } = ItemsFixture.item;
    const { collectionId, itemId } = parameters;

    const scope = api
      .put(`/collections/${collectionId}/items/${itemId}`, response)
      .reply(200, response);

    const item = await webflow.updateItem({ ...parameters, ...response });
    scope.done();

    expect(item).toBeDefined();
    expect(item._id).toBe(response._id);
  });

  it("should patch an item", async () => {
    const { parameters, response } = ItemsFixture.item;
    const { collectionId, itemId } = parameters;

    const scope = api
      .patch(`/collections/${collectionId}/items/${itemId}`, response)
      .reply(200, response);

    const item = await webflow.patchItem({ ...parameters, ...response });
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

    const result = await webflow.removeItem(parameters);
    scope.done();

    expect(result).toBeDefined();
    expect(result.deleted).toBe(response.deleted);
  });

  it("should remove multiple items", async () => {
    const { parameters, response } = ItemsFixture.remove_items;
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
    const { parameters, response } = ItemsFixture.remove_items;
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
    const { parameters, response } = ItemsFixture.publish_items;
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
    const { parameters, response } = ItemsFixture.publish_items;
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

  describe("Item Response Wrapper", () => {
    let item;

    beforeEach(async () => {
      const { parameters, response } = ItemsFixture.item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .get(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      item = await webflow.item(parameters);
      scope.done();
    });

    it("should update an item", async () => {
      const { parameters, response } = ItemsFixture.item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .put(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const updatedItem = await item.update(parameters);
      scope.done();

      expect(updatedItem).toBeDefined();
      expect(updatedItem._id).toBe(response._id);
    });

    it("should remove an item", async () => {
      const { parameters, response } = ItemsFixture.remove_item;
      const { collectionId, itemId } = parameters;

      const scope = api
        .delete(`/collections/${collectionId}/items/${itemId}`)
        .reply(200, response);

      const result = await item.remove();
      scope.done();

      expect(result).toBeDefined();
      expect(result.deleted).toBe(response.deleted);
    });
  });
});
