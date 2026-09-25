import Link from "next/link";
import { Logo } from "@/components/logo";
import { OfferCountdownBar } from "@/components/offer-countdown-bar";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="sticky top-0 z-40">
      <OfferCountdownBar />
      <header className="border-b border-border/60 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/#top" className="inline-flex items-center">
            <Logo />
          </Link>
          <Button asChild className="h-8 w-auto rounded-lg px-3 text-sm font-medium">
            <a href="#pricing">Ver a oferta</a>
          </Button>
        </div>
      </header>
    </div>
  );
}
