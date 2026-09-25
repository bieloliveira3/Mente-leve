"use client";

import { Clock } from "lucide-react";
import { useCountdownToMidnight } from "@/hooks/use-countdown-to-midnight";
import { pricing } from "@/lib/content";

export function UrgencyBanner() {
  const countdown = useCountdownToMidnight();

  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 bg-background px-3 py-2 shadow-sm">
      <Clock className="h-4 w-4 animate-pulse text-primary" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-wide text-primary">
        {pricing.urgencyLabel}
      </span>
      <span className="text-xs text-muted-foreground" aria-live="polite">
        {countdown ? `— encerra em ${countdown}` : pricing.urgencyExpiryText}
      </span>
    </div>
  );
}
