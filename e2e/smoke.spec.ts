import { expect, test } from '@playwright/test'

test('landing page renders its primary content', async ({ page }) => {
	await page.goto('/')
	await expect(
		page.getByRole('heading', { name: 'Skin health, made personal.' }),
	).toBeVisible()
	await expect(
		page.getByRole('link', { name: 'Explore services' }),
	).toBeVisible()
	await expect(
		page.getByRole('heading', { name: 'Care for the skin you are in.' }),
	).toBeVisible()
})
