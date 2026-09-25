"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "mente-leve-offer-timer";
const DAY_MS = 24 * 60 * 60 * 1000;

type StoredDeadline = {
  day: string;
  endsAt: number;
};

function localDay(date = new Date()): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function readDeadline(): number {
  const today = localDay();
  const now = Date.now();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw) as StoredDeadline;
      if (stored.day === today && stored.endsAt > now) return stored.endsAt;
    }
  } catch {
    // valor inválido: começa um ciclo novo
  }

  const fresh: StoredDeadline = { day: today, endsAt: now + DAY_MS };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  return fresh.endsAt;
}

function formatRemaining(endsAt: number, now = Date.now()): string {
  const totalSeconds = Math.max(0, Math.floor((endsAt - now) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

let cachedSecond = -1;
let cachedLabel = "--:--:--";

function getSnapshot(): string {
  const second = Math.floor(Date.now() / 1000);
  if (second !== cachedSecond) {
    cachedSecond = second;
    cachedLabel = formatRemaining(readDeadline(), second * 1000);
  }
  return cachedLabel;
}

function getServerSnapshot(): string {
  return "--:--:--";
}

function subscribe(onChange: () => void): () => void {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/**
 * Contagem de 24h por visitante. O prazo fica salvo no navegador: se a
 * pessoa sair e voltar no mesmo dia, o tempo continua de onde o relógio
 * real chegou. Um novo dia zera e começa outras 24h.
 */
export function useDailyOfferCountdown(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
