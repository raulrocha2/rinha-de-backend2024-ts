/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    "@/tests/(.+)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  transform: {
    "\\.ts$": "ts-jest",
  },
};

module.exports = config;
