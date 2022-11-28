import {FC, ReactNode} from "react"

import {TRPCClientProvider} from "datasources/trpc"

import {roboto} from "styles/fonts"
import "styles/globals.css"

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = ({children}) => (
  <html lang="en" className={roboto.variable}>
    <head />
    <body>
      <TRPCClientProvider>{children}</TRPCClientProvider>
    </body>
  </html>
)

export default RootLayout
