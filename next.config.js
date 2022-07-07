const {withAxiom} = require('next-axiom');
const {withSentryConfig} = require("@gooditworks/monitoring/next")

module.exports = withSentryConfig(withAxiom({}))
