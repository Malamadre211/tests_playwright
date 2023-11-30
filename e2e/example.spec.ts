import { test, expect } from '@playwright/test';


test('Count = 0', async ({ page }) => {

  await page.goto('http://localhost:5173/')

  const countValue = await page.innerText('.card button')

expect(countValue).toContain('0')

});

test("click work", async ({ page }) => {
  
  await page.goto('http://localhost:5173/')


  await page.click('.card button')
  await page.click('.card button')

  const countValue = await page.innerText('.card button')

  expect(countValue).toContain('2')
});