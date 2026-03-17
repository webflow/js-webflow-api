/** @type {import('jest').Config} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    projects: [
        {
            displayName: "unit",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\\.{1,2}/.*)\\.js$": "$1",
            },
            roots: ["<rootDir>/tests"],
            testPathIgnorePatterns: ["/tests/wire/"],
            setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
        },
        {
            displayName: "wire",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\\.{1,2}/.*)\\.js$": "$1",
            },
            transform: {
                "^.+\\.[jt]sx?$": ["ts-jest", { tsconfig: { allowJs: true } }],
            },
            transformIgnorePatterns: ["/node_modules/(?!(until-async|msw|@mswjs)/)"],
            roots: ["<rootDir>/tests/wire"],
            setupFilesAfterEnv: ["<rootDir>/tests/mock-server/setup.ts"],
        },
    ],
    workerThreads: false,
    passWithNoTests: true,
};