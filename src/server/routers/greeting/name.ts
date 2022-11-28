import {z} from "zod"

import {procedure} from "server/trpc"

const greetNameHandler = procedure
  .input(
    z.object({
      name: z.string().optional()
    })
  )
  .query(({ctx, input}) => {
    const name = input.name || "Anonymous"
    const greeting = `Hello, ${name}!`

    return {
      greeting,
      ip: ctx.requestIp
    }
  })

export default greetNameHandler
