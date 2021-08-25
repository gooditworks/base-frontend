import greet from "./index"

describe("greet function", () => {
  test("works correctly", () => {
    const greeting = greet("max")

    expect(greeting).toBe("Hello, max")
  })
})
