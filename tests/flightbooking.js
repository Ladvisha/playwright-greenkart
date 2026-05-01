import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/dropdownsPractise/');

await page.getByPlaceholder('Type to Select').fill('India');
await page.waitForTimeout(4000);
await page.locator('#ctl00_mainContent_rbtnl_Trip_2').check();
await page.locator('#MultiCityModelAlert').click();
await page.waitForTimeout(4000); 


await page.locator('#ctl00_mainContent_ddl_originStation1_CTXT').click();
await page.locator('#glsctl00_mainContent_ddl_originStation1_CTNR a[value="DEL"]').click();

await page.locator('#ctl00_mainContent_ddl_originStation1_CTXT').click();
await page.locator('#glsctl00_mainContent_ddl_originStation1_CTNR a[value="GOI"]').click();


await page.waitForTimeout(3000);


await page.locator('#divpaxinfo').click();
await page.locator('#hrefIncChd').click();
await page.locator('#hrefIncChd').click();
await page.locator('#hrefIncChd').click();


await page.locator('#ctl00_mainContent_DropDownListCurrency').click();
await page.waitForTimeout(3000);
await page.locator('#ctl00_mainContent_DropDownListCurrency').selectOption('USD');

await page.locator('#ctl00_mainContent_btn_FindFlights').click();

await page.getByLabel('Senior Citizen').check();
await page.waitForTimeout(3000);

await page.getByRole('link', {name: 'Special Assistance' }).click();
await page.locator('#SpecialAssistanceWindow').click();
await page.waitForTimeout(3000);


// hotel section
await page.getByRole('link', {name: 'Hotels'}).click();
await page.waitForTimeout(3000);  

await page.locator('#ctl00_mainContent_txtOriginStation1_MST').fill('Delhi');

await page.locator('#ddl_Adult_MST').selectOption('4');
await page.locator('#ddl_Child_MST').selectOption('2');
await page.locator('#ddl_Infant_MST').selectOption('3');


// Holiday-package section 

await page.getByRole('link', {name: 'Holiday Packages'}).click();

await page.locator('#ctl00_mainContent_HolidayPackages_DropDownListPackage_CTXT').click();
await page.locator('#glsctl00_mainContent_HolidayPackages_DropDownListPackage_CTNR').getByText('Kolkata').click();
await page.waitForTimeout(3000);

await page.locator('#ctl00_mainContent_HolidayPackages_DropDownListFrom_CTXT').click();
await page.locator('#glsctl00_mainContent_HolidayPackages_DropDownListFrom_CTNR').getByText('  Delhi ').click();
await page.waitForTimeout(3000);

//date-picker section
 await page.locator('#ctl00_mainContent_HolidayPackages_TxtTravelDate').click();
 await page.getByRole('link', {name: '21'}).click();

 await page.locator('#btnFindHolidays').click();
await page.waitForTimeout(3000);

});