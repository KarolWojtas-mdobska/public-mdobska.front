import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "build/**/*",
      "node_modules/**/*",
      "app/components/ui/**/*",
      ".react-router/**/*",
    ],
  },
  {     
    files: ["**/*.{js,ts,tsx}"],         
    plugins: { 
      js
     }, 
     extends: ["js/recommended"], 
     languageOptions: { 
      globals: globals.browser
     },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginReactHooks.configs.flat.recommended
]);
