import momentum from "@momentum/eslint-config";

export default [
  ...momentum,
  {
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
