import { test, expect } from '@playwright/test'

test('should navigate to the profile page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/ja')
  // Find an element with the text 'プロフィール' and click on it
  await page.getByText('プロフィール').click()
  // The new URL should be "/profile" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/ja/profile')
})