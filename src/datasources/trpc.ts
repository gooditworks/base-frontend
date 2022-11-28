import {httpBatchLink} from "@trpc/client"
import {createTRPCNext} from "@trpc/next"

import type {AppRouter} from "server/routers"

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return ""
  }

  const vercelUrl = process.env.VERCEL_URL
  const port = process.env.PORT ?? 3000

  if (vercelUrl) {
    return `https://${vercelUrl}`
  }

  return `http://localhost:${port}`
}

const trpc = createTRPCNext<AppRouter>({
  ssr: true,
  config({ctx}) {
    const baseUrl = getBaseUrl()
    const trpcUrl = `${baseUrl}/api/trpc`
    const httpLink = httpBatchLink({url: trpcUrl})

    return {
      links: [httpLink]
    }
  }
})

export default trpc
