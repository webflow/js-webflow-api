const { describe, expect, it } = require("@jest/globals");
const Webflow = require("../dist");

describe("Build", () => {
  it("should create a new instance of Webflow", () => {
    expect(() => new Webflow()).not.toThrowError();
  });
});
