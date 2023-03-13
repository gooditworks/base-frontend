import {router} from "../trpc"

import greeting from "./greeting"

const appRouter = router({greeting})

type AppRouter = typeof appRouter

export default appRouter
export type {AppRouter}
