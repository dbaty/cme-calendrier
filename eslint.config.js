import js from "@eslint/js";
import htmlPlugin from "eslint-plugin-html";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["*.html"],
    plugins: { html: htmlPlugin },
    languageOptions: {
      sourceType: "script" ,
      globals: { ...globals.browser },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];
