
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "vendor/**", "public/js/md5.js"]
  },
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": ["error", {
        "varsIgnorePattern": "^(doLogin|readCookie|doLogout|addColor|searchColor)$"
      }]
    }
  }
];
