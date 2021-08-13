import {NextApiRequest, NextApiResponse} from "next"
import {logger} from "@gooditworks/monitoring"

import withMonitoring from "middlewares/withMonitoring"

const greetingLogger = logger.module("api::greeting")

const greeting = (request: NextApiRequest, response: NextApiResponse) => {
  const {name} = request.query
  if (!name) {
    throw new Error("name not found")
  }

  response.send(`Greeting, ${name}`)
  greetingLogger.info(`greeting for "${name}" success`)
}

export default withMonitoring(greeting)
