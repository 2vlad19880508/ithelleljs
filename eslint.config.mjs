import globals from "globals";
import pluginJs from "@eslint/js";
import pkg from 'eslint-plugin-react';
const { rules } = pkg;



/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{*.js}"]},
  {languageOptions: { globals: globals.browser }},
  {rules: {
              // Enforce 2-space indentation for better readability
  }}
];