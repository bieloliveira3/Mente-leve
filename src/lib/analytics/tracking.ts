import { buildCheckoutUrl } from "../checkout-url";
import { brand, pricing } from "../content";
import { analyticsEnabled, captureEvent, initializeAnalytics, updatePageContext } from "./client";
import { safeUrl } from "./attribution";

const MILESTONES = [25, 50, 75, 90, 100];
type PageState = { pathname: string; sent: Set<string>; maxScroll: number; lastSection?: string };
let pageState: PageState | undefined;

export function scrollPercentage(): number {
  const height = document.documentElement.scrollHeight;
  const bottom = window.scrollY + window.innerHeight;
  return bottom >= height - 2 ? 100 : Math.min(99.99, Math.max(0, bottom / height * 100));
}

function deviceType(): string {
  const agent = navigator.userAgent;
  if (/iPad|Tablet/i.test(agent) || (/Android/i.test(agent) && !/Mobile/i.test(agent))) return "Tablet";
  return /Mobi|iPhone|Android/i.test(agent) ? "Mobile" : "Desktop";
}

/** Effective viewport excludes the sticky header/bar; hidden/occluded CTAs do not count. */
function visible(element: HTMLElement, isCta: boolean): boolean {
  if (document.visibilityState !== "visible" || element.closest('[aria-hidden="true"], [hidden]')) return false;
  const style = getComputedStyle(element);
  if (style.visibility === "hidden" || style.display === "none" || Number(style.opacity) === 0) return false;
  const rect = element.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return false;
  const header = document.querySelector("header")?.parentElement;
  const top = element.closest("header") ? 0 : (header?.getBoundingClientRect().bottom ?? 0);
  const bar = document.getElementById("checkout-bar");
  const barTop = bar?.getAttribute("aria-hidden") === "false" ? bar.getBoundingClientRect().top : window.innerHeight;
  const bottom = element.closest("#checkout-bar") ? window.innerHeight : Math.min(window.innerHeight, barTop);
  const left = Math.max(0, rect.left), right = Math.min(window.innerWidth, rect.right);
  const yTop = Math.max(top, rect.top), yBottom = Math.min(bottom, rect.bottom);
  const height = Math.max(0, yBottom - yTop), width = Math.max(0, right - left);
  if (isCta) {
    if (width * height < rect.width * rect.height * 0.5) return false;
    const hit = document.elementFromPoint((left + right) / 2, (yTop + yBottom) / 2);
    return !!hit && element.contains(hit);
  }
  return width > 0 && height >= Math.min(100, rect.height * 0.25);
}

function ctaProperties(element: HTMLElement) {
  return {
    cta_id: element.dataset.analyticsId,
    cta_location: element.dataset.analyticsLocation,
    cta_text: element.dataset.analyticsText,
    section_id: element.dataset.analyticsSectionId,
    destination: safeUrl(element.getAttribute("href") ?? ""),
  };
}

