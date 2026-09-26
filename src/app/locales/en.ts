export default {
  hero: {
    eyebrowA: 'Opinionated scaffolding',
    eyebrowB: 'Feature-based Vue 3',
    legend1: 'Service → Composable → Store → View',
    titleA: 'The definitive* structure for',
    titleNote: '*definitive = opinionated. If the team wants no opinions, stock Vite is right there.',
    sub: 'Swap improvised folders for consistent, typed modules: service, composables, store and view. Domain data and UI state live in separate layers.',
    discTitle: 'No silver bullet',
    discText:
      'vue-feat-cli enforces an opinionated architecture. It pays off for new teams, large projects or multiple squads. For a weekend pokedex, stock Vite scaffolding is enough.',
    cta1: 'See the structure',
    cta2: 'Chaos vs standard',
    badgesTitle: 'Stack detected at init:',
    badges: ['Vue 3.5+ Strict', 'Vite 6', 'TypeScript 5.6', 'Pinia (optional)', 'Vue Router (optional)', 'Axios or Fetch'],
    teleTitle: 'Why standardize',
    tele: [
      { label: 'Destination per file', value: '1:1', sub: '1 file = 1 destination' },
      { label: 'Public entry', value: 'index.ts', sub: 'Barrel per feature' },
      { label: 'Diagnosis', value: 'vf doctor', sub: 'Before generating' },
      { label: 'Agent / CI mode', value: '--json', sub: 'Parseable stdout' },
    ],
    contract: 'CONTRACT: VF.CONFIG.JSON',
    docs: 'Documentation',
  },
  quick: {
    title: 'Quick start',
    steps: '3 steps',
    hints: ['global', 'in project', '1st feature'],
    noInstall: 'No install?',
    copied: 'copied!',
  },
  copy: {
    copy: 'Copy',
    copied: 'Copied!',
  },
  explorer: {
    tag: 'Generated structure, simple and direct',
    title: 'One command. One complete, organized feature.',
    intro:
      'Pick a preset to see exactly which files the CLI generates and which layer each one lives in. No football metaphor: just folders, files and the flow between them.',
    preset: 'Preset',
    filesTitle: 'Generated files',
    items: 'ITEMS',
    fileComment: '// {label}: {count} items',
    flowTitle: 'Dependency flow',
    unidir: 'UNIDIRECTIONAL',
    howTitle: 'How to read',
    howText:
      'Each preset maps to real CLI flags. The center shows the generated files; the right shows the dependency flow between layers.',
    rules: [
      { label: 'Golden rule', value: 'PAGE → SERVICE → HTTP' },
      { label: 'Store', value: 'OPTIONAL / SHARED' },
      { label: 'Public entry', value: 'INDEX.TS (BARREL)' },
    ],
    roles: [
      'HTTP layer via httpClient (fetch or axios).',
      'Domain data + CRUD. No UI state.',
      'Loading + error. Delegates to the service.',
      'Thin page. Calls load() on mount.',
    ],
    presets: [
      {
        label: 'Complete',
        tagline: 'Pinia + Router. The standard for product features.',
        notes: ['Pinia store in Composition API', 'Lazy-loaded route in routes.ts', 'Public barrel in index.ts'],
      },
      {
        label: 'CRUD',
        tagline: 'Service + composables with create/update/remove methods.',
        notes: ['Types gain CreateDto + UpdateDto', 'Same service/page split'],
      },
      {
        label: 'Lean',
        tagline: 'Only the essentials. No store, no view, no route.',
        notes: ['Layers via --only / --exclude / --no-*', 'Ideal for pure domain modules'],
      },
      {
        label: 'No Router',
        tagline: 'For projects without Vue Router: no views or routes.',
        notes: ['Auto-detected at vf init', 'routes.ts omitted'],
      },
    ],
  },
  benefits: {
    tag: 'Operational discipline',
    title: 'Why do opinionated conventions beat loose flexibility?',
    intro:
      'In large projects, unrestricted freedom turns into tech debt. When the team needs rigid rails, vue-feat-cli sets the standard so everyone focuses on the product, with agents and CI on the same contract.',
    items: [
      {
        title: 'Zero PR debates',
        text: 'Every file has an exact destination: service, composable, store, view. No more debates about where to save that composable or type.',
        footer: 'RULE: 1 FILE = 1 DESTINATION',
      },
      {
        title: 'Service / page split',
        text: 'useXxxService owns domain data; useXxxPage owns loading and error. Thin views, reusable even in modals with no ghost spinners.',
        footer: 'SERVICE → PAGE → VIEW',
      },
      {
        title: 'Instant generators',
        text: 'vf g:feat raises services, composables, Pinia store, types, view, route and barrel in seconds, with --dry-run --json for agents and CI.',
        footer: 'HEADLESS: --JSON FOR AGENTS',
      },
      {
        title: 'Built-in diagnosis',
        text: 'vf doctor validates config, @ alias, deps vs config and http client. vf agents:init writes AGENTS.md so every agent follows the same contract.',
        footer: 'VF DOCTOR + AGENTS:INIT',
      },
    ],
  },
  comparison: {
    tag: 'Structural diagnosis',
    title: 'Conventional chaos versus the vue-feat-cli standard',
    sub: 'The practical difference once the app passes 50 thousand lines of code.',
    chaosTitle: 'The typical chaotic monolith',
    deprecated: 'Deprecated',
    chaosComment: '// 140+ files with no clear owner',
    chaosTree: [
      'src/components/  (142 orphan files)',
      '├─ UserModal.vue',
      '├─ UserCheckoutTable.vue',
      '├─ ProductCardFinalV2.vue',
      '├─ useUser.ts  <-- coupled to useCart and useAuth',
      '├─ useGlobalHack.ts',
      '└─ stores/index.ts  (3,200 lines)',
    ],
    chaosPoints: [
      'Circular imports cause unpredictable production bugs.',
      'Impossible to test business rules without rendering the DOM.',
      'Refactoring a button breaks the entire checkout flow.',
    ],
    tacticTitle: 'Feature-based standard',
    strict: 'VF STRICT',
    tacticComment: '// Self-contained slices: vf g:feat Product',
    tacticTree: [
      'src/features/product/',
      '├── services/ product.service.ts',
      '├── composables/ useProductService + useProductPage',
      '├── stores/ product.store.ts (Pinia)',
      '├── types/ product.types.ts',
      '├── views/ ProductView.vue',
      '├── routes.ts (lazy-loaded)',
      '└── index.ts (public barrel)',
    ],
    tacticPoints: [
      'Self-contained slices: any dev finds the code in seconds.',
      'Barrel index.ts as the single public entry of the feature.',
      'Optional store, only for state shared across features.',
    ],
  },
  agents: {
    tag: 'Headless for agents and CI',
    title: 'Built for agents. Not just humans.',
    intro:
      'Every generator runs with no interactive prompt and returns parseable JSON. The recommended flow lives in the AGENTS.md generated by the CLI itself.',
    steps: [
      {
        title: '1. Diagnose before generating',
        text: 'The agent reads config, folders, @ alias, deps and templates as JSON. Exit code 1 on failure.',
      },
      {
        title: '2. Preview without writing',
        text: 'Stdout becomes pure JSON with files[] and per-file status: dry-run, created, skipped or exists.',
      },
      {
        title: '3. Lock the contract in the repo',
        text: 'Generates AGENTS.md with stack, layers and headless flags. Commit it so every agent follows the same standard.',
      },
    ],
    jsonTitle: 'stdout in --json mode',
    parseable: 'parseable',
    rules: [
      { label: 'Warnings', value: 'THEY GO IN warnings[]' },
      { label: 'Failure', value: 'EXIT CODE 1' },
      { label: 'Overwrite', value: '--FORCE --JSON' },
    ],
  },
  cta: {
    eyebrow: 'Interactive setup // 3 steps',
    title: 'Your first feature in under 1 minute.',
    steps: [
      {
        title: '1. vf init',
        text: 'Detects Pinia, Router, Axios and the @ alias. Generates vf.config.json + http client.',
      },
      {
        title: '2. vf g:feat Name',
        text: 'Scaffolds the full or partial feature (--only / --exclude / --no-*).',
      },
      {
        title: '3. vf doctor',
        text: 'Validates config, folders, alias and deps. Run with --json in agents and CI.',
      },
    ],
    links: ['Read the README', 'GitHub (MIT)', 'npm', 'Support via Issues'],
  },
  footer: {
    tagline: 'Opinionated feature-based scaffolding for Vue 3: service → composable → store → view.',
    badges: ['MIT LICENSE', 'VUE 3.5 STRICT'],
    bottom: 'vue <3',
    links: ['GitHub', 'npm', 'Issues'],
  },
}
