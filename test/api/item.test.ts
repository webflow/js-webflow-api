import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { ItemFixture } from "../fixtures/item.fixture";
import { Client } from "../../src/core/client";
import * as Item from "../../src/api/item";

describe("Items", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  afterEach(() => {
    mock.reset();
  });

  it("should respond with a list of items", async () => {
    const { parameters, response, path } = ItemFixture.list;
    mock.onGet(path).reply(200, response);

    const { data } = await Item.list(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should respond with a single item", async () => {
    const { parameters, response, path } = ItemFixture.get;
    mock.onGet(path).reply(200, response);

    const { data } = await Item.getOne(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should create an item", async () => {
    const { parameters, response, path, body } = ItemFixture.create;
    mock.onPost(path, body).reply(200, response);

    const { data } = await Item.create(client, { ...parameters, ...body });
    expect(data).toMatchObject(response);
  });

  it("should update an item", async () => {
    const { parameters, response, path, body } = ItemFixture.update;
    mock.onPut(path, body).reply(200, response);

    const { data } = await Item.update(client, { ...parameters, ...body });
    expect(data).toMatchObject(response);
  });

  it("should patch an item", async () => {
    const { parameters, response, path, body } = ItemFixture.update;
    mock.onPatch(path, body).reply(200, response);

    const { data } = await Item.patch(client, { ...parameters, ...body });
    expect(data).toMatchObject(response);
  });

  it("should remove an item", async () => {
    const { parameters, response, path } = ItemFixture.remove;
    mock.onDelete(path).reply(200, response);

    const { data } = await Item.remove(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should unpublish multiple items", async () => {
    const { parameters, response, path, body } = ItemFixture.unpublish;
    mock.onDelete(path, body).reply(200, response);

    const { data } = await Item.unpublish(client, { ...parameters, ...body });
    expect(data).toMatchObject(response);
  });

  it("should live publish multiple items", async () => {
    const { parameters, response, path, body } = ItemFixture.publish;
    mock.onPut(path, body).reply(200, response);

    const { data } = await Item.publish(client, {
      ...parameters,
      live: true,
      ...body,
    });

    expect(mock.history.put[0].params).toMatchObject({ live: true });
    expect(data).toMatchObject(response);
  });

  it("should unpublish multiple items", async () => {
    const { parameters, response, path, body } = ItemFixture.unpublish;
    mock.onDelete(path).reply(200, response);

    const { data } = await Item.unpublish(client, { ...parameters, ...body });
    expect(data).toMatchObject(response);
  });

  it("should live unpublish multiple items", async () => {
    const { parameters, response, path, body } = ItemFixture.unpublish;
    mock.onDelete(path, body).reply(200, response);

    const { data } = await Item.unpublish(client, {
      ...parameters,
      live: true,
      ...body,
    });

    expect(mock.history.delete[0].params).toMatchObject({ live: true });
    expect(data).toMatchObject(response);
  });
});
