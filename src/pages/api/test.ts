import {NextApiHandler} from "next"
import {withSentry} from "@gooditworks/monitoring/next"

const testHandler: NextApiHandler = (request, response) => {
  if (request.query.throw) {
    throw new Error("test error happen")
  }

  return response.status(200).json({success: true})
}

export default withSentry(testHandler)
