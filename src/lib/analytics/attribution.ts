export const campaignKeys = [
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id",
  "fbclid", "gclid", "msclkid", "wbraid", "gbraid", "src", "sck",
] as const;

type Attribution = Partial<Record<(typeof campaignKeys)[number], string>>;
type StoredAttribution = { sessionId?: string; values: Attribution; updatedAt: number };
const STORAGE_KEY = "mente-leve-campaign-v1";
const SESSION_IDLE_MS = 30 * 60 * 1000;
let memory: StoredAttribution | undefined;

export function readCampaign(search: string): Attribution {
  const params = new URLSearchParams(search);
  const values: Attribution = {};
  for (const key of campaignKeys) {
    const value = params.get(key)?.trim();
    // Campaign labels must not contain personal data. Ignore obvious private values.
    if (value && value.length <= 512 && !/@|\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/.test(value)) values[key] = value;
  }
  return values;
}

/** The real session ID comes from PostHog. No custom visitor/session identifier. */
export function getAttribution(sessionId?: string): Attribution {
  if (typeof window === "undefined") return {};
  if (!memory) {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as StoredAttribution;
        if (saved && typeof saved.updatedAt === "number" && saved.values && typeof saved.values === "object") {
          // Revalidate stored values rather than trusting arbitrary storage contents.
          memory = { ...saved, values: readCampaign(new URLSearchParams(saved.values).toString()) };
        }
      }
    } catch { /* Storage blocked: keep attribution in memory. */ }
  }
  const expired = !memory || Date.now() - memory.updatedAt > SESSION_IDLE_MS;
  const changedSession = sessionId && memory?.sessionId && sessionId !== memory.sessionId;
  if (expired || changedSession) memory = { sessionId, values: readCampaign(window.location.search), updatedAt: Date.now() };
  const current = memory!;
  current.sessionId = sessionId ?? current.sessionId;
  current.updatedAt = Date.now();
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current)); } catch { /* No storage dependency. */ }
  return { ...current.values };
}

/** Send no query strings, fragment values, embedded credentials, or mailto addresses. */
export function safeUrl(value: string): string {
  if (value.startsWith("#")) return /^#[\w-]+$/.test(value) ? value : "#";
  try {
    const url = new URL(value, typeof window === "undefined" ? "https://example.invalid" : window.location.origin);
    if (url.protocol === "mailto:") return "mailto:support";
    if (!/^https?:$/.test(url.protocol)) return "redacted";
    return `${url.origin}${url.pathname}`;
  } catch { return "redacted"; }
}
