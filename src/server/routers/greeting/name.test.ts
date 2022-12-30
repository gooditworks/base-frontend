import greetingRouter from "./index"

describe("greeting query works correctly", () => {
  const name = "Max"
  const expectedGreeting = "Hello, Max!"

  test("without name", async () => {
    const caller = greetingRouter.createCaller({})
    const response = await caller.greetName({})

    expect(response).toEqual({greeting: "Hello, Anonymous!"})
  })

  test("with name", async () => {
    const caller = greetingRouter.createCaller({})

    const response = await caller.greetName({name})
    expect(response).toEqual({
      greeting: expectedGreeting
    })
  })

  const ip = "1.1.1.1"

  test("with ip from context", async () => {
    const context = {requestIp: ip}
    const caller = greetingRouter.createCaller(context)

    const response = await caller.greetName({name})
    expect(response).toEqual({
      greeting: expectedGreeting,
      ip
    })
  })
})
