export default {
  hero: {
    eyebrowA: 'Scaffolding dogmático',
    eyebrowB: 'Vue 3 por features',
    legend1: 'Service → Composable → Store → View',
    titleA: 'La estructura definitiva* para features',
    titleNote: '*definitiva = dogmática. Si el equipo no quiere opiniones, Vite base sigue ahí.',
    sub: 'Cambia carpetas improvisadas por módulos consistentes y tipados: service, composables, store y view. Los datos de dominio y el estado de UI viven en capas separadas.',
    discTitle: 'Sin balas de plata',
    discText:
      'vue-feat-cli impone una arquitectura dogmática. Compensa en equipos nuevos, proyectos grandes o múltiples squads. Para una pokedex de fin de semana, el scaffolding base de Vite basta.',
    cta1: 'Ver la estructura',
    cta2: 'Caos vs estándar',
    badgesTitle: 'Stack detectado en init:',
    badges: ['Vue 3.5+ Strict', 'Vite 6', 'TypeScript 5.6', 'Pinia (opcional)', 'Vue Router (opcional)', 'Axios o Fetch'],
    teleTitle: 'Por qué estandarizar',
    tele: [
      { label: 'Destino por archivo', value: '1:1', sub: '1 archivo = 1 destino' },
      { label: 'Punto público', value: 'index.ts', sub: 'Barrel por feature' },
      { label: 'Diagnóstico', value: 'vf doctor', sub: 'Antes de generar' },
      { label: 'Modo agente / CI', value: '--json', sub: 'Stdout parseable' },
    ],
    contract: 'CONTRATO: VF.CONFIG.JSON',
    docs: 'Documentación',
  },
  quick: {
    title: 'Quick start',
    steps: '3 pasos',
    hints: ['global', 'en proyecto', '1ª feature'],
    noInstall: '¿Sin instalar?',
    copied: '¡copiado!',
  },
  copy: {
    copy: 'Copiar',
    copied: '¡Copiado!',
  },
  explorer: {
    tag: 'Estructura generada, simple y directa',
    title: 'Un comando. Una feature completa y organizada.',
    intro:
      'Elige un preset para ver exactamente qué archivos genera el CLI y en qué capa vive cada uno. Sin metáfora de fútbol: solo carpetas, archivos y el flujo entre ellos.',
    preset: 'Preset',
    filesTitle: 'Archivos generados',
    items: 'ÍTEMS',
    fileComment: '// {label}: {count} ítems',
    flowTitle: 'Flujo de dependencia',
    unidir: 'UNIDIRECCIONAL',
    howTitle: 'Cómo leer',
    howText:
      'Cada preset corresponde a flags reales del CLI. El centro muestra los archivos generados; la derecha, el flujo de dependencia entre capas.',
    rules: [
      { label: 'Regla de oro', value: 'PAGE → SERVICE → HTTP' },
      { label: 'Store', value: 'OPCIONAL / COMPARTIDO' },
      { label: 'Punto público', value: 'INDEX.TS (BARREL)' },
    ],
    roles: [
      'Capa HTTP vía httpClient (fetch o axios).',
      'Datos de dominio + CRUD. Sin estado de UI.',
      'Loading + error. Delega al service.',
      'Página delgada. Llama load() en mount.',
    ],
    presets: [
      {
        label: 'Completa',
        tagline: 'Pinia + Router. El estándar para features de producto.',
        notes: ['Store Pinia en Composition API', 'Ruta lazy-loaded en routes.ts', 'Barrel público en index.ts'],
      },
      {
        label: 'CRUD',
        tagline: 'Service + composables con métodos create/update/remove.',
        notes: ['Types ganan CreateDto + UpdateDto', 'Misma separación service/page'],
      },
      {
        label: 'Esencial',
        tagline: 'Solo lo esencial. Sin store, sin view, sin ruta.',
        notes: ['Layers vía --only / --exclude / --no-*', 'Ideal para módulos de dominio puro'],
      },
      {
        label: 'Sin Router',
        tagline: 'Para proyectos sin Vue Router: sin views ni routes.',
        notes: ['Detectado automáticamente en vf init', 'routes.ts omitido'],
      },
    ],
  },
  benefits: {
    tag: 'Disciplina operativa',
    title: '¿Por qué las convenciones dogmáticas vencen a la flexibilidad laxa?',
    intro:
      'En proyectos grandes, la libertad sin restricciones se vuelve deuda técnica. Cuando el equipo necesita rieles rígidos, vue-feat-cli define el estándar para que todos se enfoquen en el producto, con agentes y CI en el mismo contrato.',
    items: [
      {
        title: 'Cero debates en PRs',
        text: 'Cada archivo tiene un destino exacto: service, composable, store, view. Se acaban los debates sobre dónde guardar ese composable o tipo.',
        footer: 'REGLA: 1 ARCHIVO = 1 DESTINO',
      },
      {
        title: 'Separación service / page',
        text: 'useXxxService cuida los datos de dominio; useXxxPage cuida loading y error. Views delgadas, reutilizables hasta en modales sin spinners fantasma.',
        footer: 'SERVICE → PAGE → VIEW',
      },
      {
        title: 'Generadores instantáneos',
        text: 'vf g:feat levanta services, composables, store Pinia, types, view, ruta y barrel en segundos, con --dry-run --json para agentes y CI.',
        footer: 'HEADLESS: --JSON PARA AGENTES',
      },
      {
        title: 'Diagnóstico incluido',
        text: 'vf doctor valida config, alias @, deps vs config y http client. vf agents:init genera el AGENTS.md para que todo agente siga el mismo contrato.',
        footer: 'VF DOCTOR + AGENTS:INIT',
      },
    ],
  },
  comparison: {
    tag: 'Diagnóstico estructural',
    title: 'Caos convencional versus estándar vue-feat-cli',
    sub: 'La diferencia práctica cuando la aplicación supera las 50 mil líneas de código.',
    chaosTitle: 'El monolito caótico típico',
    deprecated: 'Deprecated',
    chaosComment: '// 140+ archivos sin dueño claro',
    chaosTree: [
      'src/components/  (142 archivos huérfanos)',
      '├─ UserModal.vue',
      '├─ UserCheckoutTable.vue',
      '├─ ProductCardFinalV2.vue',
      '├─ useUser.ts  <-- acoplado a useCart y useAuth',
      '├─ useGlobalHack.ts',
      '└─ stores/index.ts  (3.200 líneas)',
    ],
    chaosPoints: [
      'Imports circulares causan bugs impredecibles en producción.',
      'Imposible probar reglas de negocio sin renderizar el DOM.',
      'Refactorizar un botón rompe todo el flujo de pago.',
    ],
    tacticTitle: 'Estándar por features',
    strict: 'VF STRICT',
    tacticComment: '// Rebanadas autocontenidas: vf g:feat Product',
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
      'Rebanadas autocontenidas: cualquier dev localiza el código en segundos.',
      'Barrel index.ts como único punto público de la feature.',
      'Store opcional, solo para estado compartido entre features.',
    ],
  },
  agents: {
    tag: 'Headless para agentes y CI',
    title: 'Hecho para agentes. No solo para humanos.',
    intro:
      'Todo generator corre sin prompt interactivo y devuelve JSON parseable. El flujo recomendado vive en el AGENTS.md generado por el propio CLI.',
    steps: [
      {
        title: '1. Diagnostica antes de generar',
        text: 'El agente lee config, carpetas, alias @, deps y templates en JSON. Exit code 1 en fallo.',
      },
      {
        title: '2. Previsualiza sin escribir nada',
        text: 'Stdout se vuelve JSON puro con files[] y estado por archivo: dry-run, created, skipped o exists.',
      },
      {
        title: '3. Fija el contrato en el repo',
        text: 'Genera el AGENTS.md con stack, capas y flags headless. Haz commit para que todo agente siga el mismo estándar.',
      },
    ],
    jsonTitle: 'stdout en modo --json',
    parseable: 'parseable',
    rules: [
      { label: 'Warnings', value: 'VAN EN warnings[]' },
      { label: 'Fallo', value: 'EXIT CODE 1' },
      { label: 'Sobrescribir', value: '--FORCE --JSON' },
    ],
  },
  cta: {
    eyebrow: 'Setup interactivo // 3 pasos',
    title: 'Tu primera feature en menos de 1 minuto.',
    steps: [
      {
        title: '1. vf init',
        text: 'Detecta Pinia, Router, Axios y el alias @. Genera vf.config.json + http client.',
      },
      {
        title: '2. vf g:feat Nombre',
        text: 'Genera la feature completa o parcial (--only / --exclude / --no-*).',
      },
      {
        title: '3. vf doctor',
        text: 'Valida config, carpetas, alias y deps. Corre con --json en agentes y CI.',
      },
    ],
    links: ['Leer README', 'GitHub (MIT)', 'npm', 'Soporte vía Issues'],
  },
  footer: {
    tagline: 'Scaffolding dogmático por features para Vue 3: service → composable → store → view.',
    badges: ['LICENCIA MIT', 'VUE 3.5 STRICT'],
    bottom: 'vue <3',
    links: ['GitHub', 'npm', 'Issues'],
  },
}
