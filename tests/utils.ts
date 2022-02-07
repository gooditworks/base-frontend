import {Page, expect} from "@playwright/test"

const snapshot = async (page: Page, url: string, filename: string) => {
  await page.goto(url)

  const screenshot = await page.screenshot()
  expect(screenshot).toMatchSnapshot(filename)
}

export {snapshot}
