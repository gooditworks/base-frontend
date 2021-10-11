import {logger} from "@gooditworks/monitoring"
import {createInterface} from "readline"

import "./monitoring"

const greet = (name?: string): string => {
  if (!name) {
    throw new Error("Name not found")
  }

  if (name === "cat") {
    logger.warn("Cats can't use a keyboard")
  }

  return `Hello, ${name}`
}

if (require.main === module) {
  const reader = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question("What is your name?: ", answer => {
    try {
      const greeting = greet(answer)
      logger.info(greeting)
    } catch (error) {
      logger.captureException(error as Error)
    }

    reader.close()
  })
}

export default greet
