"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { checkoutBaseUrl } from "@/lib/content";
import { buildCheckoutUrl } from "@/lib/checkout-url";
import { trackInitiateCheckout } from "@/lib/meta-pixel";

export function CheckoutButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isExternal = !checkoutBaseUrl.startsWith("/");

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "h-12 w-full animate-pulse rounded-full px-4 text-sm font-bold uppercase tracking-normal sm:h-14 sm:text-base",
        className
      )}
    >
      <a
        href={checkoutBaseUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={(event) => {
          trackInitiateCheckout();
          const finalUrl = buildCheckoutUrl(checkoutBaseUrl);
          if (finalUrl === checkoutBaseUrl) return;
          event.preventDefault();
          if (isExternal) {
            window.open(finalUrl, "_blank", "noopener,noreferrer");
          } else {
            window.location.href = finalUrl;
          }
        }}
      >
        <span className="whitespace-nowrap">{children}</span>
      </a>
    </Button>
  );
}
