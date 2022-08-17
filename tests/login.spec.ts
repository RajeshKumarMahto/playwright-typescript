import { expect, test } from "@playwright/test";

test('Verify the login button is visible', async ({ page }) => {
    
    await page.goto("https://letcode.in/test");
    await page.locator('a[href="/signin"]').isVisible;
   
});
test('Verify the login screen will appear after clicking on a login link or login button', async ({ page }) => {
    
    await page.goto("https://letcode.in/test");
    await page.locator('a[href="/signin"]').click();
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle(pageTitle);
   
});

test.only('Verify all login-related elements and fields are present on the login page', async ({ page })=>{
    await page.goto("https://letcode.in/test");
    await page.locator('a[href="/signin"]').click();
    await page.locator('input[name="email"]').isEnabled;
    await page.locator('input[name="password"]').isEnabled;
    await page.locator('(//p[@class="control"])[1]').isEnabled;
    const emailPlaceholder = await page.locator('input[name="email"]').getAttribute('placeholder');
    const passwordPlaceholder = await page.locator('input[name="password"]').getAttribute('placeholder');
    console.log(`email Placeholder: "${emailPlaceholder}" and password placeholder: "${passwordPlaceholder}"`);
    await expect(emailPlaceholder).toBe('Enter registered email');
    await expect(passwordPlaceholder).toBe('Enter password');
    await page.locator('.button.is-link.is-light').isVisible;

});

// test('')