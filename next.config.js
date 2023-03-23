/* eslint-disable @typescript-eslint/no-var-requires */

const {withAxiom} = require("next-axiom")
const bundleAnalyzer = require("@next/bundle-analyzer")
const {withSentryConfig} = require("@sentry/nextjs")

const isDeploy = ["production", "preview"].includes(process.env.VERCEL_ENV)

const sentryWebpackPluginConfig = {
  silent: true
}

const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === "true"
}

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freecodecamp.org"
      }
    ]
  },
  sentry: {
    hideSourceMaps: true,
    disableServerWebpackPlugin: !isDeploy,
    disableClientWebpackPlugin: !isDeploy,
  }
}

const withBundleAnalyzer = bundleAnalyzer(bundleAnalyzerConfig)

module.exports = withSentryConfig(withBundleAnalyzer(withAxiom(config)), sentryWebpackPluginConfig)
