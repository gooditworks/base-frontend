import {NextApiHandler} from "next"
import {Sentry, withSentry} from "@gooditworks/monitoring/next"

const testHandler: NextApiHandler = (request, response) => {
  if (request.query.throw) {
    Sentry.captureException(new Error(`triggered test exception: ${request.query.throw}`))
  }

  return response.status(200).json({success: true})
}

export default withSentry(testHandler)
