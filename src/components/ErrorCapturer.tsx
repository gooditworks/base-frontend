import {Component, ErrorInfo} from "react"
import {logger} from "@gooditworks/monitoring"

class ErrorCapturer extends Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidCatch(error: Error, info: ErrorInfo) {
    logger.captureException(error, {info})
  }

  render() {
    const {children} = this.props

    return children
  }
}

export default ErrorCapturer
