# Создаёт git remote на базовый репозиторий, если его (remote) ещё нет

BASE_REMOTE_URL=git@github.com:gooditworks/base-frontend.git

if [ -n "$CI" ]; then
  echo "We in CI/CD, skipping"
  exit 0
fi

if ! [ -x "$(command -v git)" ]; then
  echo "git command not found, skipping"
  exit 0
fi

if ! [ "$(git rev-parse --is-inside-work-tree 2>/dev/null)" ]; then
  echo "Not a git repository, skipping"
  exit 0
fi

if git config remote.base.url; then
  echo "Base remote already set, skipping"
  exit 0
fi

git remote add base $BASE_REMOTE_URL
echo "Base remote added"
