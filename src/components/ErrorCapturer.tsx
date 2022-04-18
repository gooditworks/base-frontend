import {Component, ErrorInfo, ReactNode} from "react"
import {logger} from "@gooditworks/monitoring"

interface Props {
  children: ReactNode
}

class ErrorCapturer extends Component<Props> {
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
