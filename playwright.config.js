import { defineConfig } from "@playwright/test";
require("dotenv").config();

export default defineConfig({
  testDir: "tests/e2e",
  webServer: {
    command: "npm run start",
    url: "http://localhost:5500",
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:5500",
  },
  fullyParallel: false,
});