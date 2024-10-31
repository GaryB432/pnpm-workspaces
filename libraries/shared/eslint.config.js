import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import gb from "eslint-plugin-gb";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...gb.configs["flat/recommended"],
  {
    ignores: ["coverage/", "dist/"],
  },
];
