import {router} from "server/trpc"

import greetName from "./name"

const greetingRouter = router({
  greetName
})

export default greetingRouter
