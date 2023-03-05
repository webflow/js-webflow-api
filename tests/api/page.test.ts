import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { PageFixture } from "../fixtures";
import { Page } from "../../src/api";

describe("Page", () => {
  const mock = new MockAdapter(axios);
  const client = axios.create();

  describe("Static Methods", () => {
    it("should respond with a list of pages", async () => {
      const { parameters, response } = PageFixture.list;
      const { siteId } = parameters;
      const path = `/sites/${siteId}/pages`;

      mock.onGet(path).reply(200, response);
      const { data } = await Page.list(parameters, client);

      expect(data).toBeDefined();
      expect(data.pages.length).toBe(response.pages.length);
      expect(data.pages[0]).toMatchObject(response.pages[0]);
    });

    it("should respond with a single page", async () => {
      const { parameters, response } = PageFixture.getOne;
      const { pageId } = parameters;
      const path = `/pages/${pageId}`;

      mock.onGet(path).reply(200, response);
      const { data } = await Page.getOne(parameters, client);

      expect(data).toBeDefined();
      expect(data.id).toBe(pageId);
    });
  });
});
