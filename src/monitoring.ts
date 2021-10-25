import initMonitoring from "@gooditworks/monitoring"

import ConsoleTransport from "@gooditworks/monitoring/logger/transport/console"
import ConsoleCapturer from "@gooditworks/monitoring/logger/capturer/console"
import SentryBrowserCapturer from "@gooditworks/monitoring/logger/capturer/sentryBrowser"

import env from "./env"

const loggerTransports = [new ConsoleTransport()]
const exceptionCapturers = [new ConsoleCapturer()]

if (env.sentryDsn && typeof window !== "undefined") {
  const sentryCapturer = new SentryBrowserCapturer({
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
