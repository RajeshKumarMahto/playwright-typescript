import {test, expect} from "@playwright/test";

test.beforeEach(async ({page})=>{
    await page.goto('https://letcode.in/test');
    await page.getByRole('link', {name: 'Dialog'}).click();
})

test.describe('Different Types of alert', ()=>{

    test('Accept the alert', async ({page}) => {
       await page.getByText('Simple Alert').click();
       page.on('dialog', dialog =>dialog.accept());
    })



});