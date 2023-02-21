
import { test, expect } from '@playwright/test';

test('Practice input', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', { name: 'Edit' }).click();
    await expect(page.getByRole('heading', { name: 'Input' })).toBeVisible();
})

test('Input verfication', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', { name: 'Edit' }).click();
    await page.getByPlaceholder('Enter first & last name').fill('Rajesh Kumar Mahto');
    const halfString = await page.locator('#join').getAttribute('value');
    const finalString = halfString != null ? halfString.concat(' human being') : '';
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

test('Goto Home and come back here using driver command', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name:'Click'}).click();
    await page.getByRole('button', {name: 'Goto Home'}).click();
    await page.goto("https://letcode.in/buttons");
    await expect(page.getByRole('heading', {name: 'Button', exact:true})).toBeVisible();

})

test('Get the X & Y co-ordinates',async ({page}) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name:'Click'}).click();
    const FindLocationBtn =  await page.getByRole('button', {name: 'Find Location'}).boundingBox();
    console.log(FindLocationBtn);

})

test('Find the color of the button',async ({page}) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name:'Click'}).click();
    const colorBtn = page.locator('#color', {hasText: 'What is my color?'});
    const color = await colorBtn.evaluate((element)=>{
       return window.getComputedStyle(element).getPropertyValue('background-color');
    })
    console.log(color);
})

test('Find the height & width of the button',async ({page}) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name:'Click'}).click();
    const tallAndFatBtn =  await page.locator('#property').boundingBox();
    console.log(tallAndFatBtn);
})

test('Confirm button is disabled',async ({page}) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name:'Click'}).click();
    await expect(page.locator('#isDisabled')).toBeDisabled();
})

test.only('Click and Hold Button',async ({page}) => {
    await page.goto("https://letcode.in/test");
    await page.getByRole('link', {name:'Click'}).click();
    const btnHold = await page.getByRole('button', {name: 'Button Hold!'});
    btnHold.click({delay:3000});
    await expect(page.getByText('Button has been long pressed', {exact:true})).toBeVisible();
})



