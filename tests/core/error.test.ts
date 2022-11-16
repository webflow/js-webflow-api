import { ArgumentError, requireArgs } from "../../src/core/error";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("Error", () => {
  const mock = new MockAdapter(axios);

  it("should throw an ArgumentError", () => {
    expect(() => {
      throw new ArgumentError("name");
    }).toThrow("Argument 'name' is required but was not present");
  });

  it("should throw an ArgumentError for required args", () => {
    expect(() => {
      requireArgs({ name: undefined });
    }).toThrow("Argument 'name' is required but was not present");
  });
});
