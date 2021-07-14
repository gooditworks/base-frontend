# Создаёт git remote на базовый репозиторий, если его (remote) ещё нет

export BASE_REMOTE_URL=git@github.com:gooditcollective/base.git

# если мы НЕ в CI (github actions, vercel)
if [ -z "$CI" ]; then
  # создаёт remote, если его нет: https://stackoverflow.com/a/57936187
  git config remote.base.url >&- || git remote add base $BASE_REMOTE_URL
fi