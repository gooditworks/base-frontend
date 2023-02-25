/* eslint-disable no-console */
import * as Sentry from "@sentry/node"
import {createInterface} from "readline"

import "./sentry"

const greet = (name?: string): string => {
  if (!name) {
    throw new Error("Name not found")
  }

  if (name === "cat") {
    Sentry.captureMessage("warn: cats can't use a keyboard")
  }

  return `Hello, ${name}`
}

const main = async () => {
  const reader = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question("What is your name?: ", answer => {
    try {
      const greeting = greet(answer)

      console.log(greeting)
    } catch (error) {
      console.error(error)
      Sentry.captureException(error)
    }

    reader.close()
  })

  await Sentry.flush(2500)
}

if (require.main === module) {
  main()
}

export default greet
