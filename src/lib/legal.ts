/**
 * Conteúdo das páginas legais linkadas no rodapé.
 *
 * ⚠️ Estes textos são um ponto de partida genérico, NÃO são consultoria
 * jurídica. Revise com um advogado e preencha os dados da sua empresa antes
 * de rodar tráfego pago — plataformas de anúncio e de pagamento costumam
 * exigir essas páginas preenchidas corretamente.
 */

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

const company = "Mente Leve";
const supportEmail = "contato@menteleveplanner.com";

export const legalDocuments: Record<string, LegalDocument> = {
  termos: {
    slug: "termos",
    title: "Termos de uso",
    updatedAt: "setembro de 2026",
    intro: `Estes termos regem a compra e o uso do produto digital ${company}. Ao finalizar a compra, você declara que leu e concorda com as condições abaixo.`,
    sections: [
      {
        heading: "1. Sobre o produto",
        paragraphs: [
          `O ${company} é um planner digital em formato PDF, de preenchimento e impressão opcionais, com finalidade educacional e de organização pessoal.`,
          "O produto não realiza diagnóstico de qualquer condição de saúde e não substitui avaliação, tratamento ou acompanhamento por profissional qualificado.",
        ],
      },
      {
        heading: "2. Licença de uso",
        paragraphs: [
          "A compra concede uma licença de uso pessoal, individual e não transferível. Você pode imprimir e utilizar os arquivos quantas vezes quiser para uso próprio.",
          "É vedada a revenda, redistribuição, compartilhamento público dos arquivos ou uso comercial do conteúdo sem autorização prévia por escrito.",
        ],
      },
      {
        heading: "3. Entrega e acesso",
        paragraphs: [
          "A entrega é digital e automática. Após a confirmação do pagamento, o acesso aos arquivos é enviado para o e-mail informado no checkout.",
          `Caso não receba o acesso, entre em contato em ${supportEmail} para que possamos regularizar.`,
        ],
      },
      {
        heading: "4. Pagamento",
        paragraphs: [
          "O pagamento é único, sem cobrança recorrente, e é processado pela plataforma de pagamentos indicada no checkout, que possui seus próprios termos e políticas.",
        ],
      },
      {
        heading: "5. Alterações",
        paragraphs: [
          "Podemos atualizar estes termos a qualquer momento. A versão vigente será sempre a publicada nesta página, com a data de atualização indicada acima.",
        ],
      },
    ],
  },

  privacidade: {
    slug: "privacidade",
    title: "Política de privacidade",
    updatedAt: "setembro de 2026",
    intro: `Esta política explica quais dados o ${company} coleta, como eles são usados e quais são os seus direitos, em conformidade com a Lei Geral de Proteção de Dados (LGPD).`,
    sections: [
      {
        heading: "1. Dados que coletamos",
        paragraphs: [
          "Dados fornecidos por você no checkout: nome, e-mail, telefone e dados de cobrança — estes últimos tratados diretamente pela plataforma de pagamentos.",
          "Dados de navegação coletados automaticamente: páginas visitadas, origem do acesso, parâmetros de campanha (UTM), dispositivo e navegador.",
        ],
      },
      {
        heading: "2. Como usamos esses dados",
        paragraphs: [
          "Para processar sua compra, entregar o produto, prestar suporte e enviar comunicações relacionadas ao produto adquirido.",
          "Para medir o desempenho de campanhas de anúncio e melhorar a experiência do site.",
        ],
      },
      {
        heading: "3. Cookies e ferramentas de terceiros",
        paragraphs: [
          "Utilizamos cookies e tecnologias similares, incluindo ferramentas de análise e de mensuração de anúncios, que podem registrar dados de navegação de forma pseudonimizada.",
          "Você pode bloquear cookies nas configurações do seu navegador, ciente de que isso pode afetar o funcionamento de partes do site.",
        ],
      },
      {
        heading: "4. Compartilhamento",
        paragraphs: [
          "Compartilhamos dados apenas com prestadores necessários à operação (plataforma de pagamento, provedor de e-mail, ferramentas de análise) e quando exigido por lei.",
          "Não vendemos seus dados pessoais.",
        ],
      },
      {
        heading: "5. Seus direitos",
        paragraphs: [
          `Você pode solicitar acesso, correção, portabilidade ou exclusão dos seus dados, além de revogar consentimentos, escrevendo para ${supportEmail}.`,
        ],
      },
    ],
  },

  reembolso: {
    slug: "reembolso",
    title: "Política de reembolso",
    updatedAt: "setembro de 2026",
    intro: `Queremos que a decisão de comprar o ${company} seja sem risco. Por isso, oferecemos garantia incondicional de 30 dias.`,
    sections: [
      {
        heading: "1. Garantia de 30 dias",
        paragraphs: [
          "Você tem até 30 dias corridos, contados a partir da confirmação do pagamento, para solicitar o reembolso integral do valor pago.",
          "A garantia é incondicional: não é necessário justificar o motivo nem comprovar uso do material.",
        ],
      },
      {
        heading: "2. Como solicitar",
        paragraphs: [
          `Basta enviar um e-mail para ${supportEmail} com o e-mail usado na compra. Também é possível solicitar o reembolso diretamente pela plataforma de pagamento utilizada no checkout.`,
        ],
      },
      {
        heading: "3. Prazo de devolução",
        paragraphs: [
          "Após a aprovação, o estorno é processado pela plataforma de pagamento. O prazo para o valor aparecer na sua conta ou fatura depende do meio de pagamento utilizado, conforme regras da própria plataforma e da instituição financeira.",
        ],
      },
      {
        heading: "4. Direito de arrependimento",
        paragraphs: [
          "Independentemente da garantia acima, o Código de Defesa do Consumidor assegura o direito de arrependimento em até 7 dias para compras realizadas fora do estabelecimento comercial.",
        ],
      },
    ],
  },
};
