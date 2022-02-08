import {test} from "@playwright/test"
import {snapshot} from "../utils"

test.describe("page snapshots", () => {
  // TODO: fix screenshots in Github Actions
  if (process.env.CI) test.skip()

  test("index", ({page}) => snapshot(page, "/", "index.png"))
})
