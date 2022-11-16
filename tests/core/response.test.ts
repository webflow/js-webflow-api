import axios, { AxiosResponse } from "axios";
import { WebflowRecord, MetaResponse } from "../../src/core/response";

describe("Response", () => {
  const client = axios.create();
  const response: AxiosResponse = {
    status: 200,
    statusText: "OK",
    headers: {
      "x-ratelimit-limit": "100",
      "x-ratelimit-remaining": "99",
    },
    config: {},
    data: {},
  };

  it("should create a MetaResponse", () => {
    const meta = new MetaResponse(response);
    expect(meta.rateLimit.limit).toBe(100);
    expect(meta.rateLimit.remaining).toBe(99);
  });

  it("should create a WebflowRecord", () => {
    const record = new WebflowRecord(client, response, { id: "123" });

    // confirm client
    expect(record.client).toBe(client);

    // confirm response
    expect(record.response).toBe(response);

    // confirm meta records
    expect(record._meta.rateLimit.limit).toBe(100);
    expect(record._meta.rateLimit.remaining).toBe(99);
  });
});
