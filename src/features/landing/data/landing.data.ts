import type { AgentMeta, FlowMeta, PresetMeta } from '../types/landing.types'

export const INSTALL_COMMAND = 'npm install -g vue-feat-cli'
export const INIT_COMMAND = 'vf init'
export const FIRST_FEAT_COMMAND = 'vf g:feat Product'
export const NPX_COMMAND = 'npx vue-feat-cli init'

export const REPO_URL = 'https://github.com/jotape-exe/vue-feat-cli'
export const README_URL = 'https://github.com/jotape-exe/vue-feat-cli#readme'
export const NPM_URL = 'https://www.npmjs.com/package/vue-feat-cli'
export const ISSUES_URL = 'https://github.com/jotape-exe/vue-feat-cli/issues'

export const FLOW_META: FlowMeta[] = [
  { name: 'Service', file: 'product.service.ts', icon: 'ph:cloud-arrow-down' },
  { name: 'useProductService', file: 'useProductService.ts', icon: 'ph:cpu' },
  { name: 'useProductPage', file: 'useProductPage.ts', icon: 'ph:monitor' },
  { name: 'ProductView', file: 'ProductView.vue', icon: 'ph:browser' },
]

export const PRESET_META: PresetMeta[] = [
  {
    id: 'complete',
    command: 'vf g:feat Product',
    layers: ['service', 'composables', 'store', 'types', 'view', 'routes', 'index'],
    files: [
      'src/features/product/composables/useProductService.ts',
      'src/features/product/composables/useProductPage.ts',
      'src/features/product/services/product.service.ts',
      'src/features/product/stores/product.store.ts',
      'src/features/product/types/product.types.ts',
      'src/features/product/views/ProductView.vue',
      'src/features/product/routes.ts',
      'src/features/product/components/',
      'src/features/product/index.ts',
    ],
  },
  {
    id: 'crud',
    command: 'vf g:feat Product --with-crud',
    layers: ['service', 'composables', 'store', 'types', 'view', 'routes', 'index'],
    files: [
      'src/features/product/composables/useProductService.ts  # +CRUD',
      'src/features/product/composables/useProductPage.ts     # +CRUD',
      'src/features/product/services/product.service.ts       # +CRUD',
      'src/features/product/stores/product.store.ts',
      'src/features/product/types/product.types.ts            # +CreateDto/UpdateDto',
      'src/features/product/views/ProductView.vue',
      'src/features/product/routes.ts',
      'src/features/product/index.ts',
    ],
  },
  {
    id: 'minimal',
    command: 'vf g:feat Billing --only service,store',
    layers: ['service', 'store'],
    files: [
      'src/features/billing/services/billing.service.ts',
      'src/features/billing/stores/billing.store.ts',
      'src/features/billing/types/billing.types.ts',
    ],
  },
  {
    id: 'no-router',
    command: 'vf g:feat Product',
    layers: ['service', 'composables', 'store', 'types', 'index'],
    files: [
      'src/features/product/composables/useProductService.ts',
      'src/features/product/composables/useProductPage.ts',
      'src/features/product/services/product.service.ts',
      'src/features/product/stores/product.store.ts',
      'src/features/product/types/product.types.ts',
      'src/features/product/views/',
      'src/features/product/index.ts',
    ],
  },
]

export const BENEFIT_ICONS = ['ph:folder-notch-plus', 'ph:shield-check', 'ph:lightning', 'ph:stethoscope']

export const AGENT_META: AgentMeta[] = [
  { icon: 'ph:stethoscope', command: 'vf doctor --json' },
  { icon: 'ph:eye', command: 'vf g:feat Product --dry-run --json' },
  { icon: 'ph:robot', command: 'vf agents:init' },
]

export const CTA_ICONS = ['ph:terminal-bold', 'ph:folder-notch-plus-bold', 'ph:stethoscope-bold']

export const AGENTS_JSON_SAMPLE = `{
  "command": "generate:feat",
  "ok": true,
  "dryRun": true,
  "files": [
    { "path": "services/product.service.ts", "status": "dry-run" },
    { "path": "composables/useProductService.ts", "status": "dry-run" },
    { "path": "index.ts", "status": "dry-run" }
  ],
  "warnings": []
}`
