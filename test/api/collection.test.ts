import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { CollectionFixture } from "./collection.fixture";
import * as Collection from "../../src/api/collection";
import { Client } from "../../src/core/client";

describe("Collections", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of site collections", async () => {
    const { parameters, response } = CollectionFixture.list;
    const { siteId } = parameters;
    const path = `/sites/${siteId}/collections`;

    mock.onGet(path).reply(200, response);
    const { data } = await Collection.list(client, parameters);

    expect(data).toBeDefined();
    expect(data.length).toBe(response.length);
    expect(data[0]).toMatchObject(response[0]);
  });

  it("should respond with a single site collection", async () => {
    const { parameters, response } = CollectionFixture.get;
    const { collectionId } = parameters;
    const path = `/collections/${collectionId}`;

    mock.onGet(path).reply(200, response);
    const { data } = await Collection.getOne(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
  });
});
