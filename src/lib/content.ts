/**
 * Conteúdo central da landing page.
 *
 * Este arquivo é a ÚNICA fonte de verdade para todo o texto, preços e
 * ofertas exibidos no site. A ideia é que, para adaptar este template para
 * o SEU produto/nicho, baste editar os valores abaixo — nenhum componente
 * precisa ser tocado.
 */

export const brand = {
  name: "Mente Leve",
  tagline: "Planner Digital para Adultos com TDAH",
  supportEmail: "contato@menteleveplanner.com",
};

export const hero = {
  eyebrow: "Baseado em rotinas reais de quem vive com TDAH",
  headline: "Finalmente, um planner feito para o cérebro com TDAH.",
  subheadline:
    "Pare de se cobrar por não conseguir seguir planners \"normais\". O Mente Leve foi desenhado sem datas, sem culpa e com a flexibilidade que sua rotina precisa — para você organizar a vida no seu próprio ritmo.",
  trustBullets: [
    "Pagamento único, sem assinatura",
    "Acesso imediato após a compra",
    "Garantia de 30 dias",
  ],
  impactBadge: "50% de cada venda vai para instituições de apoio ao TDAH",
};

export const scienceSection = {
  title: "Um sistema pensado para o seu jeito de funcionar",
  paragraphs: [
    "O Mente Leve não é um planner qualquer com uma capa bonita. Cada página foi pensada a partir de como a atenção, a motivação e a memória funcionam em cérebros com TDAH.",
    "Em vez de datas fixas que geram culpa quando um dia é perdido, você tem sistemas flexíveis que se adaptam aos seus picos de energia e foco — para retomar de onde parou, sem drama.",
  ],
  points: [
    {
      title: "Sem datas, sem culpa",
      description: "Comece a usar em qualquer dia do ano, sem desperdiçar páginas quando a rotina muda.",
    },
    {
      title: "Divida tarefas grandes",
      description: "Modelos prontos para quebrar projetos grandes em passos pequenos e possíveis.",
    },
    {
      title: "Menos decisões, mais ação",
      description: "Estrutura clara para reduzir a paralisia de decisão na hora de começar o dia.",
    },
  ],
};

export const benefits = {
  title: "Projetado para você prosperar",
  whatsInside: {
    title: "O que vem dentro",
    items: [
      "Planejamentos diários, semanais e mensais sem data fixa",
      "Listas e rastreadores práticos para nunca mais esquecer o essencial",
      "Espaço para \"despejo de ideias\" sempre que a mente ficar cheia",
      "Modelos para dividir metas grandes em passos pequenos",
      "Controle financeiro simples, sem planilhas complicadas",
      "Rotinas de casa organizadas em blocos curtos e realistas",
      "Página de autocuidado para os dias mais difíceis",
      "E muito mais!",
    ],
  },
  forYourBrain: {
    title: "Benefícios para o seu cérebro",
    items: [
      "Reduza a sobrecarga com uma estrutura visual clara",
      "Mantenha-se motivado com rastreadores de progresso",
      "Crie rotinas que realmente funcionam no seu dia a dia",
      "Melhore o foco com técnicas adaptadas ao TDAH",
      "Diminua a ansiedade com planejamento sem pressão",
      "Celebre pequenas conquistas para fortalecer a autoestima",
    ],
  },
};

export type Bonus = {
  headline: string;
  description: string;
  pages: string;
  icon: "brain" | "sparkles" | "home" | "heart" | "calendar";
};

