import { Given, When, Then, page, expect } from '#cucumber';

Given(/^I have the homepage open$/, async () => {
    // It should open automatically
});

When(/^I start counting$/, async () => {
    await page.getByRole('button', { name: 'count' }).click();
});

Then(/^I see the counter increasing$/, async () => {
    await expect(page.getByRole('button', { name: 'count' })).toContainText('is 1');
});
