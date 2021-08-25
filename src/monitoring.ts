import initMonitoring from "@gooditworks/monitoring"

import ConsoleTransport from "@gooditworks/monitoring/logger/transport/console"
import LogdnaNodeTransport from "@gooditworks/monitoring/logger/transport/logdnaNode"
import ConsoleCapturer from "@gooditworks/monitoring/logger/capturer/console"
import SentryNodeCapturer from "@gooditworks/monitoring/logger/capturer/sentryNode"

import env from "./env"

const loggerTransports = [new ConsoleTransport()]
if (env.logdnaKey) {
  const logdnaTransport = new LogdnaNodeTransport(env.logdnaKey, {app: env.logdnaApp})

  loggerTransports.push(logdnaTransport)
}

const exceptionCapturers = [new ConsoleCapturer()]
if (env.sentryDsn) {
  const sentryCapturer = new SentryNodeCapturer({dsn: env.sentryDsn})

  exceptionCapturers.push(sentryCapturer)
}

initMonitoring({
  logger: {
    loggerTransports,
    exceptionCapturers
  }
})
