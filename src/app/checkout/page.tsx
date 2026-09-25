import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutPlaceholderPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16 text-center">
      <div className="max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Configure seu link de checkout
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Este é um espaço reservado. Para conectar a um checkout real (Hotmart, Kiwify,
          Stripe, etc.), defina a variável de ambiente{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-semibold text-foreground">
            NEXT_PUBLIC_CHECKOUT_URL
          </code>{" "}
          apontando para o seu link de pagamento. O botão &quot;Garantir meu planner&quot;
          passará a levar direto para lá, preservando os parâmetros de UTM da campanha.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar para a página inicial
            </Link>
          </Button>
          <Button asChild>
            <a
              href="https://developers.hotmart.com/docs/pt-BR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver documentação da Hotmart
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
