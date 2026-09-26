/** Metadados universais (não traduzidos): comandos, arquivos, ícones. */
export interface PresetMeta {
  id: string
  command: string
  layers: string[]
  files: string[]
}

export interface FlowMeta {
  name: string
  file: string
  icon: string
}

export interface AgentMeta {
  icon: string
  command: string
}

/** Textos traduzidos (vêm do locale via tm()). */
export interface PresetText {
  label: string
  tagline: string
  notes: string[]
}

export interface BenefitText {
  title: string
  text: string
  footer: string
}

export interface AgentText {
  title: string
  text: string
}

export interface CtaStepText {
  title: string
  text: string
}

export interface TeleItem {
  label: string
  value: string
  sub: string
}

export interface RuleRow {
  label: string
  value: string
}
