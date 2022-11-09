const Webflow = require("../dist");

// This is purposely a javascript file so that we can test the
// transpiled version of the code.

describe("Webflow", () => {
  it("should create a new instance of Webflow", () => {
    expect(() => new Webflow()).not.toThrowError();
  });

  it("should create a new instance of Webflow with options", () => {
    const options = { token: "token", host: "test.com" };
    const webflow = new Webflow(options);
    expect(webflow.options).toEqual(options);
  });

  it("should set the authorization token", () => {
    const webflow = new Webflow();
    webflow.token = "token";

    const header = webflow.client.defaults.headers["Authorization"];
    expect(header).toEqual(`Bearer token`);
  });
});
