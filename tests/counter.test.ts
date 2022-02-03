import {test, expect} from "@playwright/test"

import CounterPage from "./poms/counter"

// Checking is counter works correctly
test("counter works correctly", async ({page}) => {
  const pom = new CounterPage(page)
  await pom.goto()

  const assertValue = async (expected: string) => {
    expect(await pom.getValue()).toBe(expected)
  }

  await assertValue("0")

  await pom.increment()
  await assertValue("1")

  await pom.increment()
  await assertValue("2")

  await pom.decrement()
  await assertValue("1")

  await pom.decrement()
  await assertValue("0")
})
