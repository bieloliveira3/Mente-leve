"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { checkoutBaseUrl } from "@/lib/content";
import { buildCheckoutUrl } from "@/lib/checkout-url";

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
        "h-auto min-h-14 w-full animate-pulse whitespace-normal rounded-full px-5 py-3 text-center text-base font-bold uppercase leading-tight tracking-wide sm:text-lg",
        className
      )}
    >
      <a
        href={checkoutBaseUrl}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={(event) => {
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
        <span className="block max-w-full whitespace-normal text-balance">{children}</span>
      </a>
    </Button>
  );
}
