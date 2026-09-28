import { initializeAnalytics } from "./lib/analytics/client";

// No blocking work before hydration. All SDK calls stay in lib/analytics.
void initializeAnalytics();