/** Two observers, one delegated click handler, and throttled passive scroll work. No React scroll state. */
export function startPageTracking(pathname: string): () => void {
  if (!analyticsEnabled()) return () => {};
  void initializeAnalytics();
  if (pageState?.pathname !== pathname) pageState = { pathname, sent: new Set(), maxScroll: 0 };
  const state = pageState;
  const context = { page: pathname === "/" ? "mente_leve_landing" : pathname, pathname, device_type: deviceType() };
  const updateContext = () => updatePageContext({ ...context, max_scroll_percentage: state.maxScroll, last_section_id: state.lastSection });
  updateContext();
  const once = (key: string, capture: () => void) => {
    if (state.sent.has(key)) return;
    state.sent.add(key);
    capture();
  };
  once("pageview", () => captureEvent("$pageview", context));
  // /checkout is a configuration placeholder, never a real checkout or payment confirmation.
  if (pathname !== "/") return () => {};
  once("landing", () => captureEvent("landing_view", context));

  const timers = new Map<HTMLElement, number>();
  const candidates = new Set<HTMLElement>();
  const isCta = (element: HTMLElement) => !!element.dataset.analyticsId;
  const keyFor = (element: HTMLElement) => `${isCta(element) ? "cta" : "section"}:${element.dataset.analyticsId ?? element.dataset.analyticsSection}`;

  const recordImpression = (element: HTMLElement) => {
    if (!visible(element, isCta(element))) return;
    once(keyFor(element), () => {
      if (isCta(element)) captureEvent("cta_impression", { ...context, ...ctaProperties(element) });
      else {
        state.lastSection = element.dataset.analyticsSection;
        updateContext();
        captureEvent("section_view", {
          ...context,
          section_id: element.dataset.analyticsSection,
          section_name: element.dataset.analyticsSectionName,
          section_order: Number(element.dataset.analyticsSectionOrder),
        });
      }
    });
    candidates.delete(element);
    sectionObserver?.unobserve(element);
    ctaObserver?.unobserve(element);
  };

  const scheduleImpressions = () => {
    for (const element of candidates) {
      if (visible(element, isCta(element))) {
        if (!timers.has(element)) timers.set(element, window.setTimeout(() => {
          timers.delete(element);
          recordImpression(element);
        }, 600));
      } else if (timers.has(element)) {
        window.clearTimeout(timers.get(element));
        timers.delete(element);
      }
    }
  };

  const observe = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      const element = entry.target as HTMLElement;
      if (entry.isIntersecting && !state.sent.has(keyFor(element))) candidates.add(element);
      else {
        candidates.delete(element);
        window.clearTimeout(timers.get(element));
        timers.delete(element);
      }
    }
    scheduleImpressions();
  };
  const sectionObserver = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(observe, { threshold: [0, 0.1, 0.25, 0.5] }) : undefined;
  const ctaObserver = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(observe, { threshold: [0, 0.5, 1] }) : undefined;
  const sectionElements = Array.from(document.querySelectorAll<HTMLElement>("[data-analytics-section]"));
  sectionElements.forEach(element => sectionObserver?.observe(element));
  document.querySelectorAll<HTMLElement>("[data-analytics-id]").forEach(element => ctaObserver?.observe(element));

  const sample = () => {
    if (document.visibilityState !== "visible") return;
    const percentage = scrollPercentage();
    state.maxScroll = Math.max(state.maxScroll, percentage);
    // Keep exit context current even when previously seen sections are revisited.
    const center = window.innerHeight / 2;
    const active = sectionElements.find(element => {
      const rect = element.getBoundingClientRect();
      return rect.top <= center && rect.bottom >= center;
    });
    if (active) state.lastSection = active.dataset.analyticsSection;
    updateContext();
    for (const milestone of MILESTONES) {
      if (percentage >= milestone) once(`scroll:${milestone}`, () => captureEvent("scroll_depth", { ...context, percentage: milestone }));
    }
    scheduleImpressions();
  };
  let scrollTimer: number | undefined;
  const onScroll = () => {
    if (scrollTimer !== undefined) return;
    scrollTimer = window.setTimeout(() => { scrollTimer = undefined; sample(); }, 150);
  };

  const onClick = (event: MouseEvent) => {
    if (event.type === "auxclick" && event.button !== 1) return;
    const target = event.target instanceof Element ? event.target : null;
    const element = target?.closest<HTMLElement>("[data-analytics-id]");
    if (!element) return;
    // A visible intentional click also proves exposure when faster than the 600ms dwell.
    recordImpression(element);
    const properties = {
      ...context, ...ctaProperties(element),
      scroll_percentage_at_click: Math.round(scrollPercentage() * 100) / 100,
      had_impression: state.sent.has(keyFor(element)),
    };
    const checkout = element.dataset.analyticsCheckout === "true";
    captureEvent("cta_click", properties, checkout);
    if (checkout) {
      const rawPrice = `${pricing.currentPrice.replace(/[^\d]/g, "")}.${pricing.currentPriceCents}`;
      const price = Number(rawPrice);
      captureEvent("checkout_click", {
        ...properties,
        checkout_url: safeUrl(buildCheckoutUrl(element.getAttribute("href") ?? "")),
        product: `${brand.name} Planner Digital`,
        ...(Number.isFinite(price) ? { price, currency: "BRL" } : {}),
      }, true);
    }
  };

  // Attribute changes matter when the existing sticky bar is revealed without scrolling.
  const bar = document.getElementById("checkout-bar");
  const barObserver = bar && typeof MutationObserver !== "undefined" ? new MutationObserver(scheduleImpressions) : undefined;
  barObserver?.observe(bar!, { attributes: true, attributeFilter: ["aria-hidden"] });
  const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onScroll) : undefined;
  resizeObserver?.observe(document.documentElement);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  document.addEventListener("visibilitychange", scheduleImpressions);
  document.addEventListener("click", onClick, true);
  document.addEventListener("auxclick", onClick, true);
  sample();
  return () => {
    sectionObserver?.disconnect();
    ctaObserver?.disconnect();
    barObserver?.disconnect();
    resizeObserver?.disconnect();
    timers.forEach(timer => window.clearTimeout(timer));
    if (scrollTimer !== undefined) window.clearTimeout(scrollTimer);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    document.removeEventListener("visibilitychange", scheduleImpressions);
    document.removeEventListener("click", onClick, true);
    document.removeEventListener("auxclick", onClick, true);
  };
}
