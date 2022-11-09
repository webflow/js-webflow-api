import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { MembershipWrapper, MetaResponse } from "../../src/wrapper";
import { MembershipFixture } from "../api/membership.fixture";
import { Membership } from "../../src/api";
import { Client } from "../../src/core";

describe("Membership Wrapper", () => {
  let _response: MetaResponse<any>;
  const mock = new MockAdapter(axios);
  const client = new Client();

  afterEach(() => {
    const { _meta } = _response;
    expect(_meta).toBeDefined();
    expect(_meta.rateLimit).toBeDefined();
    expect(_meta.rateLimit.limit).toBeDefined();
    expect(_meta.rateLimit.remaining).toBeDefined();
  });

  it("should update a user and wrap it", async () => {
    const { response, parameters } = MembershipFixture.update;
    const { siteId, userId, data } = parameters;
    const user = new MembershipWrapper(client, siteId, response);

    const path = `/sites/${siteId}/users/${userId}`;
    mock.onPatch(path).reply(200, response);
    const spy = jest.spyOn(Membership, "update");

    const result = (_response = await user.update(data));

    expect(spy).toHaveBeenCalledWith(client, {
      data,
      siteId,
      userId,
    });

    expect(result).toBeDefined();
    expect(result._id).toBe(response._id);

    expect(result.data).toBeDefined();
    expect(result.data.email).toBe(response.data.email);

    // user wrapper functions
    expect(result.update).toBeDefined();
    expect(result.remove).toBeDefined();
  });

  it("should remove a user", async () => {
    const { response, parameters } = MembershipFixture.delete;
    const { siteId, userId } = parameters;

    const userToDelete = MembershipFixture.get.response;
    const user = new MembershipWrapper(client, siteId, userToDelete);

    const path = `/sites/${siteId}/users/${userId}`;
    mock.onDelete(path).reply(200, response);
    const spy = jest.spyOn(Membership, "remove");

    const result = (_response = await user.remove());

    expect(spy).toHaveBeenCalledWith(client, { siteId, userId });

    expect(result).toBeDefined();
  });
});
