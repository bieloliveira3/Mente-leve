import Link from "next/link";
import { CheckoutButton } from "@/components/checkout-button";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/#top" className="inline-flex items-center">
          <Logo />
        </Link>
        <CheckoutButton className="hidden h-8 w-auto animate-none rounded-lg px-3 text-sm font-medium normal-case tracking-normal sm:inline-flex">
          Garantir o meu
        </CheckoutButton>
        <CheckoutButton className="h-8 w-auto animate-none rounded-lg px-3 text-sm font-medium normal-case tracking-normal sm:hidden">
          Quero o meu
        </CheckoutButton>
      </div>
    </header>
  );
}
