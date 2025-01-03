import { chromium } from '@playwright/test';
import { After, Before, world } from '@cucumber/cucumber';

let browser;
let page;

Before(async () => {
    const { isFocusing } = world.parameters;

    try {
        browser = await chromium.launch({
            channel: 'chrome',
            headless: !isFocusing, // Show browser window when focusing on one scenario
            slowMo: 0,
        });
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('http://localhost:5173/');
    } catch (error) {
        console.error(error);
    }

    return page;
});

After(async () => {
    const { isFocusing } = world.parameters;

    // Continue showing the browser window when we're focusing on one scenario
    if (!isFocusing) {
        await browser.close();
    }
});

export { page, browser };
