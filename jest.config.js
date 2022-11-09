/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // A map from regular expressions to paths to transformers
  transform: { "^.+\\.ts?$": "ts-jest" },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
};
