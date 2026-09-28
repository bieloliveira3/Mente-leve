# Analytics da landing Mente Leve

## Situação da entrega

Implementação com `posthog-js@1.434.15`, SDK oficial, PostHog Cloud e MCP oficial para **Codex**, restrito à configuração deste projeto. Nenhum banco, backend de analytics ou dashboard próprio foi criado. O SDK carrega sob demanda e não inicializa sem configuração. O token público foi obtido no onboarding do projeto **632354 (Default project, US Cloud)** e salvo somente em `.env.local`, ignorado pelo Git. Visitas reais à versão de produção local confirmaram **Installation complete** e ingestão de todos os seis eventos customizados, além de pageviews/saída e Web Vitals. Session Replay foi ativado, e uma gravação real foi aberta no player com textos mascarados. A landing publicada na Vercel ainda precisa receber o código e as variáveis em um novo deploy.

O wizard oficial `npx -y @posthog/wizard@latest` foi executado (v2.78.0): detectou Next.js e a dependência PostHog instalada. Não se aplicou uma segunda instalação automática que pudesse sobrescrever a instrumentação específica. O MCP está declarado e autenticado por OAuth, com acesso somente de leitura restrito ao Default project (632354). A configuração feita inicialmente no Claude Code foi removida após a orientação de usar somente Codex.

## Análise anterior às alterações

- Next.js **16.3.6**, App Router, React **19.2.8**, TypeScript, Tailwind v4, shadcn/Radix e lucide-react. Package manager: **npm**, com package-lock.json.
- `src/app/page.tsx` compõe a landing; `src/app/layout.tsx` contém fontes/metadata e o tracker existente. Seções são Server Components; CheckoutButton e Accordion são interativos. Fontes: Inter/Poppins.
- Rotas: `/`, `/checkout`, `/termos`, `/privacidade`, `/reembolso`. `/checkout` é uma página de instruções/configuração, **não um checkout real**.
- Variáveis `NEXT_PUBLIC_*` são incorporadas no frontend durante `next build`; `.env.local` fica na raiz e é ignorado pelo Git.
- Fonte de copy/oferta: `src/lib/content.ts`. Preço apresentado: **R$ 27,99**, BRL. Destino padrão: `https://pay.cakto.com.br/3am8wy3_1137980`, substituível por `NEXT_PUBLIC_CHECKOUT_URL`.
- Três links de pagamento usam CheckoutButton: oferta, CTA final, barra fixa. O hero navega para `#pricing`. O header abre o WhatsApp de suporte. Os outros links são início, documentos e e-mail.
- Meta Pixel existente **1344965854179273**, PageView/InitiateCheckout, foi preservado integralmente. Não foram encontrados GA, GTM, Clarity ou outro tracker no código.
- A barra fixa já existe e é revelada após o hero; também aparece no desktop. Sua lógica original não foi refatorada.
- Sem CMP/banner/mecanismo de consentimento. A política de privacidade já menciona cookies e mensuração, mas requer revisão operacional antes de ativar coleta/replay.
- Há componentes não usados pela landing atual (benefícios, depoimentos, ciência, diferenciais etc.). Não foram adicionados ao layout nem contados como seções visualizadas.

## Arquitetura e arquivos

Criados:

| Arquivo | Responsabilidade |
| --- | --- |
| `src/instrumentation-client.ts` | Entrada oficial do Next.js para iniciar o SDK sem bloquear hidratação |
| `src/components/landing-analytics.tsx` | Componente sem DOM que acompanha mudanças de pathname |
| `src/lib/analytics/client.ts` | Singleton, import dinâmico, captura central, fila inicial, privacidade e debug |
| `src/lib/analytics/attribution.ts` | Allowlist de campanhas, atribuição de sessão, saneamento de URLs |
| `src/lib/analytics/definitions.ts` | Convenções, IDs de CTAs, nomes e ordem das seções |
| `src/lib/analytics/tracking.ts` | Observadores, impressões, cliques, scroll e contexto de saída |
| `tests/analytics.unit.cjs` | Testes com node:test e o compilador TypeScript existente |
| `tests/analytics.browser.cjs` | Fluxos reais de navegador desktop/mobile |
| `.codex/config.toml` | MCP oficial do PostHog para este projeto, sem secrets |
| `POSTHOG_ANALYTICS.md` | Esta documentação |

