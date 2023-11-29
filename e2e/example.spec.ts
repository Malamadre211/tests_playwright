import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('http://localhost:5173/');
  const countButton = await page.getByRole('button', { name: 'count is' });

const countValue = await countButton.innerText();

expect(countValue).toBe('count is 0');

});