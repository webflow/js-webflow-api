import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, expect, it } from "@jest/globals";
import { MembershipFixture } from "./membership.fixture";
import * as Membership from "../../src/api/membership";
import { Client } from "../../src/core/client";

describe("Users", () => {
  const mock = new MockAdapter(axios);
  const client = new Client();

  it("should respond with a list of users", async () => {
    const { response, parameters } = MembershipFixture.list;
    const { siteId } = parameters;
    const path = `/sites/${siteId}/users`;

    mock.onGet(path).reply(200, response);
    const { data } = await Membership.list(client, parameters);

    expect(data).toBeDefined();
    expect(data.users.length).toBe(response.users.length);
    expect(data.users[0]).toMatchObject(response.users[0]);
  });

  it("should respond with a single user", async () => {
    const { response, parameters } = MembershipFixture.get;
    const { siteId, userId } = parameters;
    const path = `/sites/${siteId}/users/${userId}`;

    mock.onGet(path).reply(200, response);
    const { data } = await Membership.getOne(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
  });

  it("should invite a user", async () => {
    const { response, parameters } = MembershipFixture.invite;
    const { siteId } = parameters;
    const path = `/sites/${siteId}/users/invite`;

    mock.onPost(path).reply(200, response);
    const { data } = await Membership.invite(client, parameters);

    expect(data).toBeDefined();
    expect(data.data).toBeDefined();
    expect(data._id).toBe(response._id);
    expect(data.data).toMatchObject(response.data);
  });

  it("should update a user", async () => {
    const { response, parameters } = MembershipFixture.update;
    const { siteId, userId } = parameters;
    const path = `/sites/${siteId}/users/${userId}`;

    mock.onPatch(path).reply(200, response);
    const { data } = await Membership.update(client, parameters);

    expect(data).toBeDefined();
    expect(data._id).toBe(response._id);
    expect(data.data).toBeDefined();
    expect(data.data).toMatchObject(response.data);
  });

  it("should remove a user", async () => {
    const { response, parameters } = MembershipFixture.delete;
    const { siteId, userId } = parameters;
    const path = `/sites/${siteId}/users/${userId}`;

    mock.onDelete(path).reply(200, response);
    const { data } = await Membership.remove(client, parameters);

    expect(data).toBeDefined();
    expect(data.deleted).toBe(response.deleted);
  });
});
