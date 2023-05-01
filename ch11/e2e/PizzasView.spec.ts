import { expect, test } from '@playwright/test';

test.describe('Pizzas View', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:5000/pizzas');
    });

    test('should display the page title', async ({ page }) => {
        const title = await page.locator('h1');
        expect(await title.textContent()).toBe('Pizzas');
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    test('should search for a pizza', async ({ page }) => {
        const searchInput = await page.locator('[data-testid="search-input"]');
        await searchInput.fill('Hawaiian');
        expect(await page.isVisible('[data-testid*="Hawaiian"]')).toBeTruthy();
      });
    
  });