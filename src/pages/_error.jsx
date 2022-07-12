// https://github.com/vercel/next.js/blob/canary/examples/with-sentry/pages/_error.js

import NextErrorComponent from "next/error"

// eslint-disable-next-line import/no-unresolved
import Sentry from "@gooditworks/monitoring/next"

const MyError = ({statusCode, hasGetInitialPropsRun, err}) => {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err)
  }

  return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async ({res, err}) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err
  })

  errorInitialProps.hasGetInitialPropsRun = true

  if (err) {
    Sentry.captureException(err)
    await Sentry.flush(2000)

    return errorInitialProps
  }

  return errorInitialProps
}

export default MyError
