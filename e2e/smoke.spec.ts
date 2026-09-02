import { expect, test } from '@playwright/test'

test('landing page renders its primary content', async ({ page }) => {
	await page.goto('/')
	await expect(
		page.getByRole('heading', { name: 'Skin health, made personal.' }),
	).toBeVisible()
	await expect(
		page.getByRole('link', { name: 'Explore virtual care' }),
	).toBeVisible()
	await expect(
		page.getByRole('heading', { name: 'Care that meets you where you are.' }),
	).toBeVisible()
})
