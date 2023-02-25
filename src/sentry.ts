import * as Sentry from "@sentry/node"
import "@sentry/tracing"

import env from "./env"

Sentry.init({
  dsn: env.sentryDsn,
  environment: env.sentryEnv,
  tracesSampleRate: 1.0
})
