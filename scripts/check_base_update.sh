# Проверка обновления base

# если мы НЕ в CI (github actions, vercel)
if [ -z "$CI" ]; then
  git fetch base # получаем актуальный base

  if [ -z "$(git log HEAD..base/main --oneline)" ]; then
    echo "Repository updated to the latest base"
  else 
    echo "Repository is outdated from the base, commits:"
    git log HEAD..base/main --pretty='- %s'
    echo ""
    echo "Please merge these base updates: git merge base/main"
    exit 42
  fi
fi