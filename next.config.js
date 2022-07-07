const {withAxiom} = require('next-axiom');
const {withSentryConfig} = require("@gooditworks/monitoring/next")

const isDeploy = ["production", "preview"].includes(process.env.VERCEL_ENV)

const config = {
  sentry: {
    disableServerWebpackPlugin: !isDeploy,
    disableClientWebpackPlugin: !isDeploy,
  }
}

module.exports = withSentryConfig(withAxiom(config))
