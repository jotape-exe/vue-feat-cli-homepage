export default {
  hero: {
    eyebrowA: 'Scaffolding opinativo',
    eyebrowB: 'Feature-based Vue 3',
    legend1: 'Service → Composable → Store → View',
    titleA: 'A estrutura definitiva* para features',
    titleNote: '*definitiva = opinativa. Se o time não quer opinião, o Vite padrão segue ali.',
    sub: 'Troque pastas improvisadas por módulos consistentes e tipados: service, composables, store e view. Dados de domínio e estado de UI vivem em camadas separadas.',
    discTitle: 'Sem bala de prata',
    discText:
      'O vue-feat-cli impõe uma arquitetura opinativa. Faz sentido para times novos, projetos grandes ou múltiplas squads. Para uma pokedex de fim de semana, o scaffolding padrão do Vite basta.',
    cta1: 'Ver a estrutura',
    cta2: 'Caos vs padrão',
    badgesTitle: 'Stack detectada no init:',
    badges: ['Vue 3.5+ Strict', 'Vite 6', 'TypeScript 5.6', 'Pinia (opcional)', 'Vue Router (opcional)', 'Axios ou Fetch'],
    teleTitle: 'Por que padronizar',
    tele: [
      { label: 'Destino por arquivo', value: '1:1', sub: '1 arquivo = 1 destino' },
      { label: 'Ponto público', value: 'index.ts', sub: 'Barrel por feature' },
      { label: 'Diagnóstico', value: 'vf doctor', sub: 'Antes de gerar' },
      { label: 'Modo agente / CI', value: '--json', sub: 'Stdout parseável' },
    ],
    contract: 'CONTRATO: VF.CONFIG.JSON',
    docs: 'Documentação',
  },
  quick: {
    title: 'Quick start',
    steps: '3 passos',
    hints: ['global', 'no projeto', '1ª feature'],
    noInstall: 'Sem instalar?',
    copied: 'copiado!',
  },
  copy: {
    copy: 'Copiar',
    copied: 'Copiado!',
  },
  explorer: {
    tag: 'Estrutura gerada, simples e direta',
    title: 'Um comando. Uma feature completa e organizada.',
    intro:
      'Escolha um preset para ver exatamente quais arquivos o CLI gera e em qual camada cada um vive. Sem metáfora de futebol: só pastas, arquivos e o fluxo entre eles.',
    preset: 'Preset',
    filesTitle: 'Arquivos gerados',
    items: 'ITENS',
    fileComment: '// {label}: {count} itens',
    flowTitle: 'Fluxo de dependência',
    unidir: 'UNIDIRECIONAL',
    howTitle: 'Como ler',
    howText:
      'Cada preset corresponde a flags reais do CLI. O centro mostra os arquivos gerados; a direita, o fluxo de dependência entre camadas.',
    rules: [
      { label: 'Regra de ouro', value: 'PAGE → SERVICE → HTTP' },
      { label: 'Store', value: 'OPCIONAL / COMPARTILHADO' },
      { label: 'Ponto público', value: 'INDEX.TS (BARREL)' },
    ],
    roles: [
      'Camada HTTP via httpClient (fetch ou axios).',
      'Dados de domínio + CRUD. Sem estado de UI.',
      'Loading + error. Delega ao service.',
      'Página fina. Chama load() no mount.',
    ],
    presets: [
      {
        label: 'Completa',
        tagline: 'Pinia + Router. O padrão para features de produto.',
        notes: ['Store Pinia em Composition API', 'Rota lazy-loaded em routes.ts', 'Barrel público em index.ts'],
      },
      {
        label: 'CRUD',
        tagline: 'Service + composables com métodos create/update/remove.',
        notes: ['Types ganham CreateDto + UpdateDto', 'Mesma separação service/page'],
      },
      {
        label: 'Enxuta',
        tagline: 'Só o essencial. Sem store, sem view, sem rota.',
        notes: ['Layers via --only / --exclude / --no-*', 'Ideal para módulos de domínio puro'],
      },
      {
        label: 'Sem Router',
        tagline: 'Para projetos sem Vue Router: sem views nem routes.',
        notes: ['Detectado automaticamente no vf init', 'routes.ts omitido'],
      },
    ],
  },
  benefits: {
    tag: 'Disciplina operacional',
    title: 'Por que convenções opinativas vencem a flexibilidade solta?',
    intro:
      'Em projetos grandes, liberdade irrestrita vira dívida técnica. Quando o time precisa de trilhos rígidos, o vue-feat-cli define o padrão para todos focarem no produto, com agentes e CI operando no mesmo contrato.',
    items: [
      {
        title: 'Zero discussões em PRs',
        text: 'Cada arquivo tem um destino exato: service, composable, store, view. Acabam os debates sobre onde salvar aquele composable ou tipo.',
        footer: 'REGRA: 1 ARQUIVO = 1 DESTINO',
      },
      {
        title: 'Separação service / page',
        text: 'useXxxService cuida dos dados de domínio; useXxxPage cuida de loading e erro. Views finas, reutilizáveis até em modais sem spinners fantasmas.',
        footer: 'SERVICE → PAGE → VIEW',
      },
      {
        title: 'Generators instantâneos',
        text: 'vf g:feat ergue services, composables, store Pinia, types, view, rota e barrel em segundos, com --dry-run --json para agentes e CI.',
        footer: 'HEADLESS: --JSON PARA AGENTES',
      },
      {
        title: 'Diagnóstico embutido',
        text: 'vf doctor valida config, alias @, deps vs config e http client. vf agents:init gera o AGENTS.md para todo agente seguir o mesmo contrato.',
        footer: 'VF DOCTOR + AGENTS:INIT',
      },
    ],
  },
  comparison: {
    tag: 'Diagnóstico estrutural',
    title: 'Caos convencional versus padrão vue-feat-cli',
    sub: 'A diferença prática quando a aplicação passa de 50 mil linhas de código.',
    chaosTitle: 'O monólito caótico típico',
    deprecated: 'Deprecated',
    chaosComment: '// 140+ arquivos sem dono claro',
    chaosTree: [
      'src/components/  (142 arquivos sem dono)',
      '├─ UserModal.vue',
      '├─ UserCheckoutTable.vue',
      '├─ ProductCardFinalV2.vue',
      '├─ useUser.ts  <-- acoplado a useCart e useAuth',
      '├─ useGlobalHack.ts',
      '└─ stores/index.ts  (3.200 linhas)',
    ],
    chaosPoints: [
      'Imports circulares causam bugs imprevisíveis em produção.',
      'Impossível testar regra de negócio sem renderizar o DOM.',
      'Refatorar um botão quebra o fluxo de pagamento inteiro.',
    ],
    tacticTitle: 'Padrão feature-based',
    strict: 'VF STRICT',
    tacticComment: '// Fatias autossuficientes: vf g:feat Product',
    tacticTree: [
      'src/features/product/',
      '├── services/ product.service.ts',
      '├── composables/ useProductService + useProductPage',
      '├── stores/ product.store.ts (Pinia)',
      '├── types/ product.types.ts',
      '├── views/ ProductView.vue',
      '├── routes.ts (lazy-loaded)',
      '└── index.ts (barrel público)',
    ],
    tacticPoints: [
      'Fatias autossuficientes: qualquer dev localiza o código em segundos.',
      'Barrel index.ts como único ponto público da feature.',
      'Store opcional, só para estado compartilhado entre features.',
    ],
  },
  agents: {
    tag: 'Headless para agentes e CI',
    title: 'Feito para agentes. Não só para humanos.',
    intro:
      'Todo generator roda sem prompt interativo e devolve JSON parseável. O fluxo recomendado vive no AGENTS.md gerado pelo próprio CLI.',
    steps: [
      {
        title: '1. Diagnostique antes de gerar',
        text: 'O agente lê config, pastas, alias @, deps e templates em JSON. Exit code 1 em falha.',
      },
      {
        title: '2. Preveja sem escrever nada',
        text: 'Stdout vira JSON puro com files[] e status por arquivo: dry-run, created, skipped ou exists.',
      },
      {
        title: '3. Trave o contrato no repo',
        text: 'Gera o AGENTS.md com stack, camadas e flags headless. Commit para todo agente seguir o mesmo padrão.',
      },
    ],
    jsonTitle: 'stdout em modo --json',
    parseable: 'parseável',
    rules: [
      { label: 'Warnings', value: 'VÃO EM warnings[]' },
      { label: 'Falha', value: 'EXIT CODE 1' },
      { label: 'Sobrescrever', value: '--FORCE --JSON' },
    ],
  },
  cta: {
    eyebrow: 'Setup interativo // 3 passos',
    title: 'Sua primeira feature em menos de 1 minuto.',
    steps: [
      {
        title: '1. vf init',
        text: 'Detecta Pinia, Router, Axios e o alias @. Gera vf.config.json + http client.',
      },
      {
        title: '2. vf g:feat Nome',
        text: 'Scaffolda a feature completa ou parcial (--only / --exclude / --no-*).',
      },
      {
        title: '3. vf doctor',
        text: 'Valida config, pastas, alias e deps. Rode com --json em agentes e CI.',
      },
    ],
    links: ['Ler README', 'GitHub (MIT)', 'npm', 'Suporte via Issues'],
  },
  footer: {
    tagline: 'Scaffolding opinativo feature-based para Vue 3: service → composable → store → view.',
    badges: ['LICENÇA MIT', 'VUE 3.5 STRICT'],
    bottom: 'vue <3',
    links: ['GitHub', 'npm', 'Issues'],
  },
}
