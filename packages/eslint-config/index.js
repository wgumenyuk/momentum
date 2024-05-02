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
      "@stylistic/comma-dangle": [ "error", "never" ],
      "@stylistic/semi": [ "error", "always" ],
      "@stylistic/quotes": [ "error", "double" ]
    }
  }
);
