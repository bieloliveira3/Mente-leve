export const META_PIXEL_ID = "1344965854179273";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    __metaIc?: boolean;
  }
}

export function trackInitiateCheckout() {
  if (typeof window.fbq !== "function") return;
  if (window.__metaIc) return;
  window.__metaIc = true;
  window.setTimeout(() => {
    window.__metaIc = false;
  }, 0);
  window.fbq("track", "InitiateCheckout");
}
