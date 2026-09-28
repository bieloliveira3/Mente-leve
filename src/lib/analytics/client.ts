import type { PostHog, PostHogConfig, Properties } from "posthog-js";
import { getAttribution, safeUrl } from "./attribution";
import type { AnalyticsEvent } from "./definitions";

const debug = process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_POSTHOG_DEBUG === "true";
const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const production = process.env.NODE_ENV === "production";
const allowDevelopment = process.env.NEXT_PUBLIC_POSTHOG_CAPTURE_IN_DEV === "true";
const configured = !!token && !!host && (production || allowDevelopment);

type PendingEvent = { event: string; properties: Properties; instant: boolean };
type Runtime = { sdk?: PostHog; initialization?: Promise<void>; queue: PendingEvent[]; failed?: boolean; pageContext?: Properties };
declare global {
  interface Window {
    __menteLeveAnalytics?: Runtime;
    __menteLeveAnalyticsDebug?: { event: string; properties: Properties }[];
  }
}

function runtime(): Runtime {
  return (window.__menteLeveAnalytics ??= { queue: [] });
}

export function updatePageContext(properties: Properties) {
  runtime().pageContext = properties;
}

export function analyticsEnabled(): boolean {
  return typeof window !== "undefined" && (configured || debug) && navigator.doNotTrack !== "1";
}

/** Also redact SDK-generated page/referrer properties, including $set and $set_once. */
function redactProperties(properties: Properties): Properties {
  const result = { ...properties };
  for (const [key, value] of Object.entries(result)) {
    if (/^(email|phone|cpf|password|card|token|authorization)$/i.test(key)) delete result[key];
    else if (typeof value === "string" && /url|referrer|href/i.test(key)) result[key] = safeUrl(value);
    else if ((key === "$set" || key === "$set_once") && value && typeof value === "object") result[key] = redactProperties(value);
  }
  return result;
}

export function posthogConfig(): Partial<PostHogConfig> {
  return {
    api_host: host,
    defaults: "2026-08-30",
    capture_pageview: false, // Exactly one manual pageview per committed pathname.
    capture_pageleave: true,
    disable_scroll_properties: false,
    autocapture: { dom_event_allowlist: ["click"], capture_copied_text: false },
    mask_all_text: true,
    mask_all_element_attributes: true,
    capture_heatmaps: true,
    rageclick: true,
    capture_dead_clicks: true,
    capture_performance: { web_vitals: true, network_timing: false },
    capture_exceptions: false,
    disable_surveys: true,
    disable_session_recording: false,
    enable_recording_console_log: false,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: "*",
      blockSelector: ".ph-no-capture, [data-analytics-private], iframe",
      recordHeaders: false,
      recordBody: false,
      streamNetworkBody: false,
      captureJsonLd: false,
      maskCapturedNetworkRequestFn: (request) => ({ ...request, name: safeUrl(request.name) }),
    },
    person_profiles: "never",
    ip: false,
    respect_dnt: true,
    save_campaign_params: false, // Only the validated campaign allowlist is sent.
    get_current_url: () => safeUrl(window.location.href),
    debug,
    before_send: (event) => {
      if (!event) return null;
      // PostHog places its public project token in the transport envelope. The
      // privacy filter must preserve that exact value or ingestion drops events.
      const publicProjectToken = event.properties.token;
      event.properties = { ...runtime().pageContext, ...redactProperties(event.properties), ...getAttribution(runtime().sdk?.get_session_id()), environment: process.env.NODE_ENV };
      if (publicProjectToken === token) event.properties.token = publicProjectToken;
      return event;
    },
  };
}

/** Lazy SDK loading and a window singleton survive Strict Mode and hot reloads. */
export function initializeAnalytics(): Promise<void> {
  if (!analyticsEnabled()) return Promise.resolve();
  const state = runtime();
  if (state.initialization) return state.initialization;
  getAttribution();
  if (!configured) {
    if (debug) console.info("[analytics] Local validation only; no PostHog requests. Replay requires a configured project.");
    return (state.initialization = Promise.resolve());
  }
  state.initialization = import("posthog-js").then(({ default: posthog }) => {
    posthog.init(token!, posthogConfig());
    state.sdk = posthog;
    const attribution = getAttribution(posthog.get_session_id());
    posthog.register_for_session(attribution);
    for (const item of state.queue.splice(0)) send(item);
  }).catch((error: unknown) => {
    state.failed = true;
    state.queue.length = 0;
    if (debug) console.warn("[analytics] SDK unavailable", error);
  });
  return state.initialization;
}

function send(item: PendingEvent) {
  const sdk = runtime().sdk;
  try {
    if (!sdk || sdk.has_opted_out_capturing()) return;
    sdk.capture(item.event, item.properties, item.instant ? { send_instantly: true, transport: "sendBeacon" } : undefined);
  } catch (error: unknown) {
    // Analytics failures must never cancel checkout navigation or existing pixel handlers.
    if (debug) console.warn("[analytics] Event unavailable", error);
  }
}

export function captureEvent(event: AnalyticsEvent | "$pageview", properties: Properties = {}, instant = false) {
  if (!analyticsEnabled()) return;
  const state = runtime();
  const item: PendingEvent = {
    event, instant,
    properties: {
      ...getAttribution(state.sdk?.get_session_id()),
      page: window.location.pathname === "/" ? "mente_leve_landing" : window.location.pathname,
      pathname: window.location.pathname,
      environment: process.env.NODE_ENV,
      ...properties,
    },
  };
  // Explicit local-only diagnostics: zero production event buffers or console noise.
  if (debug) {
    const buffer = (window.__menteLeveAnalyticsDebug ??= []);
    if (buffer.length >= 200) buffer.shift();
    buffer.push({ event, properties: item.properties });
    console.info("[analytics]", event, item.properties);
  }
  if (!configured || state.failed) return;
  if (state.sdk) send(item);
  else if (state.queue.length < 100) state.queue.push(item);
}
