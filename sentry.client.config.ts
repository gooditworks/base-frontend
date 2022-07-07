import initMonitoring from "@gooditworks/monitoring"

import ConsoleTransport from "@gooditworks/monitoring/logger/transport/console"
import ConsoleCapturer from "@gooditworks/monitoring/logger/capturer/console"
import SentryNextCapturer from "@gooditworks/monitoring/logger/capturer/sentryNext"

import env from "./src/env"

const loggerTransports = [new ConsoleTransport()]
const exceptionCapturers = [new ConsoleCapturer()]

if (env.sentryDsn && typeof window !== "undefined") {
  const sentryCapturer = new SentryNextCapturer({
    dsn: env.sentryDsn,
    environment: env.sentryEnv
  })

  exceptionCapturers.push(sentryCapturer)
}

initMonitoring({
  logger: {
    loggerTransports,
    exceptionCapturers
  }
})
