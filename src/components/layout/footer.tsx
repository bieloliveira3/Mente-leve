import Link from "next/link";
import { Logo } from "@/components/logo";
import { brand, footer } from "@/lib/content";

export function Footer() {
  const legalLinks = footer.columns.flatMap((column) => column.links);

  return (
    <footer className="border-t border-border/70 bg-card text-foreground">
      <div className="mx-auto flex max-w-xl flex-col items-center px-5 pb-28 pt-12 text-center">
        <Link href="/#top" className="inline-flex">
          <Logo className="h-9 sm:h-9" />
        </Link>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {footer.description}
        </p>

        <nav aria-label="Legal" className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 max-w-md text-[11px] leading-relaxed text-muted-foreground">
          {footer.disclaimer}
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          <a href={`mailto:${brand.supportEmail}`} className="hover:text-primary">
            {brand.supportEmail}
          </a>
          <span className="mx-2 text-border" aria-hidden>
            ·
          </span>
          © {new Date().getFullYear()} {footer.copyrightName}
        </p>
      </div>
    </footer>
  );
}
