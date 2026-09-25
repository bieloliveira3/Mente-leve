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

      <div className="mt-10 grid items-center gap-8 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-12">
        <Image
          src="/images/hero/capa-livro-3.webp"
          alt="Capa do Planner Mente Leve"
          width={744}
          height={1135}
          quality={92}
          sizes="(max-width: 768px) 220px, 280px"
          className="mx-auto h-auto w-[200px] sm:w-[240px]"
        />
        <div id="produto">
          <Image
            src="/images/hero/produto.webp"
            alt="Planner Mente Leve no tablet e no celular, com cinco ebooks de bônus"
            width={2128}
            height={2548}
            sizes="(max-width: 768px) 100vw, 36rem"
            className="h-auto w-full rounded-3xl shadow-xl"
          />
        </div>
      </div>

    </Section>
  );
}
