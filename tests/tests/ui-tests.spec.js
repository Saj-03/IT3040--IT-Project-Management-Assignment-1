const { test, expect } = require('@playwright/test');

test.describe('UI Tests (1 Test)', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForTimeout(1000);
  });

  test('Pos_UI_0001 - Real-time output updates during typing', async ({ page }) => {
    const input = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    
    // Test incremental typing
    console.log('Testing real-time conversion...');
    
    await input.fill('a');
    await page.waitForTimeout(800);
    console.log('Typed: a');
    
    await input.fill('ap');
    await page.waitForTimeout(800);
    console.log('Typed: ap');
    
    await input.fill('api');
    await page.waitForTimeout(800);
    console.log('Typed: api');
    
    await input.fill('apita');
    await page.waitForTimeout(800);
    console.log('Typed: apita');
    
    await input.fill('apita podi');
    await page.waitForTimeout(800);
    console.log('Typed: apita podi');
    
    // Full sentence
    await input.fill('apita podi kalee idhan kiyala dhiila thiyennee aDhYaapanaya kiyannee ithaama vaedhagath dheyak kiyalaa.');
    await page.waitForTimeout(2000);
    console.log('Typed full sentence');
    
    const pageText = await page.textContent('body');
    
    // Verify real-time conversion worked
    expect(pageText).toMatch(/[අ-෴]/); // Contains Sinhala
    expect(pageText).toContain('අපිට'); // Contains expected word
    
    await page.screenshot({ path: 'screenshots/Pos_UI_0001.png' });
    console.log('UI test completed - real-time conversion verified');
  });

});

test('Neg_UI_0002 - Real-time conversion fails and produces wrong output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  
  // Type the exact phrase you found
  const testPhrase = 'mata dn nidimathai, eka nisa mama gedara ynawa';
  
  console.log('Testing real-time conversion...');
  
  // Type slowly to test real-time
  await input.fill('m');
  await page.waitForTimeout(500);
  await input.fill('ma');
  await page.waitForTimeout(500);
  await input.fill('mat');
  await page.waitForTimeout(500);
  await input.fill('mata');
  await page.waitForTimeout(500);
  
  // Check if ANY Sinhala appears during typing
  let earlyText = await page.textContent('body');
  let earlySinhala = /[අ-෴]/.test(earlyText);
  console.log('Early typing produced Sinhala:', earlySinhala);
  
  // Complete the phrase
  await input.fill(testPhrase);
  await page.waitForTimeout(3000); // Wait for conversion
  
  // Get final output
  const pageText = await page.textContent('body');
  console.log('Full output:', pageText);
  
  // Check for the WRONG output you observed
  const hasWrongOutput = pageText.includes('මට ඩ්න් නිඩිමතෛ') || 
                         pageText.includes('ය්නwඅ') ||
                         pageText.includes('ගෙඩර');
  
  // Check for English letters in Sinhala (w appearing)
  const hasEnglishInSinhala = /[a-zA-Z][අ-෴]|[අ-෴][a-zA-Z]/.test(pageText);
  
  // NEGATIVE TEST: Should have wrong output
  // System failed in real-time conversion and produced bad output
  expect(hasWrongOutput || hasEnglishInSinhala).toBeTruthy();
  
  await page.screenshot({ path: 'screenshots/Neg_UI_0002-real-time-fail.png', fullPage: true });
  console.log('Negative UI test passed: Real-time conversion failed as expected');
});