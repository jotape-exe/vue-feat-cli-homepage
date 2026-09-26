<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SectionTag from '@/shared/ui/SectionTag.vue'
import { AGENT_META, AGENTS_JSON_SAMPLE } from '../data/landing.data'
import type { AgentText, RuleRow } from '../types/landing.types'

const { t, tm } = useI18n()

const steps = computed(() => tm('agents.steps') as unknown as AgentText[])
const rules = computed(() => tm('agents.rules') as unknown as RuleRow[])
</script>

<template>
  <section id="agentes" class="w-full px-5 lg:px-10 py-8 lg:py-12 bg-surface border-b border-outline-variant">
    <div class="max-w-7xl mx-auto flex flex-col gap-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div class="max-w-2xl">
          <SectionTag index="VF // 05" :label="t('agents.tag')" />
          <h2 class="font-sans text-[26px] lg:text-[32px] font-bold tracking-tight text-on-surface pt-2">
            {{ t('agents.title') }}
          </h2>
        </div>
        <p class="text-[14px] text-on-surface-variant max-w-md">{{ t('agents.intro') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <ol class="lg:col-span-7 flex flex-col gap-2">
          <li
            v-for="(s, i) in steps"
            :key="AGENT_META[i]?.command"
            class="flex items-start gap-3 border border-outline-variant bg-surface-lowest p-4"
          >
            <span class="w-10 h-10 shrink-0 bg-inverse-surface text-inverse-on-surface flex items-center justify-center">
              <Icon :icon="AGENT_META[i]?.icon ?? 'ph:square-bold'" width="20" height="20" />
            </span>
            <div class="min-w-0">
              <div class="font-sans text-[16px] font-semibold text-on-surface">{{ s.title }}</div>
              <code class="inline-block mt-1 font-mono text-[12px] bg-surface-container border border-outline-variant px-2 py-0.5 text-on-surface select-all">{{ AGENT_META[i]?.command }}</code>
              <p class="text-[12px] text-on-surface-variant pt-1">{{ s.text }}</p>
            </div>
          </li>
        </ol>

        <div class="lg:col-span-5 flex flex-col gap-2">
          <div class="bg-inverse-surface border border-outline/30 flex-1 flex flex-col">
            <div class="flex items-center justify-between px-4 py-1.5 border-b border-outline/40 font-mono text-[10px] uppercase tracking-wider text-inverse-on-surface/70">
              <span>{{ t('agents.jsonTitle') }}</span>
              <span class="text-accent font-bold">{{ t('agents.parseable') }}</span>
            </div>
            <pre class="scroll-x-discreet-dark p-4 font-mono text-[12px] leading-[20px] text-inverse-on-surface overflow-x-auto flex-1">{{ AGENTS_JSON_SAMPLE }}</pre>
          </div>
          <div class="bg-surface-container border border-outline-variant p-3 font-mono text-[10px] text-on-surface-variant space-y-1">
            <div v-for="r in rules" :key="r.label" class="flex justify-between gap-2">
              <span>{{ r.label }}</span><span class="font-bold text-on-surface text-right">{{ r.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
