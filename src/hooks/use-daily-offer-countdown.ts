"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mente-leve-offer-timer";
const DAY_MS = 24 * 60 * 60 * 1000;

type StoredDeadline = {
  day: string;
  endsAt: number;
};

let memoryDeadline: StoredDeadline | null = null;

function localDay(date = new Date()): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function readDeadline(): number {
  const today = localDay();
  const now = Date.now();

  if (memoryDeadline && memoryDeadline.day === today && memoryDeadline.endsAt > now) {
    return memoryDeadline.endsAt;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw) as StoredDeadline;
      if (stored.day === today && stored.endsAt > now) {
        memoryDeadline = stored;
        return stored.endsAt;
      }
    }
  } catch {
    // armazenamento bloqueado: segue com a memória desta visita
  }

  const fresh: StoredDeadline = { day: today, endsAt: now + DAY_MS };
  memoryDeadline = fresh;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  } catch {
    // sem localStorage o prazo vale só enquanto a aba estiver aberta
  }
  return fresh.endsAt;
}

function formatRemaining(endsAt: number): string {
  const totalSeconds = Math.max(0, Math.floor((endsAt - Date.now()) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

/**
 * Contagem de 24h por visitante. O prazo fica salvo no navegador: se a
 * pessoa sair e voltar no mesmo dia, o tempo continua de onde o relógio
 * real chegou. Um novo dia zera e começa outras 24h.
 */
export function useDailyOfferCountdown(): string {
  const [time, setTime] = useState("24:00:00");

  useEffect(() => {
    const update = () => setTime(formatRemaining(readDeadline()));
    const firstTick = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 1000);
    return () => {
      window.clearTimeout(firstTick);
      window.clearInterval(interval);
    };
  }, []);

  return time;
}
