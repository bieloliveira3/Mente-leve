/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS harness loads an optional, externally supplied Playwright runtime. */
/* Run against next dev with NEXT_PUBLIC_POSTHOG_DEBUG=true and no project token. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const base = process.env.ANALYTICS_TEST_URL || 'http://127.0.0.1:3100';
const expectedCtas = ['hero_offer','pricing_checkout','bonus_checkout','pages_checkout','guarantee_checkout','final_checkout','sticky_checkout','header_home','footer_home','footer_terms','footer_privacy','footer_refund','footer_support','whatsapp_support','reviews_whatsapp'];

(async () => {
  const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome' });
  const report = [];
  for (const name of ['desktop','mobile']) {
    const mobile = name === 'mobile';
    const context = await browser.newContext({
      viewport: mobile ? {width:390,height:844} : {width:1440,height:900},
      isMobile: mobile, hasTouch: mobile,
      ...(mobile ? {userAgent:'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36'} : {}),
    });
    await context.route(/connect\.facebook\.net|facebook\.com\/tr/, route => route.fulfill({status:200,contentType:'application/javascript',body:''}));
    await context.route('https://pay.cakto.com.br/**', route => route.fulfill({status:200,body:'External navigation test only'}));
    const page = await context.newPage();
    const errors = [];
    const posthogRequests = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {if(message.type()==='error') errors.push(message.text())});
    context.on('request', request => {if(/posthog\.com/.test(request.url())) posthogRequests.push(request.url())});
    await page.goto(`${base}/?utm_source=facebook&utm_medium=paid_social&utm_campaign=launch&utm_content=ad_01&utm_term=planner&fbclid=test_click_id&email=private@example.com`,{waitUntil:'networkidle'});
    await page.addStyleTag({content:'*,*::before,*::after {animation:none !important;transition:none !important;}'});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForFunction(()=>window.__menteLeveAnalyticsDebug?.some(e=>e.event==='landing_view'));
    const events = () => page.evaluate(()=>window.__menteLeveAnalyticsDebug);
    assert.equal((await events()).filter(e=>e.event==='landing_view').length,1);
    const ctas = await page.locator('[data-analytics-id]').evaluateAll(elements=>elements.map(el=>el.dataset.analyticsId));
    assert.deepEqual([...ctas].sort(),[...expectedCtas].sort());
    assert.equal(await page.locator('[data-analytics-section]').count(),12);
    assert.equal((await events()).filter(e=>e.properties.cta_id==='sticky_checkout').length,0,'Hidden bar must not generate impressions');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'No horizontal overflow');

    // Optional visual/DOM baseline captured before implementation.
    if(process.env.ANALYTICS_BASELINE_DIR) {
      const before=JSON.parse(fs.readFileSync(`${process.env.ANALYTICS_BASELINE_DIR}/posthog-baseline-${name}.json`,'utf8'));
      const after=await page.evaluate(()=>({text:document.body.innerText,
        sections:Array.from(document.querySelectorAll('main section')).map(el=>({text:el.innerText,rect:el.getBoundingClientRect().toJSON(),class:el.className})),
        links:Array.from(document.querySelectorAll('a')).map(el=>({text:el.innerText,href:el.getAttribute('href'),class:el.className})),
        width:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight}));
      assert.deepEqual(after,before,'Copy, links, classes, section geometry, and page size must remain identical');
      await page.screenshot({path:`${process.env.ANALYTICS_BASELINE_DIR}/posthog-after-${name}.png`,fullPage:true});
    }

    // Hero checkout opens Cakto and must not become another landing/pageview.
    const heroCta = page.locator('[data-analytics-id="hero_offer"]');
    await heroCta.scrollIntoViewIfNeeded();
    const heroPopupPromise = context.waitForEvent('page');
    await heroCta.click();
    const heroPopup = await heroPopupPromise;
    await heroPopup.waitForLoadState();
    assert.equal(new URL(heroPopup.url()).hostname,'pay.cakto.com.br');
    await heroPopup.close();
    assert.equal((await events()).filter(e=>e.event==='$pageview').length,1);
    assert.ok((await events()).some(e=>e.event==='cta_click'&&e.properties.cta_id==='hero_offer'));
    // Visit each real section long enough to record an impression.
    for (const section of await page.locator('[data-analytics-section]').all()) {
      await section.evaluate(el=>window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-90,behavior:'instant'}));
      await page.waitForTimeout(850);
    }
    for (const percentage of [25,50,75,90,100,25,100]) {
      await page.evaluate(p=>window.scrollTo({top:Math.max(0,document.documentElement.scrollHeight*p/100-innerHeight+(p===100?0:3)),behavior:'instant'}),percentage);
      await page.waitForTimeout(250);
    }
    await page.waitForTimeout(700);
    let captured = await events();
    assert.deepEqual(captured.filter(e=>e.event==='scroll_depth').map(e=>e.properties.percentage).sort((a,b)=>a-b),[25,50,75,90,100]);
    assert.equal(captured.filter(e=>e.event==='section_view').length,12);
    assert.equal(new Set(captured.filter(e=>e.event==='section_view').map(e=>e.properties.section_id)).size,12);

    // Existing FAQ still works; its interaction remains autocaptured when configured.
    const faq = page.locator('#faq button').first();
    await faq.scrollIntoViewIfNeeded();
    await faq.click();
    assert.equal(await faq.getAttribute('aria-expanded'),'true');

    for (const id of ['pricing_checkout','bonus_checkout','pages_checkout','guarantee_checkout','final_checkout','sticky_checkout']) {
      const cta = page.locator(`[data-analytics-id="${id}"]`);
      await cta.scrollIntoViewIfNeeded();
      await page.waitForTimeout(750);
      const popupPromise = context.waitForEvent('page');
      await cta.click();
      const popup = await popupPromise;
      await popup.waitForLoadState();
      const checkoutUrl = new URL(popup.url());
      assert.equal(checkoutUrl.hostname,'pay.cakto.com.br');
      assert.equal(checkoutUrl.searchParams.get('utm_content'),'ad_01');
      assert.equal(checkoutUrl.searchParams.get('fbclid'),'test_click_id');
      assert.equal(checkoutUrl.searchParams.has('email'),false);
      await popup.close();
    }
    // The review screenshots are taller than the viewport, so the WhatsApp
    // link only counts once the visitor actually reaches it.
    const reviewsCta = page.locator('[data-analytics-id="reviews_whatsapp"]');
    await reviewsCta.scrollIntoViewIfNeeded();
    await page.waitForTimeout(750);
    captured=await events();
    for(const id of expectedCtas) {
      assert.equal(captured.filter(e=>e.event==='cta_impression'&&e.properties.cta_id===id).length,1,`${id}: one real impression`);
    }
    assert.equal(captured.filter(e=>e.event==='checkout_click').length,7);
    assert.ok(captured.filter(e=>e.event==='checkout_click').every(e=>e.properties.price===27.99 && e.properties.currency==='BRL'));
    assert.equal(captured.filter(e=>['purchase','checkout_view'].includes(e.event)).length,0);
    assert.ok(captured.every(e=>e.properties.utm_source==='facebook'&&e.properties.utm_content==='ad_01'));
    assert.equal(JSON.stringify(captured).includes('private@example.com'),false);
    assert.equal(posthogRequests.length,0,'Local debug must not pollute production');
    assert.equal(errors.length,0,errors.join('\n'));

    // SPA navigation and return retain campaign, while a new page visit gets new milestones.
    const privacy=page.locator('[data-analytics-id="footer_privacy"]');
    await privacy.scrollIntoViewIfNeeded();
    await privacy.click();
    await page.waitForURL('**/privacidade');
    await page.waitForTimeout(400);
    assert.ok((await events()).some(e=>e.event==='$pageview'&&e.properties.pathname==='/privacidade'&&e.properties.utm_campaign==='launch'));
    await page.locator('a[href="/"]').first().click();
    await page.waitForURL(`${base}/`);
    await page.waitForTimeout(800);
    assert.equal((await events()).filter(e=>e.event==='landing_view').length,2);
    assert.ok((await events()).filter(e=>e.event==='landing_view').every(e=>e.properties.utm_content==='ad_01'));
    await page.reload({waitUntil:'networkidle'});
    assert.equal((await events()).filter(e=>e.event==='landing_view').length,1,'One landing event after reload');
    assert.equal((await events()).find(e=>e.event==='landing_view').properties.utm_content,'ad_01');
    report.push({device:name,sections:12,ctas:15,milestones:[25,50,75,90,100],checkoutClicks:7,errors,posthogRequests:posthogRequests.length,baseline:!!process.env.ANALYTICS_BASELINE_DIR});
    console.log(`${name}: all analytics and navigation assertions passed`);
    await context.close();
  }
  await browser.close();
  if(process.env.ANALYTICS_REPORT_PATH) fs.writeFileSync(process.env.ANALYTICS_REPORT_PATH,JSON.stringify(report,null,2));
})().catch(error=>{console.error(error);process.exit(1)});