Modificados: `.env.example`, `package.json`, `package-lock.json`, `src/app/layout.tsx`, `src/components/checkout-button.tsx`, `src/components/layout/{header,footer,section}.tsx`, `src/components/sections/{hero,pricing-section,final-cta-section,guarantee-section}.tsx`, `src/components/sticky-mobile-cta.tsx`.

Só se adicionaram atributos/props de instrumentação e o componente sem DOM. CSS, imagens, copy, ordem, URLs, responsividade e os handlers existentes do Meta Pixel/checkout foram preservados. O lockfile também alinhou o nome antigo àquele já existente em package.json.

## Ativar seu projeto PostHog Cloud

1. No projeto PostHog destinado à landing, abra **Settings > Project** e copie o **Project token público** (antes chamado Public Project API Key). Nunca use uma Personal API Key `phx_` no frontend.
2. Copie `.env.example` para `.env.local`, preencha as duas variáveis e configure os mesmos valores no provedor de hospedagem **antes de um novo build/deploy**:

```dotenv
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=
NEXT_PUBLIC_POSTHOG_HOST=
```

O primeiro valor é o token público real do projeto. O host confirmado para este projeto é `https://us.i.posthog.com`. O token está disponível em `.env.local` na máquina desta tarefa e no onboarding/Settings do projeto; não foi incluído na documentação nem no repositório. Para outros projetos, use a região indicada pelo PostHog.

3. Ative **Session Replay** nas configurações do mesmo projeto e verifique a regra de gravação, amostragem, duração mínima e retenção. O código permite gravação, mas a configuração remota decide quais sessões serão gravadas. Para validação inicial, use gravação de todas as sessões no projeto de testes.
4. Abra a landing publicada, gere eventos e confira **Activity/Live events**, Web Analytics e Session Replay. Veja uma gravação real para confirmar mascaramento. Heatmaps está habilitado no SDK; consulte Heatmaps/Toolbar e autorize o domínio quando solicitado.

Sem token/host, a landing continua funcionando e não envia dados PostHog. A mudança no repositório não equivale a um deploy. Deve-se reconstruir a aplicação após alterar variáveis públicas.

### Publicação pelo proprietário da Vercel

