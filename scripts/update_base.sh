set -e

# updates RenovateBot config, adding base dependencies to ignore
function update_renovate_config {
  # read package.json from base
  BASE_PACKAGE_JSON=$(git show base/main:package.json)

  # get dependencies/devDependencies from there
  BASE_DEPENDENCIES=$(echo $BASE_PACKAGE_JSON | jq -r -M "[.dependencies | keys[]] + [.devDependencies | keys[]]")

  # put them into .ignoreDeps Renovate config
  UDPATED_RENOVATE_FILE=$(cat renovate.json | jq -r --argjson deps "$BASE_DEPENDENCIES" ". + {ignoreDeps: \$deps}" )

  echo "$UDPATED_RENOVATE_FILE" >| renovate.json
  npx prettier -w renovate.json
}

function update_renovate {
  # get actual base
  git fetch base

  # check repo status, exit if it dirty
  if [[ $(git diff --stat) != '' ]]; then
    echo "error: repository is dirty, commit your changes before updating base"
    exit 42
  fi

  update_renovate_config

  # commit renovate.json changes (if any)
  git add renovate.json
  git commit --no-verify -m "chore: update ignored deps in RenovateBot" || true
}

function main {
  update_renovate

  git merge base/main
}

# start main function by default
if [ -z "$@" ]; then
  main
else
  "$@"
fi
