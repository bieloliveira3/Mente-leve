"use client";

import { useEffect, useState } from "react";

function getRemaining(): { hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const diffMs = Math.max(0, end.getTime() - now.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

/**
 * Contagem regressiva até às 23:59:59 do dia atual (horário local do
 * visitante). Usada para reforçar a urgência da oferta, como no funil
 * original analisado ("Válido até hoje às 23h59").
 */
export function useCountdownToMidnight(): string | null {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const { hours, minutes, seconds } = getRemaining();
      setLabel(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return label;
}
