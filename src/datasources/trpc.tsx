"use client"

// based on https://github.com/trpc/next-13/blob/main/client/trpcClient.tsx
// TODO wait for complete Next 13 support in tRPC and migrate to @trpc/next-layout

import {FC, ReactNode, useState} from "react"
import {httpBatchLink} from "@trpc/client"
import {createTRPCReact} from "@trpc/react-query"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

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

const trpc = createTRPCReact<AppRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn()
        await opts.queryClient.invalidateQueries()
      }
    }
  }
})

type Props = {
  children: ReactNode
}

const TRPCClientProvider: FC<Props> = ({children}) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => {
    const baseUrl = getBaseUrl()
    const trpcUrl = `${baseUrl}/api/trpc`

    const links = [httpBatchLink({url: trpcUrl})]

    return trpc.createClient({
      links
    })
  })

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}

export default trpc
export {TRPCClientProvider}
