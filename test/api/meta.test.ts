import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Client } from "../../src/core/client";
import { MetaFixture } from "../fixtures/meta.fixture";
import * as Meta from "../../src/api/meta";

describe("Meta", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should get info", async () => {
    const { response, path } = MetaFixture.info;
    mock.onGet(path).reply(200, response);

    const { data } = await Meta.info(client);
    expect(data).toMatchObject(response);
  });

  it("should get info about the user", async () => {
    const { response, path } = MetaFixture.user;
    mock.onGet(path).reply(200, response);

    const { data } = await Meta.user(client);
    expect(data).toMatchObject(response);
  });
});
