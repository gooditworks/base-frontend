/* eslint-disable import/no-extraneous-dependencies */

import {PlaywrightTestConfig} from "@playwright/test"

const isCI = !!process.env.CI

const config: PlaywrightTestConfig = {
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  testDir: "./tests",
  testMatch: /.*\.test\.ts/,
  use: {
    trace: "retain-on-failure",
    video: "on-first-retry"
  },
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !isCI
  }
}

export default config