O domínio existente é `https://mente-leve-a5gd.vercel.app/`, projeto `mente-leve-a5gd` da equipe **oliveira-4ba7**, confirmado no status Vercel do GitHub. A conta autenticada nesta tarefa, Thelimaf, tem permissão WRITE no repositório `bieloliveira3/Mente-leve`, mas não acesso a esse projeto Vercel. Por orientação do usuário, a entrega fica na branch `feat/posthog-landing-analytics` e na [PR #1](https://github.com/bieloliveira3/Mente-leve/pull/1), para Biel enviar à `main` com sua conta.

Biel deve configurar o token público e o host acima no ambiente **Production** desse projeto Vercel antes de fazer o merge/deploy. Manter DEBUG e CAPTURE_IN_DEV false. Em seguida, acompanhar o deploy ligado à `main`, abrir o endereço público e validar Activity/Session Replay no projeto 632354. A autenticação MCP do Codex permite consultar PostHog; ela não concede acesso à hospedagem de outra conta. Nenhuma publicação em outro domínio foi criada.

## Eventos e propriedades

Todos os eventos customizados levam `page`, `pathname`, `environment`, `device_type` e os parâmetros de campanha presentes. O SDK inclui distinct ID anônimo, `$session_id`, browser/device/OS, viewport e propriedades técnicas; não é usado `identify` nem um identificador pessoal próprio.

| Evento | Momento | Propriedades específicas |
| --- | --- | --- |
| `$pageview` | Inicial e cada mudança de pathname confirmada | URL saneada, pathname, dispositivo, campanha |
| `landing_view` | Uma vez por visita/carregamento de `/` | Contexto comum |
| `scroll_depth` | Primeiro alcance de cada marco | `percentage`: 25, 50, 75, 90 ou 100 |
| `section_view` | Seção efetivamente exposta por 600 ms | `section_id`, `section_name`, `section_order` |
| `cta_impression` | CTA efetivamente exposto | `cta_id`, `cta_location`, `cta_text` normalizado, `section_id`, `destination` saneado |
| `cta_click` | Clique normal, teclado/Enter ou botão central em CTA | Propriedades de impressão, `scroll_percentage_at_click`, `had_impression` |
| `checkout_click` | Clique em um dos quatro links de pagamento, antes do handler original | Propriedades de clique, `checkout_url` sem query, `product`, `price: 27.99`, `currency: BRL`, UTMs |
| `$pageleave` | Saída/ocultação detectada pelo SDK | Métricas de scroll do SDK, `max_scroll_percentage`, `last_section_id`, campanha/contexto |
| `$autocapture` e eventos de UX do SDK | Cliques permitidos/autocapturados | Textos e atributos mascarados; rage/dead clicks habilitados |

`checkout_view` e `purchase` **não são emitidos**: não há prova confiável desses estados nesta aplicação. Não se confunde clique, abertura de popup, visita ao placeholder `/checkout` ou URL de retorno com compra.

`page` é `mente_leve_landing` na home. `device_type` usa classificação leve de user-agent; `$device_type`, `$browser`, `$os` do SDK são os campos oficiais para detalhamento. Identidades anônimas representam navegadores/dispositivos, não uma contagem garantida de pessoas físicas; bloquear ou limpar armazenamento pode mudar os IDs.

## Seções reais e ordem

| Ordem | section_id | Nome | Âncora existente |
| --- | --- | --- | --- |
| 1 | `hero` | Apresentação | `top` |
| 2 | `identificacao` | Identificação com o problema | `identificacao` |
| 3 | `mensagens` | Mensagens de quem usa | `mensagens` |
| 4 | `oferta` | A oferta | `pricing` |
| 5 | `metodo` | Método de organização | `metodo` |
| 6 | `bonus` | Bônus inclusos | `bonus` |
| 7 | `criadora` | Criadora | `criadora` |
| 8 | `garantia` | Garantia | Sem alteração da âncora/markup existente |
| 9 | `faq` | Antes de decidir | `faq` |
| 10 | `cta_final` | Convite final | `comecar` |

O wrapper Section obtém dados semânticos do registro central. Seções não renderizadas não geram eventos. A seção conta quando ao menos 100 px ou 25% de sua altura (o menor) ficam na área útil da tela durante 600 ms. Header e barra fixa são descontados. Uma seção conta uma vez por visita; o contexto de saída continua acompanhando a seção atual mesmo ao voltar para cima.

## IDs persistentes de CTAs

| cta_id | cta_location | section_id | Destino/função |
| --- | --- | --- | --- |
| `hero_offer` | `hero` | `hero` | `#pricing` |
| `pricing_checkout` | `oferta` | `oferta` | Checkout Cakto/configurado |
| `bonus_checkout` | `bonus` | `bonus` | Checkout Cakto/configurado, o mesmo destino do CTA principal |
| `final_checkout` | `cta_final` | `cta_final` | Checkout Cakto/configurado |
| `sticky_checkout` | `barra_fixa` | `sticky_bar` | Checkout Cakto/configurado |
| `header_home` | `header` | `header` | `/#top` |
| `footer_home` | `footer` | `footer` | `/#top` |
| `footer_terms` | `footer` | `footer` | `/termos` |
| `footer_privacy` | `footer` | `footer` | `/privacidade` |
| `footer_refund` | `footer` | `footer` | `/reembolso` |
| `footer_support` | `footer` | `footer` | Email existente; analytics registra `mailto:support` |
| `whatsapp_support` | `header` | `header` | WhatsApp de suporte; não é checkout |

As ações comerciais são o convite da apresentação e os quatro links de checkout. Os outros links têm IDs para análise de navegação. FAQ permanece funcionando e seus controles são cobertos pelo autocapture, sem transformá-los em CTAs de compra.

Impressão requer **ao menos 50% da área do CTA visível por 600 ms**, aba visível, ausência de `aria-hidden` e verificação de oclusão no ponto central. A barra fixa escondida não conta. Um clique real no CTA visível também confirma exposição se acontecer antes dos 600 ms. Cada ID gera uma impressão por visita, mesmo com vários scrolls. Cliques repetidos são eventos reais, mas CTR deve usar usuários/sessões únicos.

## Scroll e performance

- Profundidade = `(scrollY + viewportHeight) / documentHeight * 100`, isto é, a parte mais baixa alcançada pela tela. O topo da página já expõe a altura da tela; é esperado que um documento curto alcance marcos cedo.
- 100% exige chegar ao fundo, com tolerância de 2 px. Não é arredondado antecipadamente a partir de 99%.
- Marcos 25/50/75/90/100 só contam uma vez por carregamento/visita. Voltar de uma rota interna para a home inicia nova visita; Strict Mode não duplica a visita inicial. Mudar só a âncora não cria pageview.
- Um listener passivo de scroll, amostragem limitada a 150 ms, dois IntersectionObservers, um handler delegado de click/auxclick, ResizeObserver para mudanças de altura e observação restrita do atributo de visibilidade da barra. Todos são limpos ao sair da home.
- Não há setState de React a cada scroll. O SDK e as extensões de replay carregam sob demanda. Surveys e captura de erros/logs não necessários estão desativados.
- Eventos de checkout usam `sendBeacon`/envio imediato sem await, sem timer que segure o clique e sem alterar o handler de navegação original. Entrega no unload é best effort: ad blockers, rede, JS desativado e restrições do browser afetam a cobertura.
- Web Vitals está habilitado no SDK para acompanhar o impacto na versão publicada. Os testes locais validaram geometria e comportamento; não substituem medição de carga real em dispositivos e redes de produção.

## UTMs e atribuição Meta Ads

Allowlist: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `utm_id`, `fbclid`, `gclid`, `msclkid`, `wbraid`, `gbraid`, `src`, `sck`. Valores acima de 512 caracteres ou com emails/CPF formatado são descartados. Nunca coloque informações pessoais nos nomes de campanhas/UTMs.

Os valores iniciais são preservados em sessionStorage durante a sessão, com fallback em memória se o armazenamento estiver bloqueado. O ID de sessão real vem de `posthog.get_session_id()`; mudança de sessão do SDK reinicia a atribuição. O limite ocioso é de 30 minutos, igual ao padrão do SDK. Em validação local sem SDK usa-se somente armazenamento com expiração; não se cria um ID alternativo de usuário/sessão.

São enviados em todos os eventos customizados e pelo `before_send` nos eventos automáticos. Novas UTMs durante a mesma sessão não sobrescrevem a campanha inicial. `$current_url` e referrer são enviados sem query/fragmento; as UTMs vivem nas propriedades próprias.

O passthrough original da URL para o checkout continua em `src/lib/checkout-url.ts`, integralmente preservado. Ele usa os parâmetros presentes na URL no clique e não passa `email`/parâmetros arbitrários. Analytics mantém a campanha inicial mesmo após navegação interna. A URL de checkout enviada como propriedade não inclui query, embora o **link efetivo** conserve o passthrough original. Não foram adicionados IDs PostHog ao link da Cakto sem uma especificação suportada por ela.

## Session Replay e privacidade

Replay está permitido no cliente e foi ativado no projeto Cloud 632354. As regras remotas foram verificadas: todas as sessões, amostragem 100%, sem duração mínima nem triggers/blocklist. Uma gravação real foi aberta/reproduzida no player, mostrando a landing, mudanças de viewport e textos mascarados. A lista de gravações demorou a atualizar; o botão View recording em Activity abriu diretamente o player da sessão.

- Todos os inputs e todos os textos são mascarados antes de sair do browser. O replay mostra layout, imagens públicas, movimento, scroll e cliques; os textos ficam ocultos por opção conservadora.
- Iframes e elementos `.ph-no-capture` ou `[data-analytics-private]` são bloqueados.
- Não captura cabeçalhos/corpos de rede, streaming de corpos, JSON-LD nem console logs. URLs do replay/rede têm query, fragmento e credenciais removidos.
- Autocapture se limita a cliques; texto/atributos são mascarados e copiar texto está desativado. Campos privados não são enviados como propriedades customizadas.
- Person profiles estão desativados. O transporte HTTP ainda implica processamento técnico do IP pelo serviço. Na versão atual do SDK, `ip: false` é uma opção histórica sem efeito. Foi ativado **Discard client IP data** em Settings > Project > Privacy do projeto 632354: o IP não será armazenado com os eventos novos. Conforme a descrição do painel, GeoIP e detecção de bots ainda podem usar o IP antes do descarte; essa opção não garante ausência de enriquecimento geográfico.
- Respeita Do Not Track. Não faz fingerprinting próprio nem exige login. Rejeição de captura persistida no PostHog é respeitada pelo SDK.

Dados enviados: IDs pseudônimos gerenciados pelo SDK, sessões/pageviews, páginas sem query, referrer sem query, campanhas/click IDs fornecidos na URL, tipo de dispositivo/browser/OS, viewport, métricas de carregamento, marcos de scroll, exposição/cliques em seções/CTAs, produto/preço público e snapshots mascarados quando habilitados. Não envia senha, cartão, CPF, email do visitante ou conteúdo de formulários.

**Consentimento/LGPD:** não existe CMP na landing; nenhum banner foi acrescentado para preservar o escopo/layout. Antes da coleta, revisar finalidade, base legal, transparência, retenção, acesso e mecanismos de escolha com o responsável. É recomendado um mecanismo proporcional de consentimento/revogação para cookies não essenciais/replay. Quando uma CMP for escolhida, carregar/inicializar apenas após autorização ou usar `opt_out_capturing_by_default` + `opt_in_capturing`/`opt_out_capturing`, garantindo a parada do replay e a mesma política para o Meta Pixel. DNT/mascaramento isoladamente não constituem comprovação de conformidade. Referência: [guia oficial da ANPD sobre cookies](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais).

## Checkout e compra confiável: o que falta

Esta aplicação abre um checkout externo Cakto. A política de mesma origem impede observar o DOM, carregamento final ou pagamento dessa aba. A abertura de popup não comprova que o checkout carregou. A rota `/checkout` local é um placeholder e não será marcada como `checkout_view`.

Para `checkout_view`, é necessário instrumentar uma página de pagamento realmente sob nosso controle ou uma integração oficial do gateway que informe visualização. Ainda não existe isso no projeto.

Para `purchase`, o fluxo futuro deve:

1. Receber a confirmação oficial `purchase_approved` da Cakto em uma integração existente do gateway/automação autorizada.
2. Validar origem/autenticidade e o estado aprovado do pedido conforme o contrato Cakto; Pix/boleto gerado ou pagamento pendente não são compra.
3. Deduplicar reentregas pelo ID do pedido/evento, incluindo uma chave determinística `$insert_id` ao emitir para PostHog.
4. Enviar somente o contrato mínimo: `event: purchase`, `order_id`, `product`, `price`/valor efetivamente pago, `currency`, `payment_status: approved`, UTMs confiáveis e a identidade anônima original **apenas se houver passagem de metadados suportada e verificada pelo gateway**.
5. Se não houver vínculo confiável de distinct/session ID entre landing e pedido, reportar vendas separadamente; não fabricar uma associação nem juntar por email/CPF.

Nenhum endpoint/webhook/backend foi criado só para analytics. O contrato acima prepara a extensão sem emitir dados falsos. Secrets de webhook/autenticação, se uma futura integração os exigir, ficam somente no servidor/serviço externo, nunca em `NEXT_PUBLIC_*`. Referências oficiais: [webhooks Cakto](https://ajuda.cakto.com.br/pt-br/articles/1), [eventos de pagamentos Cakto](https://www.cakto.com.br/api).

## Dashboard, funis e CTR

Use Web Analytics para pageviews, visitantes anônimos únicos, sessões, fontes e dispositivo. Em Product Analytics, filtre `environment = production` e `pathname = /`. Use o mesmo período/filtros de campanhas nos numeradores e denominadores. Para comparar anúncios, agrupe por `utm_content`; para campanha use `utm_campaign`, com source/medium de apoio.

Funil comercial recomendado: `landing_view` → `section_view` com `section_id = oferta` → `cta_impression` com `cta_id = pricing_checkout` → `cta_click` com esse mesmo ID → `checkout_click` com esse mesmo ID. Outro funil usa `cta_final`/`final_checkout`. Configure janela de conversão e usuários ou sessões únicos e mantenha o mesmo `cta_id` nos passos; não misture impressões de um CTA com cliques de outro.

Cobertura de leitura: landing_view e scroll_depth com filtros separados `percentage = 25`, `50`, `75`, `90`, `100`. Para a sequência solicitada `landing → 25 → 50 → 75 → oferta → impressão → clique → checkout`, atenção à estrutura real: **a oferta fica depois da identificação e das mensagens, antes do método**. Um funil que exige 75% de scroll antes da oferta deixa de fora quem compra ao chegar nela. Use um funil sem ordem estrita para cruzar leitura/exposição, ou separe profundidade de leitura do funil comercial. Não alteramos o layout para forçar essa ordem. Só acrescente purchase depois da integração verificada.

CTR = unidades únicas expostas que clicaram **no mesmo CTA** / unidades únicas expostas, vezes 100. Repetir cliques não aumenta o numerador. Prefira um funil impression → click agrupado pelo mesmo ID, ou a consulta por sessão abaixo, que inclui apenas cliques posteriores à primeira exposição. Para visitantes, substitua a unidade `$session_id` por `distinct_id` nos agrupamentos.

Exemplo HogQL, para os últimos 14 dias (ajuste datas/filtros ao dashboard):

```sql
WITH por_sessao AS (
  SELECT
    properties.cta_id AS cta_id,
    properties.$session_id AS session_id,
    countIf(event = 'cta_impression') AS impressions,
    countIf(event = 'cta_click') AS clicks,
    minIf(timestamp, event = 'cta_impression') AS first_impression,
    maxIf(timestamp, event = 'cta_click') AS last_click
  FROM events
  WHERE event IN ('cta_impression', 'cta_click')
    AND properties.pathname = '/'
    AND properties.environment = 'production'
    AND properties.$session_id IS NOT NULL
    AND timestamp >= now() - INTERVAL 14 DAY
  GROUP BY cta_id, session_id
)
SELECT cta_id,
  countIf(impressions > 0) AS exposed_sessions,
  countIf(impressions > 0 AND clicks > 0 AND last_click >= first_impression) AS clicked_exposed_sessions,
  100.0 * countIf(impressions > 0 AND clicks > 0 AND last_click >= first_impression)
    / nullIf(countIf(impressions > 0), 0) AS ctr_percent
FROM por_sessao
GROUP BY cta_id
ORDER BY ctr_percent DESC
```

Campanhas/anúncios que geram checkout:

```sql
SELECT properties.utm_source, properties.utm_campaign, properties.utm_content,
  count(DISTINCT distinct_id) AS unique_visitors,
  count(DISTINCT properties.$session_id) AS unique_sessions
FROM events
WHERE event = 'checkout_click'
  AND properties.environment = 'production'
  AND timestamp >= now() - INTERVAL 14 DAY
GROUP BY properties.utm_source, properties.utm_campaign, properties.utm_content
ORDER BY unique_sessions DESC
```

Para abandono, use o drop-off do funil comercial, Paths e replays de sessões que não fizeram checkout_click. `$pageleave.max_scroll_percentage` e `last_section_id` dão contexto de saída. Não se trata de comprovação de intenção de desistir: trocar de aba/fechar navegador também gera saída e a entrega do evento é best effort. Não interprete saída após checkout_click como falha de pagamento.

As consultas/especificações estão preparadas, mas **não foram executadas contra dados Cloud nem criados dashboards remotos sem autenticação**.

## MCP oficial somente no Codex

O repositório contém `.codex/config.toml`:

```toml
[mcp_servers.posthog]
url = "https://mcp.posthog.com/mcp"
enabled = true
```

Essa mesma declaração foi salva na pasta deste chat Codex, sem modificar o cadastro global de servidores. O endpoint é hospedado oficialmente pelo PostHog; não usa o antigo repositório MCP arquivado nem um servidor de terceiros. OAuth e tokens privados ficam no armazenamento de credenciais do Codex, fora do repositório.

Projetos locais precisam estar **confiados** no Codex para carregar `.codex/config.toml`. Reabra o projeto, confirme a confiança na pasta quando o Codex solicitar e reinicie/recarregue os servidores. Em **Settings > MCP servers**, use **Authenticate** para PostHog. Alternativamente, na pasta do projeto confiado:

```bash
codex mcp get posthog --json
codex mcp login posthog
```

Se a CLI ainda não carregar o projeto confiado, este comando aplica apenas a configuração necessária ao comando de autenticação, sem instalar o servidor globalmente:

```bash
codex -c 'mcp_servers.posthog.url="https://mcp.posthog.com/mcp"' mcp login posthog
```

No navegador, entre na sua conta PostHog, restrinja o acesso em **Projects** ao **Default project, ID 632354**, usado no onboarding apresentado nesta tarefa, com permissões somente de leitura, e autorize. Nas consultas do Codex, indique explicitamente esse projeto. Após OAuth, retorne ao Codex e confirme `/mcp`/a lista de servidores; uma nova sessão pode ser necessária para disponibilizar as ferramentas.

Status: servidor declarado e configuração de transporte verificada; **OAuth concluído em 28/09/2026, com auth_status o_auth confirmado na CLI**. O usuário autorizou somente leitura, restrita ao Default project (632354). As ferramentas MCP ainda não foram carregadas nesta sessão; reabra o projeto confiado/recarregue os servidores para disponibilizá-las. O acesso ao painel Cloud no Chrome permitiu verificar a ingestão sem autenticar o MCP. O wizard reconheceu o SDK instalado. Não há instalação remanescente de PostHog no Claude Code feita por esta tarefa.

Perguntas prontas para o Codex conectado:

- “No projeto Mente Leve, nos últimos 14 dias, qual utm_content trouxe mais sessões únicas com checkout_click? Filtre environment production.”
- “Mostre a proporção de sessões por campanha que atingiram scroll_depth com percentage 75.”
- “Calcule o CTR de cada cta_id com sessões únicas expostas, apenas cliques após impressão, e separe mobile/desktop.”
- “Abra replays de visitantes expostos à oferta que não clicaram no checkout.”

Referências: [MCP oficial PostHog](https://posthog.com/docs/model-context-protocol), [Codex e MCP por projeto](https://learn.chatgpt.com/docs/extend/mcp?surface=cli).

## Debug e como testar cada evento

Para teste sem enviar nada ao Cloud, mantenha `NEXT_PUBLIC_POSTHOG_CAPTURE_IN_DEV=false`, configure `NEXT_PUBLIC_POSTHOG_DEBUG=true` em `.env.local` e execute `npm run dev`. As credenciais podem ficar vazias. Abra:

```text
http://localhost:3000/?utm_source=facebook&utm_medium=paid_social&utm_campaign=launch&utm_content=ad_01&utm_term=planner&fbclid=test_click_id
```

No console, `[analytics]` mostra cada evento e `window.__menteLeveAnalyticsDebug` contém os últimos 200 eventos. Isso só existe em desenvolvimento. A mensagem inicial informa se a execução é local. **Esse modo não grava replay e não cria IDs artificiais PostHog.**

| Verificação | Ação | Resultado esperado |
| --- | --- | --- |
| Inicialização/pageview | Carregar `/` | Uma inicialização e um `$pageview`/`landing_view` |
| Scroll | Descer até 25/50/75/90/fim, depois repetir | Uma ocorrência de cada marco por visita |
| Seções | Parar 600 ms em cada seção | section_view com ID/nome/ordem corretos, sem repetição |
| CTA impression | Expor metade do CTA por 600 ms | Uma impressão; barra escondida não conta |
| CTA click | Clicar hero | cta_click com ID, âncora e profundidade; navegação intacta. O header abre o WhatsApp |
| Checkout click | Clicar oferta/bônus/final/barra | cta_click + checkout_click; Cakto abre normalmente com UTMs |
| Atribuição | Ir para política de privacidade e voltar, depois recarregar | Campanha inicial permanece na mesma sessão |
| Privacy | Inspecionar eventos e código/configuração | Sem email/senha/CPF/query arbitrária; replay mascarado |
| Replay real | Usar um projeto de testes com captura ativada | Gravação aparece e pode ser reproduzida no PostHog |
| MCP | Autenticar e consultar projeto | Dados reais via ferramentas do PostHog, no projeto correto |

Para testes recorrentes de ingestão/replay, use **um projeto separado de testes**, configure seu token/host e `NEXT_PUBLIC_POSTHOG_CAPTURE_IN_DEV=true`. O SDK ativa seu debug oficial quando DEBUG=true; confirme eventos no PostHog e assista uma gravação. Para destravar o onboarding desta tarefa, foi feita uma validação inicial na build de produção local com UTMs `utm_source=codex_validation`, `utm_medium=qa`, `utm_campaign=posthog_installation`; esses acessos reais de validação devem ser excluídos dos relatórios de tráfego pago. `NEXT_PUBLIC_POSTHOG_CAPTURE_IN_DEV` permaneceu false.

Comandos de verificação:

```bash
npm run test:analytics
npx tsc --noEmit
npm run lint
npm run build
npm run test:analytics:browser
```

O teste de navegador requer Playwright. Nesta tarefa foi usado o runtime já incluído no Codex, sem nova dependência do projeto. Para outros ambientes, disponibilize `playwright` e Chrome ou aponte `PLAYWRIGHT_MODULE_PATH` para o módulo já instalado; `PLAYWRIGHT_CHANNEL` escolhe o browser e `ANALYTICS_TEST_URL` a URL local. Inicie next dev com DEBUG=true antes do teste.

Resultados desta tarefa: **10 testes unitários aprovados**, TypeScript/build aprovados, lint sem erros (uma advertência preexistente do img do Meta Pixel, preservado). Os testes verificam também a preservação do token público no envelope de transporte do SDK: removê-lo em before_send impede a ingestão. Testes de browser 1440×900 e 390×844 passaram: todos os marcos/seções/CTAs, FAQ, checkout externo com passthrough, deduplicação, navegação interna/reload, UTMs, zero requisições PostHog no modo local e zero erros de console. Os dados de comparação capturados antes/depois confirmaram igualdade de copy, URLs, classes, retângulos das seções e dimensões da página. No Cloud foram confirmados todos os seis eventos customizados e uma gravação mascarada no player, originados da build local. O código permite heatmaps, mas um mapa visual ainda não foi validado. OAuth do MCP confirmado; consultas dependem de recarregar os servidores nesta sessão. A hospedagem pública depende de novo deploy pelo proprietário da Vercel.

## Adicionar eventos/CTAs futuramente

1. Inclua o evento em AnalyticsEvent, documente propósito e propriedades mínimas; use somente `captureEvent` da camada central.
2. Cadastre novo CTA em `definitions.ts`, com ID permanente e identificador textual normalizado. Adicione `ctaAttributes(id)` no elemento existente. Links de pagamento usam CheckoutButton com `analyticsId` obrigatório.
3. Cadastre a seção real e sua ordem em `sections`; Section usa a âncora existente ou `analyticsSection` sem mudança visual.
4. Não chame `posthog.init` em componentes, não envie PII e não reaproveite um evento de clique como conversão de pagamento.
5. Atualize os testes de fluxo quando adicionar novos elementos. Não altere IDs ao trocar a copy: isso quebra a continuidade das análises.

## Comandos usados na implementação

```bash
git clone https://github.com/bieloliveira3/Mente-leve.git
git switch -c feat/posthog-landing-analytics
npm ci
npm view posthog-js version
npm install posthog-js@1.434.15 --save-exact
npm run dev -- --hostname 127.0.0.1 --port 3100
npx -y @posthog/wizard@latest
npx -y @posthog/wizard@latest --help
npx -y @posthog/wizard@latest mcp add --help
codex -c 'mcp_servers.posthog.url="https://mcp.posthog.com/mcp"' mcp get posthog --json
codex -c 'mcp_servers.posthog.url="https://mcp.posthog.com/mcp"' mcp login posthog --no-browser
npm run test:analytics
npm run test:analytics:browser
npx tsc --noEmit
npm run lint
npm run build
```

O OAuth foi concluído em modo interativo e o estado o_auth foi verificado na CLI. A primeira tentativa sem browser não salvou a autenticação; a tentativa interativa posterior concluiu o processo. Nenhuma chave privada foi escrita no código ou commit. Por falta de espaço no C:, as dependências/build estão fisicamente no D:, acessíveis pela pasta de trabalho original do Codex através de uma junction. A estrutura de código/versão do repositório permanece a mesma.

Documentação oficial consultada antes da implementação: [Next.js/PostHog](https://posthog.com/docs/libraries/next-js), [configuração JS](https://posthog.com/docs/libraries/js/config), [privacidade Replay](https://posthog.com/docs/session-replay/privacy), [heatmaps](https://posthog.com/docs/toolbar/heatmaps), [Web Analytics](https://posthog.com/docs/web-analytics), [funis](https://posthog.com/docs/product-analytics/funnels). Também foram lidos os guias da versão instalada do Next.js em `node_modules/next/dist/docs` sobre instrumentation-client, environment variables e usePathname, conforme AGENTS.md.
