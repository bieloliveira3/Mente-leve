# Mente Leve — Landing Page de Infoproduto

Landing page de alta conversão para venda de um planner digital (nicho TDAH),
construída com **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**
e **shadcn/ui**.

A estrutura, os mecanismos de conversão (ancoragem de preço, escassez,
garantia, stack de bônus, prova social, passthrough de UTM para o checkout)
foram desenhados a partir da análise de um funil real em escala no mesmo
nicho — ver seção [Origem e análise](#origem-e-análise) abaixo.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` (ou a porta configurada).

Para build de produção:

```bash
npm run build
npm start
```

## Configurando o checkout

O botão de compra usa a URL definida em `NEXT_PUBLIC_CHECKOUT_URL` (ver
`.env.example`). Copie para `.env.local` e aponte para o seu link de
checkout real (Hotmart, Kiwify, Stripe, etc.):

```bash
cp .env.example .env.local
```

Se a variável não for definida, o botão leva para `/checkout`, uma página
interna que explica o próximo passo — assim o site nunca fica com um link
morto.

Todos os parâmetros de rastreio que chegarem na landing page pela URL
(`utm_source`, `utm_campaign`, `utm_content`, `fbclid`, `gclid` etc.) são
automaticamente propagados para o link de checkout, para preservar a
atribuição da campanha de anúncios até a venda. Essa lógica está em
`src/lib/checkout-url.ts`.

## Como customizar para o seu produto

Todo o texto, preços, bônus, depoimentos e perguntas frequentes vivem em um
único arquivo:

```
src/lib/content.ts
```

Edite esse arquivo para adaptar a página ao seu produto/nicho — nenhum
componente React precisa ser tocado. Pontos de atenção:

- **`testimonials`**: os depoimentos atuais são placeholders para
  demonstrar o layout. Troque pelos depoimentos reais dos seus clientes.
- **`creatorStory`**: história fictícia de exemplo — substitua pela sua
  história ou pela da pessoa que representa a marca.
- **`pricing`**: preço âncora, preço promocional, bônus e textos de
  escassez/garantia.
- **`checkoutBaseUrl`**: lido de `NEXT_PUBLIC_CHECKOUT_URL` (ver acima).

O mockup do planner no hero (`src/components/planner-mockup.tsx`) é feito só
com CSS/ícones, sem depender de fotos — troque por um `<Image />` com o mockup
real do seu produto quando tiver um.

## Estrutura do projeto

```
src/
  app/
    page.tsx            página principal (compõe todas as seções)
    checkout/page.tsx    fallback quando NEXT_PUBLIC_CHECKOUT_URL não está definida
    layout.tsx           fontes, metadata, HTML base
    globals.css           tema de cores (Tailwind v4 + shadcn)
  components/
    layout/               Header, Footer, Section (wrapper de largura/espaçamento)
    sections/              cada seção da página (hero, preço, FAQ, bônus, etc.)
    ui/                    componentes shadcn/ui (button, accordion, card, badge)
    checkout-button.tsx    botão de CTA com passthrough de UTM
    sticky-mobile-cta.tsx  barra fixa de compra no mobile
    urgency-banner.tsx     contador de urgência (expira à meia-noite)
    planner-mockup.tsx     mockup de capa 100% CSS/ícones
  hooks/
    use-countdown-to-midnight.ts
  lib/
    content.ts             ⭐ todo o copy/preço/oferta do site
    checkout-url.ts         lógica de passthrough de UTM
    utils.ts                helper `cn` do shadcn
```

## Origem e análise

Este projeto nasceu da análise de um funil de vendas real e em escala no
nicho de planners digitais para TDAH:

- **Estrutura de página**: hero → "como funciona" (ciência) → benefícios →
  stack de bônus → depoimentos → história da criadora → card de preço →
  garantia → FAQ → footer, com uma barra de compra fixa no mobile.
- **Mecânica de preço**: preço âncora riscado + preço promocional em
  destaque + rótulo de "oferta por tempo limitado" + escassez textual.
- **Garantia**: 30 dias, sem burocracia, reforçada perto do CTA.
- **Escala em anúncios**: o funil original roda dezenas de anúncios ativos
  simultâneos no Meta Ads (Facebook/Instagram), com múltiplas variações de
  criativo e copy (testes A/B), segmentação global, página localizada em
  espanhol e uma página de remarketing dedicada — todas usando parâmetros de
  UTM únicos por anúncio para rastrear performance até o checkout.

Este template reproduz a **estrutura e os mecanismos de conversão** que
tornaram esse funil eficaz, com copy e marca 100% originais — pronto para
você adaptar ao seu próprio produto.
