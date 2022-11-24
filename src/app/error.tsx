"use client"

import {FC, useEffect} from "react"
import {logger} from "@gooditworks/monitoring"

type Props = {
  error: Error
}

const ErrorPage: FC<Props> = ({error}) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)

    logger.captureException(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorPage
