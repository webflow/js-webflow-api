import { Client, DEFAULT_HOST, RequestError } from "../../src/core";
import { ClientFixture } from "../core/client.fixture";
import { describe, expect, it } from "@jest/globals";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Client", () => {
  const mock = new MockAdapter(axios);

  describe("Authorization", () => {
    const token = "1234567890";

    it("should set the authorization header with a token", async () => {
      const client = new Client({ token });
      expect(client.defaults.headers["Authorization"]).toBe(`Bearer ${token}`);
    });

    it("should clear the authorization header", async () => {
      const client = new Client({ token });
      expect(client.defaults.headers["Authorization"]).toBe(`Bearer ${token}`);

      client.clearToken();
      expect(client.defaults.headers["Authorization"]).toBeUndefined();
    });

    it("should support setting the token after initialization", async () => {
      const client = new Client();
      client.token = token;
      expect(client.defaults.headers["Authorization"]).toBe(`Bearer ${token}`);
    });

    it("it shouldn't set the authorization if token is undefined", () => {
      const client = new Client();
      const headers = client.defaults.headers;
      expect(headers["Authorization"]).toBeUndefined();
    });
  });

  describe("Uris", () => {
    it("should get the correct default uri", async () => {
      const url = "/test/123";
      const client = new Client();
      const uri = client.getUri({ url });
      expect(uri).toBe(`https://api.${DEFAULT_HOST}${url}`);
    });

    it("should get the correct uri with custom host", async () => {
      const host = "test.com";
      const url = "/test/123";
      const client = new Client({ host });
      const uri = client.getUri({ url });
      expect(uri).toBe(`https://api.${host}${url}`);
    });
  });

  describe("Headers", () => {
    it("should set the verion header with a version", async () => {
      const version = "1.0";
      const client = new Client({ version });
      expect(client.defaults.headers["Accept-Version"]).toBe(version);
    });

    it("should set custom headers", async () => {
      const headers = { "X-Test": "test" };
      const client = new Client({ headers });
      expect(client.defaults.headers["X-Test"]).toBe("test");
    });

    it("should get override default headers with custom headers", async () => {
      const version = "1.0";
      const headers = { Authorization: "auth", "Accept-Version": "version" };

      const client = new Client({ version, headers });
      const resHeaders = client.defaults.headers;
      expect(resHeaders["Authorization"]).toBe(headers["Authorization"]);
      expect(resHeaders["Accept-Version"]).toBe(headers["Accept-Version"]);
    });
  });

  it("should throw a RequestError on Webflow errors", async () => {
    const { response } = ClientFixture.error;
    mock.onGet("/").reply(200, response);

    try {
      const client = new Client();
      await client.get("/");
      throw new Error("Should have thrown an error");
    } catch (error) {
      expect(error).toBeInstanceOf(RequestError);
      expect(error.err).toBe(response.err);
      expect(error.msg).toBe(response.msg);
      expect(error.code).toBe(response.code);
      expect(error.name).toBe(response.name);
    }
  });
});
