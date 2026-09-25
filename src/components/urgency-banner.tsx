import { pricing } from "@/lib/content";

export function UrgencyBanner() {
  return (
    <p className="text-center text-xs text-muted-foreground">
      {pricing.urgencyLabel}
      <span className="mx-1">·</span>
      encerra em{" "}
      <span id="urgency-countdown" className="tabular-nums font-semibold text-foreground">
        24:00:00
      </span>
    </p>
  );
}
