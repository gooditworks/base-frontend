import {test, expect} from "@playwright/test"

// Checking is counter works correctly
test("server started correctly", async ({page}) => {
  await page.goto("/")

  const counterInc = "data-test=counter_inc"
  const counterDec = "data-test=counter_dec"
  const counterValue = page.locator("data-test=counter_value")

  expect(counterValue).toHaveText("0")
  await page.click(counterInc)
  expect(counterValue).toHaveText("1")
  await page.click(counterInc)
  expect(counterValue).toHaveText("2")

  await page.click(counterDec)
  expect(counterValue).toHaveText("1")
  await page.click(counterDec)
  expect(counterValue).toHaveText("0")
})
