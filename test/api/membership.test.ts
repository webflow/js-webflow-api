import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { MembershipFixture } from "../fixtures/membership.fixture";
import * as Membership from "../../src/api/membership";
import { Client } from "../../src/core/client";

describe("Users", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of users", async () => {
    const { response, parameters, path } = MembershipFixture.list;
    mock.onGet(path).reply(200, response);

    const { data } = await Membership.list(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should respond with a single user", async () => {
    const { response, parameters, path } = MembershipFixture.get;
    mock.onGet(path).reply(200, response);

    const { data } = await Membership.getOne(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should invite a user", async () => {
    const { response, parameters, path, body } = MembershipFixture.invite;
    mock.onPost(path, body).reply(200, response);

    const { data } = await Membership.invite(client, {
      ...parameters,
      ...body,
    });
    expect(data).toMatchObject(response);
  });

  it("should update a user", async () => {
    const { response, parameters, path, body } = MembershipFixture.update;
    mock.onPatch(path, body).reply(200, response);

    const { data } = await Membership.update(client, {
      ...parameters,
      ...body,
    });
    expect(data).toMatchObject(response);
  });

  it("should remove a user", async () => {
    const { response, parameters, path } = MembershipFixture.delete;
    mock.onDelete(path).reply(200, response);

    const { data } = await Membership.remove(client, parameters);
    expect(data).toMatchObject(response);
  });

  it("should get access groups", async () => {
    const { response, parameters, path } = MembershipFixture.access_groups;
    mock.onGet(path).reply(200, response);

    const { data } = await Membership.accessGroups(client, parameters);
    expect(data).toMatchObject(response);
  });
});
