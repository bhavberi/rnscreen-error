import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname, recommendedConfig: js.configs.recommended, allConfig: js.configs.all,
});

export default [{
  ignores: ["**/**.png", "**/**.svg", "**/**.jpeg", "**/**.jpg"],
}, ...compat.extends("prettier", "plugin:@typescript-eslint/recommended"), {
  plugins: {
    "simple-import-sort": simpleImportSort, "unused-imports": unusedImports, "@typescript-eslint": typescriptEslint,
  },

  languageOptions: {
    globals: {
      fetch: false,
    },

    ecmaVersion: "latest", sourceType: "module",

    parserOptions: {
      parser: "@typescript-eslint/parser",
      project: "./tsconfig.json",
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    },
  },

  rules: {
    "@typescript-eslint/naming-convention": ["error", {
      selector: "property", format: null,

      filter: {
        regex: "_*", match: false,
      },
    }],

    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-require-imports": ["error", {
      "allow": ["\\.(png|jpg|jpeg|gif|svg)$"],
    }],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error", {
      vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_",
    }],
  },
}];
