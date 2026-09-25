import Link from "next/link";
import { Logo } from "@/components/logo";
import { brand, footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary text-secondary-foreground">
      {/* Colunas institucionais */}
      <div className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          <div>
            <Link href="/#top" className="inline-flex">
              <Logo className="h-8 sm:h-8" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
              {footer.description}
            </p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-secondary-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Aviso legal e copyright */}
      <div className="border-t border-secondary-foreground/10 px-4 pb-28 pt-8 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs leading-relaxed text-secondary-foreground/60">
            {footer.disclaimer}
          </p>
          <p className="mt-4 text-xs text-secondary-foreground/70">
            Dúvidas? Fale com a gente:{" "}
            <a href={`mailto:${brand.supportEmail}`} className="underline hover:text-primary">
              {brand.supportEmail}
            </a>
          </p>
          <p className="mt-2 text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} {footer.copyrightName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
