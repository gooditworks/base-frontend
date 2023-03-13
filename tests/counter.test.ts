import {test, expect} from "@playwright/test"

import CounterPage from "./poms/counter"

// Checking is counter works correctly
test.describe("counter works correctly", () => {
  const assertValue = async (pom: CounterPage, expected: string) => {
    expect(await pom.getValue()).toBe(expected)
  }

  test("increment works correctly", async ({page}) => {
    const pom = new CounterPage(page)
    await pom.goto()

    await assertValue(pom, "0")
    await pom?.increment()
    await assertValue(pom, "1")
  })

  test("decrement works correctly", async ({page}) => {
    const pom = new CounterPage(page)
    await pom.goto()

    await assertValue(pom, "0")
    await pom?.decrement()
    await assertValue(pom, "-1")
  })
})
