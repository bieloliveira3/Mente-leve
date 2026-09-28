import Link from "next/link";
import { Logo } from "@/components/logo";
import { OfferCountdownBar } from "@/components/offer-countdown-bar";
import { ctaAttributes } from "@/lib/analytics/definitions";
import { supportWhatsApp } from "@/lib/content";

export function Header() {
  return (
    <div className="sticky top-0 z-40">
      <OfferCountdownBar />
      <header className="border-b border-border/60 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link {...ctaAttributes("header_home")} href="/#top" className="inline-flex items-center">
            <Logo />
          </Link>
          <a
            {...ctaAttributes("whatsapp_support")}
            href={supportWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-full bg-[#25D366] px-3 text-sm font-semibold text-white hover:bg-[#1ebe5d]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
              <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 12 22a11 11 0 0 0 8.5-18.5zM12 20.2a9.2 9.2 0 0 1-4.7-1.3l-.3-.2-3.8.7.7-3.7-.2-.3A9.2 9.2 0 1 1 12 20.2zm5.1-6.9c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1.1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.5.5 0 0 0 0-.4c-.1-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4.1c.6.2 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z" />
            </svg>
            Suporte
          </a>
        </div>
      </header>
    </div>
  );
}
