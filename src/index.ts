import {createInterface} from "readline"

import "./monitoring"

const greet = (name?: string): string => {
  if (!name) {
    throw new Error("Name not found")
  }

  return `Hello, ${name}`
}

if (require.main === module) {
  const reader = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question("What is your name?: ", answer => {
    const greeting = greet(answer)

    reader.close()
  })
}

export default greet
