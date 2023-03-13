import {withAxiom} from "next-axiom"
import {AxiomApiHandler} from "next-axiom/dist/withAxiom"

const testHandler: AxiomApiHandler = async (request, response) => {
  request.log.info("test handler called", {
    ip: request.socket.remoteAddress
  })

  if (request.query.throw) {
    throw new Error("test error happen")
  }

  return response.status(200).json({success: true})
}

export default withAxiom(testHandler)
