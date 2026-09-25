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
  headline: "Sua cabeça está cheia de coisas.",
  headlineAccent: "O Mente Leve transforma esse caos em um caminho claro.",
  subheadline:
    "Um sistema de organização pensado para adultos com TDAH ou que têm dificuldade para manter foco, rotina e organização — sem transformar sua vida em mais uma lista impossível de cumprir.",
  cta: "Quero o Mente Leve",
  trustLine: "Pagamento único • Acesso imediato • Garantia de 30 dias",
};

export const painPoints = {
  title: "Talvez o problema não seja falta de vontade.",
  items: [
    "Começa várias coisas e termina poucas",
    "Sabe o que precisa fazer, mas não consegue começar",
    "Se perde em listas enormes",
    "Esquece tarefas importantes",
    "Sente a cabeça constantemente cheia",
    "Abandona planners porque parecem difíceis demais de manter",
  ],
};

export const method = {
  title: "Da cabeça cheia para o próximo passo.",
  closing: "Você não precisa ser perfeitamente organizado para conseguir se organizar.",
  steps: [
    { number: "01", title: "Despeje", description: "Tire as coisas da cabeça." },
    { number: "02", title: "Organize", description: "Transforme o caos em algo visual." },
    { number: "03", title: "Escolha", description: "Defina o que realmente importa agora." },
    { number: "04", title: "Retome", description: "Se um dia sair do controle, simplesmente volte." },
  ],
};

export const productShowcase = {
  title: "Veja o que você leva para casa.",
  note: "Planejamentos diários, semanais e mensais, sem data fixa.",
  labels: [
    "Organização diária",
    "Semana",
    "Mês",
    "Foco",
    "Projetos",
    "Rotina",
    "Reflexão",
    "Acompanhamento",
  ],
};

export const differentials = {
  title: "Feito para funcionar com você — não contra você.",
  items: [
    { title: "Sem datas rígidas", description: "Você pode começar quando quiser." },
    { title: "Menos decisões", description: "Organize o que realmente importa." },
    { title: "Tarefas mais simples", description: "Transforme grandes problemas em próximos passos." },
    { title: "Recomeço sem culpa", description: "Perdeu alguns dias? Basta continuar." },
  ],
};

export const finalCta = {
  title: "Menos caos na cabeça.",
  titleAccent: "Mais clareza para o próximo passo.",
  text: "Um planner para usar no seu ritmo, com pagamento único e 30 dias para decidir se faz sentido.",
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
  photo: string;
  photoAlt: string;
};

// ⚠️ Depoimentos de exemplo — troque pelos depoimentos reais dos seus
// clientes assim que tiver os primeiros resultados.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Já tentei vários planners e nenhum durava mais de uma semana comigo. Esse é diferente: não me sinto culpada quando pulo um dia, e o espaço de despejo de ideias salvou minha rotina.",
    author: "Camila R.",
    photo: "/images/testimonials/camila.webp",
    photoAlt: "Camila R.",
  },
  {
    quote:
      "O fato de não ter data fixa mudou tudo. Eu começo quando quero, no meu ritmo, e sinto que o planner finalmente trabalha comigo — não contra mim.",
    author: "Rafael T.",
    photo: "/images/testimonials/rafael.webp",
    photoAlt: "Rafael T.",
  },
  {
    quote:
      "Design simples, direto ao ponto, sem enfeite que distrai. Minha organização melhorou muito desde que comecei a usar todos os dias.",
    author: "Bianca S.",
    photo: "/images/testimonials/bianca.webp",
    photoAlt: "Bianca S.",
  },
];

// ⚠️ IMPORTANTE: confirme o nome completo da pessoa da foto e preencha o
// CRM (deixe `crm` vazio para não exibir). Divulgação de serviço médico no
// Brasil exige identificação profissional, e credencial real é o maior
// gatilho de autoridade deste nicho — nunca use uma credencial falsa.
export const creatorStory = {
  name: "Dra. Aline Vieira",
  role: "Médica e idealizadora do Mente Leve",
  crm: "",
  photo: "/images/creator/criadora-cerebro.webp",
  photoAlt: "Dra. Aline Vieira, idealizadora do Mente Leve",
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
  bonusSectionTitle: "Bônus inclusos",
  ctaLabel: "Quero o Mente Leve por R$27",
  ctaLabelShort: "Garantir agora",
  impactNote: "50% da sua compra vai para instituições de cuidado com TDAH",
  guaranteeNote: "🛡️ Garantia de 30 dias ou seu dinheiro de volta",
  paymentNote: "Pagamento único. Sem assinaturas.",
  urgencyLabel: "Bônus por tempo limitado",
  urgencyExpiryText: "Válido até hoje às 23h59",
};

export const guarantee = {
  title: "30 dias para conhecer",
  description:
    "Você tem 30 dias para conhecer o Mente Leve. Se não fizer sentido para você, utilize as condições de reembolso já previstas na oferta.",
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Como recebo o acesso?",
    answer:
      "Depois da confirmação do pagamento, o acesso ao PDF chega por e-mail. O envio é imediato.",
  },
  {
    question: "O pagamento é único?",
    answer:
      "Sim. Você paga uma vez e não há assinatura nem cobrança recorrente.",
  },
  {
    question: "Posso usar no celular ou tablet?",
    answer:
      "Sim. O arquivo pode ser aberto no celular, no tablet ou no computador.",
  },
  {
    question: "Posso imprimir?",
    answer:
      "Sim. O planner vem em PDF pronto para imprimir, quantas vezes você quiser.",
  },
  {
    question: "Quais formatos estão disponíveis?",
    answer: "O material é entregue em PDF, nos tamanhos A4 e A5.",
  },
  {
    question: "Preciso ter TDAH para usar?",
    answer:
      "Não. Ele serve para quem se identifica com essa dificuldade de foco e organização, com ou sem diagnóstico.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. São 30 dias. Se não fizer sentido, vale o que está na política de reembolso da oferta.",
  },
  {
    question: "O Mente Leve substitui acompanhamento profissional?",
    answer:
      "Não. É um material educacional de organização. Não faz diagnóstico e não substitui avaliação, tratamento ou acompanhamento de um profissional de saúde.",
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
 * URL de checkout do produto. NEXT_PUBLIC_CHECKOUT_URL substitui o padrão
 * quando estiver definida.
 */
export const checkoutBaseUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_URL && process.env.NEXT_PUBLIC_CHECKOUT_URL.length > 0
    ? process.env.NEXT_PUBLIC_CHECKOUT_URL
    : "https://pay.cakto.com.br/3am8wy3_1137980";
