import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { ItemFixture } from "./item.fixture";
import { Client } from "../../src/core/client";
import * as Item from "../../src/api/item";

describe("Items", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of items", async () => {
    const { parameters, response } = ItemFixture.list;
    const { collectionId } = parameters;
    const path = `/collections/${collectionId}/items`;

    mock.onGet(path).reply(200, response);
    const { data } = await Item.list(client, parameters);

    expect(data).toBeDefined();
    expect(data.items.length).toBe(response.items.length);
    expect(data.items[0]).toMatchObject(response.items[0]);
  });

  it("should respond with a single item", async () => {
    const { parameters, response } = ItemFixture.get;
    const { collectionId, itemId } = parameters;
    const path = `/collections/${collectionId}/items/${itemId}`;

    mock.onGet(path).reply(200, response);
    const { data } = await Item.getOne(client, parameters);

    expect(data).toBeDefined();
    expect(data.items[0]._id).toBe(response.items[0]._id);
  });

  it("should create an item", async () => {
    const { parameters, response } = ItemFixture.create;
    const { collectionId } = parameters;

    const path = `/collections/${collectionId}/items`;

    mock.onPost(path).reply(200, response);
    const { data } = await Item.create(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
  });

  it("should update an item", async () => {
    const { parameters, response } = ItemFixture.update;
    const { collectionId, itemId } = parameters;
    const path = `/collections/${collectionId}/items/${itemId}`;

    mock.onPut(path).reply(200, response);
    const { data } = await Item.update(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
  });

  it("should patch an item", async () => {
    const { parameters, response } = ItemFixture.update;
    const { collectionId, itemId } = parameters;
    const path = `/collections/${collectionId}/items/${itemId}`;

    mock.onPatch(path).reply(200, response);
    const { data } = await Item.patch(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
  });

  it("should remove an item", async () => {
    const { parameters, response } = ItemFixture.remove;
    const { collectionId, itemId } = parameters;
    const path = `/collections/${collectionId}/items/${itemId}`;

    mock.onDelete(path).reply(200, response);
    const { data } = await Item.remove(client, parameters);

    expect(data).toBeDefined();
    expect(data.deleted).toBe(response.deleted);
  });

  it("should unpublish multiple items", async () => {
    const { parameters, response } = ItemFixture.unpublish;
    const { collectionId, itemIds } = parameters;
    const path = `/collections/${collectionId}/items`;

    mock.onDelete(path).reply(200, response);
    const { data } = await Item.unpublish(client, parameters);

    expect(data).toBeDefined();
    expect(data.deletedItemIds.length).toBe(itemIds.length);
    expect(data.deletedItemIds[0]).toBe(itemIds[0]);
  });

  it("should live unpublish multiple items", async () => {
    const { parameters, response } = ItemFixture.unpublish;
    const { collectionId, itemIds } = parameters;
    const path = `/collections/${collectionId}/items?live=true`;

    mock.onDelete(path).reply(200, response);
    const { data } = await Item.unpublish(client, {
      live: true,
      ...parameters,
    });

    expect(data).toBeDefined();
    expect(data.deletedItemIds.length).toBe(itemIds.length);
    expect(data.deletedItemIds[0]).toBe(itemIds[0]);
  });

  it("should publish multiple items", async () => {
    const { parameters, response } = ItemFixture.publish;
    const { collectionId, itemIds } = parameters;
    const path = `/collections/${collectionId}/items/publish`;

    mock.onPut(path).reply(200, response);
    const { data } = await Item.publish(client, parameters);

    expect(data).toBeDefined();
    expect(data.publishedItemIds.length).toBe(itemIds.length);
    expect(data.publishedItemIds[0]).toBe(itemIds[0]);
  });

  it("should live publish multiple items", async () => {
    const { parameters, response } = ItemFixture.publish;
    const { collectionId, itemIds } = parameters;
    const path = `/collections/${collectionId}/items/publish?live=true`;

    mock.onPut(path).reply(200, response);
    const { data } = await Item.publish(client, { live: true, ...parameters });

    expect(data).toBeDefined();
    expect(data.publishedItemIds.length).toBe(itemIds.length);
    expect(data.publishedItemIds[0]).toBe(itemIds[0]);
  });
});
