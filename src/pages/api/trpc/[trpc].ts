import {withAxiom} from "next-axiom"
import * as trpcNext from "@trpc/server/adapters/next"

import appRouter from "server/routers"
import createContext from "server/context"

const trpcHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext
})

export default withAxiom(trpcHandler)
