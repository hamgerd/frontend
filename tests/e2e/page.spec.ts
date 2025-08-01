import { test } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
