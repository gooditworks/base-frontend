import {CreateNextContextOptions} from "@trpc/server/adapters/next"
import {AxiomAPIRequest} from "next-axiom/dist/withAxiom"

type Context = {
  axiomLogger?: AxiomAPIRequest["log"]
  requestIp?: string
}

const createContext = ({req}: CreateNextContextOptions): Context => {
  const axiomRequest = req as AxiomAPIRequest
  const requestIp = req.socket.remoteAddress

  return {
    axiomLogger: axiomRequest.log,
    requestIp
  }
}

export default createContext
export type {Context}
