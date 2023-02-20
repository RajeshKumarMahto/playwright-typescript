
import { test, expect } from '@playwright/test';

test('Practice input', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name: 'Edit'}).click();
    await expect(page.getByRole('heading', {name:'Input'})).toBeVisible();
})

test.only('Input verfication',async ({page}) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name: 'Edit'}).click();
    await page.getByPlaceholder('Enter first & last name').fill('Rajesh Kumar Mahto');
    const halfString = await page.locator('#join').getAttribute('value');
    const finalString = halfString!= null?halfString.concat(' human being'):'';
    console.log(finalString);
    await page.locator('#join').fill(finalString);
    //await page.screenshot({ path: 'screenshot.png' });
    await page.press('#join', 'Tab');
    let getMeStr = await page.locator('#getMe').getAttribute('value');
    console.log(getMeStr);
    await page.locator('#clearMe').clear();
    await expect(page.locator('#noEdit')).toBeDisabled();
    await expect(page.locator('#dontwrite')).not.toBeEditable();
})