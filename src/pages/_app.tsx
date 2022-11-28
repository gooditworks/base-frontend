import {AppProps} from "next/app"

import trpc from "datasources/trpc"
import ErrorCapturer from "components/ErrorCapturer"

import "styles/globals.css"

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ErrorCapturer>
      <Component {...pageProps} />
    </ErrorCapturer>
  )
}

export {reportWebVitals} from "next-axiom"
export default trpc.withTRPC(App)
