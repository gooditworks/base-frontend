module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "refactor", "revert", "chore", "wip"]]
  }
}
