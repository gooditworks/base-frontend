// https://stackoverflow.com/a/40503617
const isCyrillic = input => /[\u0400-\u04FF]+/.test(input)

const cyrillicRule = commit => {
  if (!commit.subject) {
    return [false, "Нет заголовка коммита"]
  }

  if (!isCyrillic(commit.subject)) {
    return [false, "Заголовок коммита должен быть на русском языке"]
  }

  return [true]
}

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["commitlint-plugin-function-rules"],
  rules: {
    "subject-empty": [0],
    "function-rules/subject-empty": [2, "always", cyrillicRule],
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "revert", "chore", "WIP"]]
  }
}
