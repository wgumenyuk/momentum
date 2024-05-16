import js from "@eslint/js";
import ts from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      // @ts-expect-error: Fragliche Typdefinitionen.
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/arrow-parens": [ "error", "always" ],
      "@stylistic/array-bracket-spacing": [ "error", "always" ],
      "@stylistic/comma-dangle": [ "error", "never" ],
      "@stylistic/indent": [ "error", 2 ],
      "@stylistic/keyword-spacing": [
        "error",
        {
          "overrides": {
            "catch": {
              "after": false
            },
            "for": {
              "after": false
            },
            "if": {
              "after": false
            },
            "while": {
              "after": false
            }
          }
        }
      ],
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/quotes": [ "error", "double" ]
    }
  }
);
