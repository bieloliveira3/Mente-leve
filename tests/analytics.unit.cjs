/* eslint-disable @typescript-eslint/no-require-imports -- Native CommonJS harness mocks the SDK module without another test framework. */
const assert = require('node:assert/strict');
const { test, beforeEach } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

// Use the existing TypeScript compiler and native node:test; no added test framework.
Module._extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{
  compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true},fileName:filename,
}).outputText,filename);
const originalLoad=Module._load;
let initCount, captures, config, sessionId;
const sdk={
  init(_publicTestFixture,options){initCount++;config=options},
  get_session_id(){return sessionId},
  register_for_session(){},
  has_opted_out_capturing(){return false},
  capture(event,properties,options){
    const payload=config.before_send({event,properties:{...properties,token:process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN}});
    assert.equal(payload.properties.token,process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,'Keep the SDK ingestion token');
    captures.push({...payload,options});
  },
};
Module._load=function(request,...args){if(request==='posthog-js')return sdk;return originalLoad.call(this,request,...args)};
beforeEach(()=>{
  for(const filename of Object.keys(require.cache))if(filename.includes(`${path.sep}src${path.sep}lib${path.sep}analytics${path.sep}`))delete require.cache[filename];
  const storage=new Map();
  global.sessionStorage={getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)};
  global.window={location:{origin:'https://mente.example',pathname:'/',href:'https://mente.example/?utm_source=facebook&email=private@example.com',search:'?utm_source=facebook&utm_campaign=launch&utm_content=ad_01&fbclid=test_click_id'}};
  Object.defineProperty(global,'navigator',{configurable:true,value:{doNotTrack:'0'}});
  process.env.NODE_ENV='production';
  // Fake public token is a fixture with a mocked SDK. No network request ever occurs.
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN='phc_test_fixture_never_sent';
  process.env.NEXT_PUBLIC_POSTHOG_HOST='https://us.i.posthog.com';
  delete process.env.NEXT_PUBLIC_POSTHOG_DEBUG;
  delete process.env.NEXT_PUBLIC_POSTHOG_CAPTURE_IN_DEV;
  initCount=0;captures=[];config=undefined;sessionId='sdk-session-fixture-1';
});
const client=()=>require('../src/lib/analytics/client.ts');
const attribution=()=>require('../src/lib/analytics/attribution.ts');

