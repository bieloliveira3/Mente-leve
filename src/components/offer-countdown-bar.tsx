"use client";

import { useDailyOfferCountdown } from "@/hooks/use-daily-offer-countdown";

export function OfferCountdownBar() {
  const time = useDailyOfferCountdown();

  return (
    <div className="bg-primary px-3 py-1.5 text-center text-xs font-semibold text-primary-foreground sm:text-sm">
      A oferta acaba em{" "}
      <span className="tabular-nums">{time}</span>
    </div>
  );
}
