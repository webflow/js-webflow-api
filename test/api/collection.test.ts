import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { CollectionFixture } from "../fixtures/collection.fixture";
import * as Collection from "../../src/api/collection";
import { Client } from "../../src/core/client";

describe("Collections", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of site collections", async () => {
    const { parameters, response, path } = CollectionFixture.list;
    mock.onGet(path).reply(200, response);

    const { data } = await Collection.list(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should respond with a single site collection", async () => {
    const { parameters, response, path } = CollectionFixture.get;
    mock.onGet(path).reply(200, response);

    const { data } = await Collection.getOne(client, parameters);
    expect(data).toMatchObject(response);
  });
});
