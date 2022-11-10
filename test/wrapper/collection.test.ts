import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { CollectionWrapper, MetaResponse } from "../../src/wrapper";
import { CollectionFixture } from "../fixtures/collection.fixture";
import { ItemFixture } from "../fixtures/item.fixture";
import { Client } from "../../src/core";
import { Item } from "../../src/api";

describe("Collection Wrapper", () => {
  let _response: MetaResponse<any>;
  const mock = new MockAdapter(axios);
  const client = new Client();

  const collection = new CollectionWrapper(
    client,
    CollectionFixture.get.response
  );

  afterEach(() => {
    const { _meta } = _response;
    expect(_meta).toBeDefined();
    expect(_meta.rateLimit).toBeDefined();
    expect(_meta.rateLimit.limit).toBeDefined();
    expect(_meta.rateLimit.remaining).toBeDefined();
  });

  it("should respond with a list of wrapped items", async () => {
    const { parameters, response, path } = ItemFixture.list;
    const { collectionId } = parameters;

    mock.onGet(path).reply(200, response);
    const spy = jest.spyOn(Item, "list");

    const result = (_response = await collection.items());

    expect(spy).toBeCalledWith(client, {
      params: undefined,
      collectionId,
    });

    expect(result).toBeDefined();
    expect(result.length).toBe(response.items.length);
    expect(result[0]._id).toBe(response.items[0]._id);

    // item wrapper functions
    expect(result[0].update).toBeDefined();
    expect(result[0].remove).toBeDefined();
  });

  it("should respond with a single wrapped item", async () => {
    const { parameters, response, path } = ItemFixture.get;
    const { collectionId, itemId } = parameters;

    mock.onGet(path).reply(200, response);
    const spy = jest.spyOn(Item, "getOne");

    const result = (_response = await collection.item({ itemId }));

    expect(spy).toBeCalledWith(client, {
      params: undefined,
      collectionId,
      itemId,
    });

    expect(result).toBeDefined();
    expect(result._id).toBe(response.items[0]._id);

    // item wrapper functions
    expect(result.update).toBeDefined();
    expect(result.remove).toBeDefined();
  });

  it("should create an item and wrap it", async () => {
    const { parameters, response, body, path } = ItemFixture.create;
    const { collectionId } = parameters;
    const { fields } = body;

    mock.onPost(path, body).reply(200, response);
    const spy = jest.spyOn(Item, "create");

    const result = (_response = await collection.createItem(fields));

    expect(spy).toBeCalledWith(client, {
      params: undefined,
      collectionId,
      fields,
    });

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);

    // item wrapper functions
    expect(result.update).toBeDefined();
    expect(result.remove).toBeDefined();
  });

  it("should update an item and wrap it", async () => {
    const { parameters, response, body, path } = ItemFixture.update;
    const { collectionId, itemId } = parameters;
    const { fields } = body;

    mock.onPut(path, body).reply(200, response);
    const spy = jest.spyOn(Item, "update");

    const result = (_response = await collection.updateItem({
      itemId,
      fields,
    }));

    expect(spy).toBeCalledWith(client, {
      params: undefined,
      collectionId,
      itemId,
      fields,
    });

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);

    // item wrapper functions
    expect(result.update).toBeDefined();
    expect(result.remove).toBeDefined();
  });

  it("should remove an item", async () => {
    const { parameters, response, path } = ItemFixture.remove;
    const { collectionId, itemId } = parameters;

    mock.onDelete(path).reply(200, response);
    const spy = jest.spyOn(Item, "remove");

    const result = (_response = await collection.removeItem({ itemId }));

    expect(spy).toBeCalledWith(client, {
      params: undefined,
      collectionId,
      itemId,
    });

    expect(result).toBeDefined();
    expect(result.deleted).toBe(response.deleted);
  });
});
