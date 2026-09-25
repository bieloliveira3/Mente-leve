import Image from "next/image";
import { Section } from "@/components/layout/section";
import { productShowcase } from "@/lib/content";

export function ProductSection() {
  return (
    <Section id="produto-secao" className="bg-secondary/50">
      <h2 className="text-center font-heading text-3xl font-bold text-foreground sm:text-4xl">
        {productShowcase.title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">{productShowcase.note}</p>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-8">
        <Image
          src="/images/hero/planner-tablet.webp"
          alt="Planner Mente Leve no tablet e no celular, com a página de planejamento da semana"
          width={1312}
          height={1199}
          quality={90}
          sizes="(max-width: 768px) 100vw, 56rem"
          className="h-auto w-full rounded-3xl shadow-xl"
        />
        <div id="produto" className="w-full">
          <Image
            src="/images/hero/bonus-ebooks.webp"
            alt="Cinco ebooks de bônus: Guia Explorar o TDAH, Mapa das Emoções, Checklist Casa em Ordem, Workbook Bem-Estar e Diário Padrões e Progresso"
            width={1312}
            height={1199}
            sizes="(max-width: 768px) 100vw, 56rem"
            className="h-auto w-full rounded-3xl shadow-xl"
          />
        </div>
      </div>

    </Section>
  );
}
