  module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.ts"],
    roots: ["<rootDir>/src"],
    collectCoverage: true,
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest", // The important part right here
    },
  }  