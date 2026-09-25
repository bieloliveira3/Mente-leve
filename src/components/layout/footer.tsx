import { brand, footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary px-4 py-10 text-center text-secondary-foreground sm:px-6">
      <p className="font-heading text-xl font-bold tracking-tight">{brand.name}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-secondary-foreground/70">
        {footer.description}
      </p>
      <p className="mt-4 text-xs text-secondary-foreground/60">
        Dúvidas? Fale com a gente:{" "}
        <a href={`mailto:${brand.supportEmail}`} className="underline">
          {brand.supportEmail}
        </a>
      </p>
      <p className="mt-2 text-xs text-secondary-foreground/50">
        © {new Date().getFullYear()} {footer.copyrightName}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
