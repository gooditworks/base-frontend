import dotenv from "dotenv"

dotenv.config()

const env = {
  sentryDsn: process.env.SENTRY_DSN,
  sentryEnv: process.env.SENTRY_ENV
}

export default env
