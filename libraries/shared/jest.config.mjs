/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import { createDefaultEsmPreset } from "ts-jest";

const defaultEsmPreset = createDefaultEsmPreset()

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...defaultEsmPreset,
  extensionsToTreatAsEsm: ['.ts'],

  coverageProvider: "v8",

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },

  testMatch: ["**/*.spec.ts"],

  testPathIgnorePatterns: ["\\\\node_modules\\\\"],

  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },

  transformIgnorePatterns: [
    "\\\\node_modules\\\\",
  ]
};

export default config;
