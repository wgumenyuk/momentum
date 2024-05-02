/**
  @type {import("@commitlint/types").UserConfig}
*/
export default {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "docs",
        "feat",
        "merge",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
};
