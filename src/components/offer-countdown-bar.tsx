"use client";

import { useCountdownToMidnight } from "@/hooks/use-countdown-to-midnight";

export function OfferCountdownBar() {
  const time = useCountdownToMidnight();

  return (
    <div className="bg-primary px-3 py-1.5 text-center text-xs font-semibold text-primary-foreground sm:text-sm">
      A oferta acaba em{" "}
      <span className="tabular-nums">{time ?? "--:--:--"}</span>
    </div>
  );
}
