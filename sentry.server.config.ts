import initMonitoring from "@gooditworks/monitoring"

import ConsoleTransport from "@gooditworks/monitoring/logger/transport/console"
import ConsoleCapturer from "@gooditworks/monitoring/logger/capturer/console"
import SentryNextCapturer from "@gooditworks/monitoring/logger/capturer/sentryNext"
import LogdnaTransport from "@gooditworks/monitoring/logger/transport/logdnaNode"

import env from "./src/env"

const loggerTransports = [new ConsoleTransport()]
const exceptionCapturers = [new ConsoleCapturer()]

if (env.sentryDsn) {
  const sentryCapturer = new SentryNextCapturer({
    dsn: env.sentryDsn,
    environment: env.sentryEnv
  })

  exceptionCapturers.push(sentryCapturer)
}

if (env.logdnaKey) {
  const logdnaTransport = new LogdnaTransport(env.logdnaKey, {app: env.logdnaApp})

  loggerTransports.push(logdnaTransport)
}

initMonitoring({
  logger: {
    loggerTransports,
    exceptionCapturers
  }
})
