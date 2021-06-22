import sum from "./index"

describe("sum function", () => {
  test("works correctly", () => {
    const result = sum(40, 2)

    expect(result).toBe(42)
  })
})
