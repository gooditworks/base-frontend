import dotenv from "dotenv"

dotenv.config()

const env = {
  sentryDsn: process.env.SENTRY_DSN,
  sentryEnv: process.env.SENTRY_ENV,
  logdnaKey: process.env.LOGDNA_KEY,
  logdnaApp: process.env.LOGDNA_APP
}

export default env
