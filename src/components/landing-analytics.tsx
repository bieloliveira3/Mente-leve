"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { startPageTracking } from "@/lib/analytics/tracking";

export function LandingAnalytics() {
  const pathname = usePathname();
  useEffect(() => startPageTracking(pathname), [pathname]);
  return null;
}
