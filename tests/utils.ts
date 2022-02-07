import {Page, expect} from "@playwright/test"

const snapshot = async (page: Page, url: string, filename: string) => {
  await page.goto(url)

  // wait for fonts loading
  await page.waitForNavigation({
    waitUntil: "networkidle"
  })

  const screenshot = await page.screenshot()
  expect(screenshot).toMatchSnapshot(filename)
}

export {snapshot}
