import { test, expect } from '@playwright/test'

test('privacy page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/ja/privacy')

    await page.getByText('本サイトアドレスは https://yoshihiro-shu.com です。')
  })