test('single initialization, buffered early clicks, immediate checkout transport and privacy controls',async()=>{
  const api=client();
  const first=api.initializeAnalytics();
  api.captureEvent('landing_view');
  api.captureEvent('checkout_click',{cta_id:'pricing_checkout'},true);
  await Promise.all([first,api.initializeAnalytics(),api.initializeAnalytics()]);
  assert.equal(initCount,1);
  assert.deepEqual(captures.map(e=>e.event),['landing_view','checkout_click']);
  assert.deepEqual(captures[1].options,{send_instantly:true,transport:'sendBeacon'});
  assert.equal(config.capture_pageview,false);
  assert.equal(config.capture_pageleave,true);
  assert.equal(config.disable_session_recording,false);
  assert.equal(config.session_recording.maskAllInputs,true);
  assert.equal(config.session_recording.maskTextSelector,'*');
  assert.equal(config.session_recording.recordBody,false);
  assert.equal(config.session_recording.recordHeaders,false);
  assert.equal(config.session_recording.streamNetworkBody,false);
  assert.equal(config.session_recording.captureJsonLd,false);
  assert.equal(config.enable_recording_console_log,false);
  assert.equal(config.person_profiles,'never');
  assert.equal(config.ip,false);
});
test('first session attribution survives removed/changed campaign URL; new SDK session resets it',()=>{
  const api=attribution();
  const initial=api.getAttribution('sdk-session-fixture-1');
  window.location.search='?utm_source=google&utm_content=ad_02';
  assert.deepEqual(api.getAttribution('sdk-session-fixture-1'),initial);
  assert.equal(api.getAttribution('sdk-session-fixture-2').utm_source,'google');
  assert.equal(api.getAttribution('sdk-session-fixture-2').utm_content,'ad_02');
});
test('campaign storage may be blocked without breaking events',async()=>{
  sessionStorage.getItem=()=>{throw new Error('blocked')};
  sessionStorage.setItem=()=>{throw new Error('blocked')};
  const api=client();await api.initializeAnalytics();api.captureEvent('cta_click');
  assert.equal(captures[0].properties.utm_campaign,'launch');
});
test('redacts SDK and replay URLs, embedded credentials, and sensitive fields',async()=>{
  const api=client();await api.initializeAnalytics();
  api.captureEvent('cta_click',{
    email:'private@example.com',password:'secret',cpf:'123.456.789-00',
    $current_url:'https://user:secret@mente.example/?email=private@example.com#private',
    $referrer:'https://example.com/?token=private',
    $set_once:{$initial_current_url:'https://mente.example/?password=private'},
    destination:'mailto:support',
  });
  const properties=captures[0].properties;
  assert.equal(properties.$current_url,'https://mente.example/');
  assert.equal(properties.$referrer,'https://example.com/');
  assert.equal(properties.$set_once.$initial_current_url,'https://mente.example/');
  assert.equal(properties.email,undefined);assert.equal(properties.password,undefined);assert.equal(properties.cpf,undefined);
  assert.equal(config.session_recording.maskCapturedNetworkRequestFn({name:'https://mente.example/?token=private'}).name,'https://mente.example/');
  assert.deepEqual(attribution().readCampaign('?utm_content=private@example.com&token=private&utm_source=facebook'),{utm_source:'facebook'});
});
test('development is isolated unless explicitly allowed, and production never exposes debug buffers',async()=>{
  process.env.NODE_ENV='development';process.env.NEXT_PUBLIC_POSTHOG_DEBUG='true';
  const local=client();await local.initializeAnalytics();local.captureEvent('landing_view');
  assert.equal(initCount,0);assert.equal(captures.length,0);assert.equal(window.__menteLeveAnalyticsDebug.length,1);
});
test('production ignores development debug flag',async()=>{
  process.env.NEXT_PUBLIC_POSTHOG_DEBUG='true';
  const api=client();await api.initializeAnalytics();api.captureEvent('landing_view');
  assert.equal(window.__menteLeveAnalyticsDebug,undefined);assert.equal(captures.length,1);
});
test('no credentials and Do Not Track both disable analytics without affecting application code',async()=>{
  delete process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const api=client();await api.initializeAnalytics();api.captureEvent('landing_view');
  assert.equal(api.analyticsEnabled(),false);assert.equal(initCount,0);assert.equal(captures.length,0);
});
test('Do Not Track is respected even with valid configuration',async()=>{
  navigator.doNotTrack='1';const api=client();await api.initializeAnalytics();api.captureEvent('landing_view');
  assert.equal(initCount,0);assert.equal(captures.length,0);
});
test('SDK errors do not propagate to checkout handlers',async()=>{
  const api=client();await api.initializeAnalytics();
  const original=sdk.capture;
  sdk.capture=()=>{throw new Error('SDK fixture failure')};
  try{assert.doesNotThrow(()=>api.captureEvent('checkout_click',{},true))}finally{sdk.capture=original}
});
test('pageleave includes maximum scroll and current section without a fabricated conversion',async()=>{
  const api=client();await api.initializeAnalytics();
  api.updatePageContext({pathname:'/',max_scroll_percentage:75,last_section_id:'metodo'});
  const event=config.before_send({event:'$pageleave',properties:{}});
  assert.equal(event.properties.max_scroll_percentage,75);
  assert.equal(event.properties.last_section_id,'metodo');
  assert.equal(event.event,'$pageleave');
});
