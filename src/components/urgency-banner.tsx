import { Clock } from "lucide-react";
import { pricing } from "@/lib/content";

export function UrgencyBanner() {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 bg-background px-3 py-2 shadow-sm">
      <Clock className="h-4 w-4 animate-pulse text-primary" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-wide text-primary">
        {pricing.urgencyLabel}
      </span>
      <span className="text-xs text-muted-foreground">
        — encerra em{" "}
        <span id="urgency-countdown" className="tabular-nums" aria-live="polite">
          24:00:00
        </span>
      </span>
    </div>
  );
}
