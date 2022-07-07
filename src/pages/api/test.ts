import {NextApiHandler} from "next"
import {withSentry} from "@gooditworks/monitoring/next"
import {Sentry} from "@gooditworks/monitoring/logger/capturer/sentryNext"

const testHandler: NextApiHandler = (request, response) => {
  if (request.query.throw) {
    Sentry.captureException(new Error(`triggered test exception: ${request.query.throw}`))
  }

  return response.status(200).json({success: true})
}

export default withSentry(testHandler)
