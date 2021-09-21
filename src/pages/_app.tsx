import React from "react"
import {AppProps} from "next/app"

import "../monitoring"
import ErrorCapturer from "components/ErrorCapturer"

import "styles/globals.css"

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ErrorCapturer>
      <Component {...pageProps} />
    </ErrorCapturer>
  )
}

export default App
