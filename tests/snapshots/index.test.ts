import {test} from "@playwright/test"
import {snapshot} from "../utils"

// force Playwright for same screenshot filenames on various platforms
test.beforeEach(({page}, testInfo) => {
  // eslint-disable-next-line no-param-reassign
  testInfo.snapshotSuffix = "multi_platform"
})

test("index page snapshot", ({page}) => snapshot(page, "/", "index.png"))
