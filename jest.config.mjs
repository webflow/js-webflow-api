/** @type {import('jest').Config} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^(\.{1,2}/.*)\.js$": "$1",
    },
    setupFilesAfterEnv: ["<rootDir>/tests/mock-server/setup.ts"],
    testPathIgnorePatterns: [
        "/node_modules/",
        "tests/wire/workspaces/auditLogs.test.ts" // TODO: See why expected response is a subset of the actual response
    ],
};
