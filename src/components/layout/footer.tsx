import Link from "next/link";
import {
  Clock,
  CreditCard,
  HeartHandshake,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { brand, footer, pricing } from "@/lib/content";

const badgeIcons = [Lock, ShieldCheck, CreditCard, Clock];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary text-secondary-foreground">
      {/* Última chamada — padrão comum em páginas que vendem bem: o rodapé
          começa com um CTA final antes dos links institucionais. */}
      <div className="border-b border-secondary-foreground/10 px-4 py-10 text-center sm:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Pronto para organizar a vida sem brigar com a própria cabeça?
          </h2>
          <p className="mt-3 text-sm text-secondary-foreground/75 sm:text-base">
            {pricing.originalPrice} por apenas {pricing.currentPrice},
            {pricing.currentPriceCents} — pagamento único, acesso imediato e{" "}
            {pricing.guaranteeNote.replace("🛡️ ", "").toLowerCase()}.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] sm:text-base"
            >
              Ver a oferta completa
            </Link>
          </div>
        </div>
      </div>

      {/* Selos de confiança */}
      <div className="border-b border-secondary-foreground/10 px-4 py-6 sm:px-6">
        <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {footer.trustBadges.map((badge, index) => {
            const Icon = badgeIcons[index % badgeIcons.length];
            return (
              <li
                key={badge}
                className="flex items-center gap-2 text-xs font-semibold text-secondary-foreground/80 sm:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {badge}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Colunas institucionais */}
      <div className="px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          <div>
            <Link href="/#top" className="inline-flex">
              <Logo className="h-14" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
              {footer.description}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <HeartHandshake className="h-3.5 w-3.5 shrink-0" aria-hidden />
              50% das vendas doados
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
