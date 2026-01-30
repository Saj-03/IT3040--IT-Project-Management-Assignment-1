const { test, expect } = require('@playwright/test');

test.describe('Negative Functional Tests (10 Tests)', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForTimeout(1000);
  });

  test('Neg_Fun_0001 - Complex phrase with spacing issues', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('poddak athnam nam tharha yanavaa, ooma kohomada oya lamaya jeewath wenna balaporthu wenne? oyata harima amaru wei samaje issrhata yanna.');
    await page.waitForTimeout(4000);
    const pageText = await page.textContent('body');
    
    // Should produce wrong output (contain English letters)
    expect(pageText).toMatch(/[a-zA-Z]/);
    expect(pageText).toContain('පොඩ්ඩක් අත්නම්');
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0001.png' });
  });

  test('Neg_Fun_0002 - Invitation with spelling variations', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyala okkoma ape gedhara enna api ekathu velaa yamu.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('ඔයල'); // Wrong
    expect(pageText).toContain('ape'); // Wrong
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0002.png' });
  });

  test('Neg_Fun_0003 - Simple question with a question mark', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata badaginida?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('ඩ?'); // Wrong character
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0003.png' });
  });

  test('Neg_Fun_0004 - Weather-related instruction with typo', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vassak vassoth mathak karla redi tika geta ganna');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('වස්සක්');
    expect(pageText).toContain('කර්ල'); 
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0004.png' });
  });

  test('Neg_Fun_0005 - Request with pronunciation spelling', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ena gaman mata kaema ekak oyaata aragena enna puluvn veid?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('කැම'); 
    expect(pageText).toContain('පුලුව්න්'); 
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0005.png' });
  });

  test('Neg_Fun_0006 - Joined words without spaces', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('apilabanasathiyedihavatavadeivarakaramu.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('අපිලබනසතියෙඩිහවටවඩේවරකරමු'); // Wrong segmentation
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0006.png' });
  });

  test('Neg_Fun_0007 - Time reference with complex structure', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Dn velava pandara 12 th pahu vela, ude vadata giyapu manusya thamath na ne');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).not.toContain('දැන් වෙලාව 12ත් පහුවෙලා');
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0007.png' });
  });

  test('Neg_Fun_0008 - Simple request with spelling variation', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('poddak oka balanna puluwanda?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toMatch(/w/); 
    expect(pageText).toContain('ඔක'); 
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0008.png' });
  });

  test('Neg_Fun_0009 - Critical question conversion', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('shaa oyaa mara vada thamai krnne, ohomada wadagath manussayek widiyta hasirenne?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toMatch(/w/); 
    expect(pageText).toContain('මර'); 
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0009.png' });
  });

  test('Neg_Fun_0010 - Short day to day phrase', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyata mahansi nm chuttak nidagnna');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    
    expect(pageText).toContain('ඔයට'); 
    expect(pageText).toContain('න්ම්'); 
    
    await page.screenshot({ path: 'screenshots/Neg_Fun_0010.png' });
  });

});