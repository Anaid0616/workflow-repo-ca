import { test, expect } from "@playwright/test";

test.describe("Navigation Tests", () => {
  test("Navigates to home page, clicks the first venue, and verifies details", async ({
    page,
  }) => {
    // Navigate to the home page
    await page.goto("/");

    // Wait for the venue list to load
    await page.waitForSelector(".venue-list");

    // Click on the first venue
    await page.locator(".venue-list .venue-item").first().click();

    // Verify that the venue details page loads
    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
