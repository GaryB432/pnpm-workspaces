import { createDefaultEsmPreset } from "ts-jest";

const defaultEsmPreset = createDefaultEsmPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...defaultEsmPreset,
  coverageProvider: "v8",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" },
  testMatch: ["**/*.spec.ts"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  transform: { "^.+.tsx?$": ["ts-jest", { useESM: true }] },
  transformIgnorePatterns: ["\\\\node_modules\\\\"],
};

export default config;
