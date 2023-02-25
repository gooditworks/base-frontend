/* eslint-disable @typescript-eslint/no-var-requires */

const {withAxiom} = require("next-axiom")
const withBundleAnalyzer = require("@next/bundle-analyzer")

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
  }
}

module.exports = withBundleAnalyzer(bundleAnalyzerConfig)(withAxiom(config))
