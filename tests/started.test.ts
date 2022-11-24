import {test, expect} from "@playwright/test"

// Checking if the server has started (basic smoke test)
test("server started correctly", async ({page}) => {
  await page.goto("/")
  const headerValue = page.locator("h2")

  expect(headerValue).toContainText("TODO")
})
