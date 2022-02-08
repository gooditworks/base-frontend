/* eslint-disable import/no-extraneous-dependencies */

import {PlaywrightTestConfig, devices} from "@playwright/test"

const isCI = !!process.env.CI

const config: PlaywrightTestConfig = {
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  reporter: isCI ? "github" : "list",
  testDir: "./tests",
  testMatch: /.*\.test\.ts/,
  use: {
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "on-first-retry"
  },
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !isCI
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: "chromium",
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: "firefox",
        ...devices["Desktop Firefox"]
      }
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: "webkit",
        ...devices["Desktop Safari"]
      }
    },
    {
      name: "Pixel 5",
      use: {
        browserName: "chromium",
        ...devices["Pixel 5"]
      }
    },
    {
      name: "iPhone 12",
      use: {
        browserName: "webkit",
        ...devices["iPhone 12"]
      }
    }
  ]
}

export default config
