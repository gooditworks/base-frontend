const envVar = (name: string): string => {
  const value = process.env[name]

  if (!value) {
    throw new Error(`${name} environment variable is required`)
  }

  return value
}

const env = {
  sentryDsn: envVar("SENTRY_DSN"),
  logdnaKey: envVar("LOGDNA_KEY"),
  logdnaApp: envVar("LOGDNA_APP")
}

export default env