export const bonuses: Bonus[] = [
  {
    headline: "Guia de Exercícios para Explorar o TDAH",
    description:
      "Atividades práticas para entender melhor como o seu cérebro funciona e usar isso a seu favor no dia a dia.",
    pages: "+24 páginas",
    icon: "brain",
  },
  {
    headline: "Mapa das Emoções Escondidas",
    description:
      "Um guia visual para identificar sentimentos guardados e dar os primeiros passos rumo ao autoconhecimento.",
    pages: "+18 páginas",
    icon: "sparkles",
  },
  {
    headline: "Checklist de Casa em Ordem",
    description:
      "Rotina de limpeza dividida em blocos curtos, para manter a casa organizada sem virar um peso mental.",
    pages: "+6 páginas",
    icon: "home",
  },
  {
    headline: "Workbook de Bem-Estar Emocional",
    description:
      "Exercícios guiados para desenvolver autoconsciência, autoaceitação e mais equilíbrio emocional.",
    pages: "+12 páginas",
    icon: "heart",
  },
  {
    headline: "Diário de Padrões e Progresso",
    description:
      "Registre seu progresso ao longo do mês e identifique com clareza os pontos que merecem mais atenção.",
    pages: "+8 páginas",
    icon: "calendar",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
};

// ⚠️ Depoimentos de exemplo — troque pelos depoimentos reais dos seus
// clientes assim que tiver os primeiros resultados.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Já tentei vários planners e nenhum durava mais de uma semana comigo. Esse é diferente: não me sinto culpada quando pulo um dia, e o espaço de despejo de ideias salvou minha rotina.",
    author: "Camila R.",
  },
  {
    quote:
      "O fato de não ter data fixa mudou tudo. Eu começo quando quero, no meu ritmo, e sinto que o planner finalmente trabalha comigo — não contra mim.",
    author: "Rafael T.",
  },
  {
    quote:
      "Design simples, direto ao ponto, sem enfeite que distrai. Minha organização melhorou muito desde que comecei a usar todos os dias.",
    author: "Bianca S.",
  },
];

// ⚠️ IMPORTANTE: confirme o nome completo da pessoa da foto e preencha o
// CRM (deixe `crm` vazio para não exibir). Divulgação de serviço médico no
// Brasil exige identificação profissional, e credencial real é o maior
// gatilho de autoridade deste nicho — nunca use uma credencial falsa.
export const creatorStory = {
  name: "Dra. Aline",
  role: "Médica e idealizadora do Mente Leve",
  crm: "",
  photo: "/images/creator/criadora-cerebro.webp",
  photoAlt:
    "Dra. Aline, médica e idealizadora do Mente Leve, segurando um modelo anatômico de cérebro",
  credentialBadge: "Atendimento clínico há mais de 10 anos",
  paragraphs: [
    "\"No consultório, eu ouvia a mesma frase quase todos os dias: 'eu sei o que preciso fazer, só não consigo começar'. E eu conhecia bem essa sensação — como adulta com TDAH, minha mesa foi por anos um mar de post-its e cadernos pela metade.\"",
    "\"Depois de testar (e abandonar) dezenas de métodos, entendi que o problema não era o paciente, nem eu: era o sistema, que nunca respeitou como esse cérebro realmente funciona.\"",
    "\"Criei o Mente Leve como a ferramenta que eu queria ter tido: uma que se adapta ao seu cérebro, e não o contrário. E decidi que metade de cada venda voltaria para quem cuida de quem mais precisa.\"",
  ],
};

/**
 * Impacto social da oferta — um diferencial real de posicionamento frente
 * aos concorrentes do nicho, que competem apenas por preço.
 * Ajuste os textos e, se possível, cite as instituições parceiras pelo nome
 * (prova concreta converte muito mais do que promessa genérica).
 */
export const socialImpact = {
  highlight: "50%",
  eyebrow: "Compra com propósito",
  title: "Metade de cada venda vai para quem cuida de pessoas com TDAH",
  description:
    "50% do valor de cada planner vendido é destinado a instituições que acolhem crianças e adultos com TDAH — ajudando a custear diagnóstico, terapia e suporte para famílias que não têm acesso a esse cuidado.",
  pillars: [
    {
      title: "Crianças com TDAH",
      description:
        "Apoio a projetos de diagnóstico precoce e acompanhamento escolar, para que nenhuma criança seja rotulada de \"preguiçosa\".",
    },
    {
      title: "Adultos com TDAH",
      description:
        "Ajuda no acesso a terapia e grupos de apoio para adultos que passaram a vida inteira sem entender o próprio funcionamento.",
    },
    {
      title: "Transparência total",
      description:
        "Publicamos periodicamente o valor repassado e as instituições beneficiadas, para você acompanhar onde sua compra chegou.",
    },
  ],
  closingLine:
    "Ou seja: ao organizar a sua rotina, você também paga parte do cuidado de alguém que não teria como pagar.",
};

