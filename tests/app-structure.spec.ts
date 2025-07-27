import { test, expect } from '@playwright/test';

test.describe('Project Structure and TypeScript Interfaces', () => {
  test('app can run and shows a working frontend', async ({ page }) => {
    await page.goto('/');
    
    // Verify the page loads successfully
    await expect(page).toHaveTitle(/Request Decomposition System/);
    
    // Verify the frontend app loaded and updated the content
    await expect(page.locator('text=✅ Frontend application loaded successfully')).toBeVisible();
    await expect(page.locator('text=✅ TypeScript interfaces imported and working')).toBeVisible();
    
    // Verify no JavaScript errors occurred
    const errors: string[] = [];
    page.on('pageerror', (error) => {
      errors.push(error.message);
    });
    
    // Wait a moment for any potential errors
    await page.waitForTimeout(1000);
    
    expect(errors).toHaveLength(0);
  });

  test('TypeScript interfaces compile and frontend uses typed objects', async ({ page }) => {
    // Capture console messages
    const consoleMessages: string[] = [];
    page.on('console', (msg) => {
      consoleMessages.push(msg.text());
    });
    
    await page.goto('/');
    
    // Wait for the app to load
    await expect(page.locator('text=✅ Frontend application loaded successfully')).toBeVisible();
    await expect(page.locator('text=✅ TypeScript interfaces imported and working')).toBeVisible();
    
    // Verify that the sample RequestNode was created and logged
    const hasNodeLog = consoleMessages.some(msg => 
      msg.includes('App initialized with sample node') && msg.includes('test-node-1')
    );
    expect(hasNodeLog).toBe(true);
    
    // Verify the sample node details are shown in the UI
    await page.locator('summary:has-text("Sample RequestNode")').click();
    
    // Check that the JSON contains the expected structure
    const jsonContent = await page.locator('pre').textContent();
    expect(jsonContent).toContain('"id": "test-node-1"');
    expect(jsonContent).toContain('"type": "root"');
    expect(jsonContent).toContain('"complexity": 1');
  });
});