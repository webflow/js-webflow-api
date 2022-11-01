import { describe, expect, it, beforeEach } from "@jest/globals";
import nock from "nock";
import { UsersFixture } from "./Users.fixture";
import Webflow from "../src";

describe("Users", () => {
  let webflow;
  let api;

  beforeEach(() => {
    api = nock("https://api.webflow.com");
    webflow = new Webflow({ token: "token" });
  });

  describe("Users", () => {
    it("should respond with a list of users", async () => {
      const { response, parameters } = UsersFixture.users;
      const { siteId } = parameters;

      const scope = api.get(`/sites/${siteId}/users`).reply(200, response);

      const { users } = await webflow.users(parameters);
      scope.done();

      expect(users).toBeDefined();
      expect(users.length).toBe(response.users.length);
      expect(users[0]._id).toBe(response.users[0]._id);
    });

    it("should respond with a single user", async () => {
      const { response, parameters } = UsersFixture.user;
      const { siteId, userId } = parameters;

      const scope = api
        .get(`/sites/${siteId}/users/${userId}`)
        .reply(200, response);
      const user = await webflow.user(parameters);
      scope.done();

      expect(user).toBeDefined();
      expect(user._id).toBe(response._id);
    });

    it("should invite a user", async () => {
      const { response, parameters } = UsersFixture.invite_user;
      const { siteId } = parameters;

      const scope = api
        .post(`/sites/${siteId}/users/invite`)
        .reply(200, response);
      const user = await webflow.inviteUser(parameters);

      scope.done();
      expect(user).toBeDefined();
      expect(user._id).toBe(response._id);
      expect(user.data).toBeDefined();
      expect(user.data.email).toBe(response.data.email);
    });

    it("should update a user", async () => {
      const { response, parameters } = UsersFixture.user;
      const { siteId, userId } = parameters;

      const scope = api
        .patch(`/sites/${siteId}/users/${userId}`, response)
        .reply(200, response);
      const user = await webflow.updateUser({ ...parameters, ...response });

      scope.done();
      expect(user).toBeDefined();
      expect(user._id).toBe(response._id);
      expect(user.data).toBeDefined();
      expect(user.data.email).toBe(response.data.email);
    });

    it("should remove a user", async () => {
      const { response, parameters } = UsersFixture.user;
      const { siteId, userId } = parameters;

      const scope = api
        .delete(`/sites/${siteId}/users/${userId}`)
        .reply(200, response);

      const result = await webflow.removeUser(parameters);
      scope.done();

      expect(result).toBeDefined();
    });

    describe("User Response Wrapper", () => {
      let user;

      beforeEach(async () => {
        const { response, parameters } = UsersFixture.user;
        const { siteId, userId } = parameters;

        const scope = api
          .get(`/sites/${siteId}/users/${userId}`)
          .reply(200, response);
        user = await webflow.user(parameters);
        scope.done();
      });

      it("should update a user", async () => {
        const { response, parameters } = UsersFixture.user;
        const { siteId, userId } = parameters;

        const scope = api
          .patch(`/sites/${siteId}/users/${userId}`, response)
          .reply(200, response);
        const updatedUser = await user.update(response);

        scope.done();
        expect(updatedUser).toBeDefined();
        expect(updatedUser._id).toBe(response._id);
        expect(updatedUser.data).toBeDefined();
        expect(updatedUser.data.email).toBe(response.data.email);
      });

      it("should remove a user", async () => {
        const { response, parameters } = UsersFixture.user;
        const { siteId, userId } = parameters;

        const scope = api
          .delete(`/sites/${siteId}/users/${userId}`)
          .reply(200, response);

        const result = await user.remove();
        scope.done();

        expect(result).toBeDefined();
      });
    });
  });
});
