import {CreateNextContextOptions} from "@trpc/server/adapters/next"

type Context = {
  requestIp?: string
}

const createContext = ({req}: CreateNextContextOptions): Context => {
  const requestIp = req.socket.remoteAddress

  return {
    requestIp
  }
}

export default createContext
export type {Context}
