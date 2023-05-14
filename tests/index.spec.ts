import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

// GENERAL TESTS

test('has title', async ({ page }) => {
	await expect(page).toHaveTitle('John Doe | Web developer');
});

// HEADER

test('has a header with navbar', async ({ page }) => {
	await expect(page.getByTestId('header')).toBeVisible();
});

// HERO

test('has a hero with text and img', async ({ page }) => {
	await expect(page.getByTestId('hero')).toBeVisible();
	await expect(page.getByTestId('hero')).toContainText(
		'Hi! My name is John Doe and I am a web developer based in New York.'
	);
	await page
		.getByRole('img', { name: 'hero image' })
		.getAttribute('src')
		.then((src) => {
			src && src.should.equal('/images/hero.png');
		});
});

// ABOUT

// PROJECTS

test('has working link to github projects', async ({ page }) => {
	const pagePromise = page.waitForEvent('popup');
	await page.getByRole('link', { name: 'View full private projects archive' }).click();
});

// CONTACT

test('has contact form', async ({ page }) => {
	await expect(page.getByTestId('contact')).toBeVisible();
});

test('Has validated contact form', async ({ page }) => {
	await page.getByLabel('Full name').click();
	await page.getByLabel('Full name').fill('John');
	await page.getByLabel('Full name').press('Tab');
	await page.getByPlaceholder('john@example.com').fill('John@gmail.com');
	await page.getByPlaceholder('john@example.com').press('Tab');
	await page.getByLabel('Message').fill('Hello!');
	await page.getByLabel('Message').press('Tab');
	await page.getByRole('button', { name: 'Send a message!' }).press('Enter');
});

// FOOTER

test('has footer', async ({ page }) => {
	await expect(page.getByTestId('footer')).toBeVisible();
});
