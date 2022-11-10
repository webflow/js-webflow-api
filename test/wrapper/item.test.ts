import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Item } from "../../src/api";
import { ItemWrapper, MetaResponse } from "../../src/wrapper";
import { ItemFixture } from "../fixtures/item.fixture";
import { Client } from "../../src/core";

describe("Item Wrapper", () => {
  let _response: MetaResponse<any>;
  const mock = new MockAdapter(axios);
  const client = new Client();
  const item = new ItemWrapper(client, ItemFixture.get.response.items[0]);

  afterEach(() => {
    const { _meta } = _response;
    expect(_meta).toBeDefined();
    expect(_meta.rateLimit).toBeDefined();
    expect(_meta.rateLimit.limit).toBeDefined();
    expect(_meta.rateLimit.remaining).toBeDefined();
  });

  it("should update an item and wrap it", async () => {
    const { parameters, response, body, path } = ItemFixture.update;
    const { collectionId, itemId } = parameters;
    const { fields } = body;

    mock.onPut(path, body).reply(200, response);
    const spy = jest.spyOn(Item, "update");

    const result = (_response = await item.update(fields));

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

    const result = (_response = await item.remove());

    expect(spy).toBeCalledWith(client, {
      params: undefined,
      collectionId,
      itemId,
    });

    expect(result).toBeDefined();
    expect(result.deleted).toBe(response.deleted);
  });
});
