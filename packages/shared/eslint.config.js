import momentum from "@momentum/eslint-config";

export default [
  ...momentum,
  {
    rules: {
      "@typescript-eslint/no-namespace": "off"
    }
  }
];
