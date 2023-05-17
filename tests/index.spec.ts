import { expect, test } from '@playwright/test';

test.describe('website test', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('website is shown correctly', async ({ page }) => {
		await expect(page).toHaveURL('http://localhost:3000/');
		await expect(page).toHaveTitle('A Very Descriptive Title');
		const metaDescription = page.locator("meta[name='description']");
		await expect(metaDescription).toHaveAttribute(
			'content',
			'A heavily optimized description full of well-researched keywords.'
		);
		const html = page.locator('html');
		await expect(html).toHaveClass('scroll-smooth');

		await expect(page.getByTestId('hero')).toBeVisible();
		await expect(page.getByTestId('about')).toBeVisible();
		await expect(page.getByTestId('projects')).toBeVisible();
		await expect(page.getByTestId('contact')).toBeVisible();
		await expect(page.getByTestId('footer')).toBeVisible();
	});

	test('navbar is shown correctly and working', async ({ page }) => {
		const header = page.getByTestId('header');
		await header.getByText('About').click();
		await expect(page).toHaveURL('http://localhost:3000/#about');
		await header.getByText('Projects').click();
		await expect(page).toHaveURL('http://localhost:3000/#projects');
		await header.getByText('Contact').click();
		await expect(page).toHaveURL('http://localhost:3000/#contact');
	});
});

test.describe('testing button functionalities', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:3000/');
	});

	test('back to top button is working', async ({ page }) => {
		const scrollY = await page.evaluate(() => document.documentElement.scrollHeight);
		await page.evaluate(() => {
			window.scrollTo(0, scrollY);
		});
		await page.getByTestId('back-to-top-button').click();
		await page.evaluate(() => {
			window.scrollTo(0, 0);
		});
	});

	test('toggle theme button is working', async ({ page }) => {
		await page.getByTestId('theme-switch').click();
		await expect(page.locator('html')).toHaveClass('scroll-smooth dark');
		await page.evaluate(() => {
			window.localStorage.setItem('theme', 'dark');
		});
		await page.getByTestId('theme-switch').click();
		await expect(page.locator('html')).toHaveClass('scroll-smooth');
		await page.evaluate(() => {
			window.localStorage.removeItem('theme');
		});
	});
});

test.describe('website test', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('hover effect on cards is working', async ({ page }) => {
		const card = page.locator('');
	});
});

test.afterAll(async ({ page }) => {
	await page.close();
});
