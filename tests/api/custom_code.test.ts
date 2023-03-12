import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { CustomCodeFixture } from "../fixtures";
import { CustomCode } from "../../src/api";

describe("CustomCode", () => {
  const mock = new MockAdapter(axios);
  const client = axios.create();

  describe("Static Methods", () => {
    it("should get custom code for a site", async () => {
      const { parameters, response } = CustomCodeFixture.get;
      const { siteId } = parameters;
      const path = `/sites/${siteId}/custom_code`;

      mock.onGet(path).reply(200, response);
      const { data } = await CustomCode.get(parameters, client);

      expect(data).toBeDefined();
      expect(data.code).toBe(response.code);
      expect(data.createdOn).toBe(response.createdOn);
      expect(data.lastUpdated).toBe(response.lastUpdated);
    });

    it("should write custom code on a site", async () => {
      const { parameters, response } = CustomCodeFixture.write;
      const { siteId, code } = parameters;
      const path = `/sites/${siteId}/custom_code`;

      mock.onPut(path).reply(200, response);
      const { data } = await CustomCode.write(parameters, client);

      expect(data).toBeDefined();
      expect(data.code).toBe(code);
      expect(data.createdOn).toBe(response.createdOn);
      expect(data.lastUpdated).toBe(response.lastUpdated);
    });

    it("should delete custom code on a site", async () => {
      const { parameters } = CustomCodeFixture.delete;
      const { siteId } = parameters;
      const path = `/sites/${siteId}/custom_code`;

      mock.onDelete(path).reply(204);
      const { status } = await CustomCode.delete(parameters, client);

      expect(status).toBe(204);
    });
  });
});
