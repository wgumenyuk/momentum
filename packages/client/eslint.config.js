import globals from "globals";
import momentum from "@momentum/eslint-config";

export default [
  ...momentum,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      "@stylistic/jsx-tag-spacing": [
        "error",
        {
          "beforeSelfClosing": "never"
        }
      ]
    }
  }
];
