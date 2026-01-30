const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Tests (24 Tests)', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForTimeout(1000);
  });

  test('Pos_Fun_0001 - Simple work statement', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama vaedata yanavaa');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('මම වැඩට යනවා');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0001.png' });
  });

  test('Pos_Fun_0002 - Simple past action', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama adha kaemak haedhuvaa');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('මම අද කැමක් හැදුවා');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0002.png' });
  });

  test('Pos_Fun_0003 - Work completion with feeling', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama vaedata giyaata, mata hari mahansi vagee.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('මම වැඩට ගියාට');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0003.png' });
  });

  test('Pos_Fun_0004 - Cooking experience narrative', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama adha recipe ekak balaagena rasama rasa kaeema ekak haedhuvaa, ee unaata eeka recipe eka vidhiyata aevilla naehae nee.');
    await page.waitForTimeout(4000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('මම අද recipe එකක් බලාගෙන');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0004.png' });
  });

  test('Pos_Fun_0005 - Simple health inquiry', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('dhaen uNa aduyi dha?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('දැන් උණ අඩුයි ද?');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0005.png' });
  });

  test('Pos_Fun_0006 - Tiredness expression', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha nam harima mahansi, mata pudhuma mahansiyak thiyennee aeGAta, venivaelgaeta ekakvath thambagena bonna oonee.');
    await page.waitForTimeout(4000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('අද නම් හරිම මහන්සි');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0006.png' });
  });

  test('Pos_Fun_0007 - Negative outcome statement', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hoDHAk nam vennee naehae ookunta.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('හොඳක් නම් වෙන්නේ නැහැ');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0007.png' });
  });

  test('Pos_Fun_0008 - Evening greeting', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suBha raathriyak!');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('සුභ රාත්‍රියක්');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0008.png' });
  });

  test('Pos_Fun_0009 - Repeated refusal with explanation', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('baee,baee,mata nam dhaen aethi.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('බෑ,බෑ,මට නම් දැන් ඇති');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0009.png' });
  });

  test('Pos_Fun_0010 - Apology with condition', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata magen podi hari vaeraedhdhak vunaa nam mata samaavenna.');
    await page.waitForTimeout(4000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('ඔයාට මගෙන් පොඩි හරි වැරැද්දක්');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0010.png' });
  });

  test('Pos_Fun_0011 - Agreement with future action', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari, mQQ edhdhi aran ennam.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('හරි, මං එද්දි අරන් එන්නම්');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0011.png' });
  });

  test('Pos_Fun_0012 - University location question', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa university eka paeththee giyaadha?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('ඔයා university එක පැත්තේ');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0012.png' });
  });

  test('Pos_Fun_0013 - Person description', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vaeddek thamayi aee');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('වැඩ්ඩෙක් තමයි ඈ');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0013.png' });
  });

  test('Pos_Fun_0014 - Joined words without spaces', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('meejiivithayeeaeththatamaharimapudhumaakaaradheyak.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('මේජීවිතයේඇත්තටමහරිමපුදුමාකාරදෙයක්');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0014.png' });
  });

  test('Pos_Fun_0015 - Multiple excessive spaces', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama aasayi   havasata            ira   bahidhdhi ira     dhihaa        balaagena      inna.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('මම ආසයි');
    expect(pageText).toContain('ඉර');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0015.png' });
  });

  test('Pos_Fun_0016 - Long invitation narrative', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaalata edhaa mQQ kathaa karadhdhi kivvaa mehee aevilla eka dhavasak naevathilaa, poddak sellam karalaa, nidhahasee iDHAlaa, thee ekak ehema biilaa yanna balaagena enna kiyalaa.');
    await page.waitForTimeout(4000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('ඔයාලට එදා මං කතා කරද්දි');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0016.png' });
  });

  test('Pos_Fun_0017 - Simple well-wishing', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata suBha paethum!');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('ඔයාට සුභ පැතුම්');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0017.png' });
  });

  test('Pos_Fun_0018 - Weather observation with urgency', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vaessak vahinna vagee kaLu viigena enavaa,ikmanata gedhara yanna oona.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('වැස්සක් වහින්න වගේ');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0018.png' });
  });

  test('Pos_Fun_0019 - Humorous hunger expression', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata nam bada paelenna hinaa.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('මට නම් බඩ පැලෙන්න හිනා');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0019.png' });
  });

  test('Pos_Fun_0020 - Life routine observation', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vaedata yanavaa aayee gedhara enavaa ooka thamayi ithin jiivithee.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('වැඩට යනවා ආයේ ගෙදර එනවා');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0020.png' });
  });

  test('Pos_Fun_0021 - Sudden realization exclamation', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adee! mQQ dhaen dhaekkee.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('අඩේ! මං දැන් දැක්කේ');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0021.png' });
  });

  test('Pos_Fun_0022 - Repeated greeting inquiry', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ithin ithin kohomadha saepa saniipa?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('ඉතින් ඉතින් කොහොමද සැප සනීප');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0022.png' });
  });

  test('Pos_Fun_0023 - Negative work habit warning', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('anee mee buuruvek vagee vaeda karanna purudhu venna epaa.');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('අනේ මේ බූරුවෙක් වගේ වැඩ කරන්න');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0023.png' });
  });

  test('Pos_Fun_0024 - Exam difficulty question', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('kohomadha viBhaagaya amaarudha?');
    await page.waitForTimeout(3000);
    const pageText = await page.textContent('body');
    expect(pageText).toContain('කොහොමද විභාගය අමාරුද');
    await page.screenshot({ path: 'screenshots/Pos_Fun_0024.png' });
  });

});