import initMonitoring, {logger} from "@gooditworks/monitoring"
import {
  NextApiHandler as Handler,
  NextApiRequest as Request,
  NextApiResponse as Response
} from "next"

import env from "env"

initMonitoring({
  logger: {
    sentryDsn: env.sentryDsn,
    logdnaIngestionKey: env.logdnaKey,
    logdnaAppName: env.logdnaApp
  }
})

const withMonitoring = (handler: Handler) => async (req: Request, res: Response) => {
  try {
    await handler(req, res)
  } catch (error) {
    logger.captureException(error)

    throw error
  }
}

export default withMonitoring
