import {test, expect} from "@playwright/test"

// Checking if the server has started (basic smoke test)
test("server started correctly", async ({page}) => {
  await page.goto("/")
  const counterValue = page.locator("data-test=counter_value")

  expect(counterValue).toHaveText("0")
})
