import Image from "next/image";
import { Section } from "@/components/layout/section";

export function ProductSection() {
  return (
    <Section id="bonus">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        E mais 5 ebooks de bônus
      </h2>
      <Image
        src="/images/hero/bonus-ebooks.webp"
        alt="Cinco ebooks de bônus: Guia Explorar o TDAH, Mapa das Emoções, Checklist Casa em Ordem, Workbook Bem-Estar e Diário Padrões e Progresso"
        width={1312}
        height={1199}
        sizes="(max-width: 768px) 100vw, 56rem"
        className="mx-auto mt-8 h-auto w-full max-w-4xl rounded-3xl shadow-xl"
      />
    </Section>
  );
}
