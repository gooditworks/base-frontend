const {withAxiom} = require('next-axiom');
const {withSentryConfig} = require("@gooditworks/monitoring/next")

const isDeploy = ["production", "preview"].includes(process.env.VERCEL_ENV)

const sentryConfig = {
  silent: true
}

/** @type {import('next').NextConfig} */
const config = {
  sentry: {
    disableServerWebpackPlugin: !isDeploy,
    disableClientWebpackPlugin: !isDeploy,
  },
  experimental: {
    appDir: true
  }
}

module.exports = withSentryConfig(withAxiom(config), sentryConfig)
