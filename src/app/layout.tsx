import {FC, ReactNode} from "react"

import {TRPCClientProvider} from "datasources/trpc"

import "styles/globals.css"

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = ({children}) => (
  <TRPCClientProvider>{children}</TRPCClientProvider>
)

export default RootLayout
