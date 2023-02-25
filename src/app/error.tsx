"use client"

import {FC, useEffect} from "react"

type Props = {
  error: Error
}

const ErrorPage: FC<Props> = ({error}) => {
  useEffect(() => {}, [error])

  return (
    <div className="p-8 w-screen h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold">Something went wrong!</h2>
      <p className="mt-8">
        We have already been notified of the problem and will resolve it shortly, please
        try again later.
      </p>
    </div>
  )
}

export default ErrorPage