export const pricing = {
  badge: "MAIS POPULAR",
  discountBadge: "72% OFF",
  originalPrice: "R$ 97,00",
  currentPrice: "R$ 27",
  currentPriceCents: "00",
  offerLabel: "Oferta de lançamento",
  scarcityNote: "Essa condição promocional pode sair do ar a qualquer momento.",
  pageCountNote: "Planner com mais de 150 páginas",
  features: [
    "Acesse e preencha de onde quiser: celular, tablet ou computador",
    "Planner em PDF, pronto para imprimir",
    "Layouts flexíveis e sem datas fixas",
    "+150 formas de colocar as coisas em prática",
    "Imprima quantas vezes quiser",
    "Atualizações grátis para sempre",
  ],
  bonusSectionTitle: "🎁 Bônus inclusos",
  ctaLabel: "GARANTIR MEU PLANNER",
  ctaLabelShort: "GARANTIR AGORA",
  impactNote: "50% da sua compra vai para instituições de cuidado com TDAH",
  guaranteeNote: "🛡️ Garantia de 30 dias ou seu dinheiro de volta",
  paymentNote: "Pagamento único. Sem assinaturas.",
  urgencyLabel: "Bônus por tempo limitado",
  urgencyExpiryText: "Válido até hoje às 23h59",
};

export const guarantee = {
  title: "Experimente sem risco por 30 dias",
  description:
    "Temos uma garantia de satisfação de 30 dias. Se você sentir que o planner não atendeu às suas expectativas, é só nos contatar dentro desse prazo para um reembolso total, sem burocracia.",
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Como funciona o planner?",
    answer:
      "Você recebe um arquivo em PDF de alta qualidade, nos tamanhos A4 e A5, pronto para imprimir em casa ou em gráfica. Pode imprimir quantas páginas precisar, quantas vezes quiser. Recomendamos papel de gramatura média a alta para maior durabilidade.",
  },
  {
    question: "Como recebo o planner após a compra?",
    answer:
      "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link de acesso ao seu planner em PDF. O processo é instantâneo.",
  },
  {
    question: "É um pagamento único ou uma assinatura?",
    answer:
      "É 100% pagamento único. Você compra uma vez e tem acesso vitalício ao planner e a todas as atualizações futuras, sem nenhuma taxa recorrente.",
  },
  {
    question: "E se não funcionar para mim?",
    answer:
      "Você tem 30 dias de garantia. Se sentir que o planner não atendeu às suas expectativas, basta nos contatar dentro desse prazo para um reembolso total, sem complicação.",
  },
  {
    question: "Preciso ter diagnóstico de TDAH para usar?",
    answer:
      "Não. O planner foi desenvolvido para ajudar qualquer pessoa que se identifique com os desafios do TDAH, mesmo sem diagnóstico formal. As estratégias funcionam para quem busca mais foco e organização no dia a dia.",
  },
];

/**
 * Rodapé no padrão usado por páginas de venda que convertem bem:
 * navegação por âncoras + suporte + links legais + selos de confiança +
 * aviso legal. Cada bloco é editável de forma independente.
 */
export const footer = {
  description:
    "Ferramentas de organização pensadas para mentes que funcionam fora da caixa. Metade de cada venda é destinada a instituições de cuidado com pessoas com TDAH.",
  columns: [
    {
      title: "Legal",
      links: [
        { label: "Termos de uso", href: "/termos" },
        { label: "Política de privacidade", href: "/privacidade" },
        { label: "Política de reembolso", href: "/reembolso" },
      ],
    },
  ],
  trustBadges: [
    "Compra 100% segura",
    "Garantia de 30 dias",
    "Pix, cartão ou boleto",
    "Acesso imediato",
  ],
  disclaimer:
    "O Mente Leve é um material educacional de organização pessoal. Ele não realiza diagnóstico e não substitui avaliação, tratamento ou acompanhamento por profissional de saúde qualificado. Resultados variam de pessoa para pessoa.",
  copyrightName: "Mente Leve",
};

/**
 * URL de checkout do produto (Hotmart, Kiwify, Stripe, etc.).
 * Configure a variável de ambiente NEXT_PUBLIC_CHECKOUT_URL para apontar
 * para o seu link de checkout real. Enquanto isso, o botão leva para uma
 * página interna explicando como configurar.
 */
export const checkoutBaseUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_URL && process.env.NEXT_PUBLIC_CHECKOUT_URL.length > 0
    ? process.env.NEXT_PUBLIC_CHECKOUT_URL
    : "/checkout";
