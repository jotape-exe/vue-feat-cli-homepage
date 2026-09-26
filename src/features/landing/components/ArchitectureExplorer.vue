<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import CopyCommand from '@/shared/ui/CopyCommand.vue'
import SectionTag from '@/shared/ui/SectionTag.vue'
import { FLOW_META, PRESET_META } from '../data/landing.data'
import type { PresetText, RuleRow } from '../types/landing.types'

const { t, tm } = useI18n()

const activeId = ref('complete')
const activeIndex = computed(() => Math.max(0, PRESET_META.findIndex((p) => p.id === activeId.value)))
const presetTexts = computed(() => tm('explorer.presets') as unknown as PresetText[])
const roles = computed(() => tm('explorer.roles') as unknown as string[])
const rules = computed(() => tm('explorer.rules') as unknown as RuleRow[])

const active = computed(() => PRESET_META[activeIndex.value] ?? PRESET_META[0])
const activeText = computed(() => presetTexts.value[activeIndex.value] ?? presetTexts.value[0])
</script>

<template>
  <section id="arquitetura" class="w-full px-5 lg:px-10 py-8 lg:py-12 bg-surface-low border-b border-outline-variant">
    <div class="max-w-7xl mx-auto flex flex-col gap-4">
      <SectionTag index="VF // 02" :label="t('explorer.tag')" />
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <h2 class="font-sans text-[26px] lg:text-[32px] leading-tight font-bold text-on-surface max-w-2xl">
          {{ t('explorer.title') }}
        </h2>
        <p class="text-[14px] leading-[22px] text-on-surface-variant max-w-md">
          {{ t('explorer.intro') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 border border-outline-variant bg-surface-lowest">
        <div class="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-outline-variant p-4 flex flex-col gap-3">
          <div class="flex items-center justify-between pb-1 border-b border-outline-variant/60">
            <span class="font-mono text-[11px] uppercase tracking-wider font-bold text-on-surface">{{ t('explorer.preset') }}</span>
            <span class="font-mono text-[10px] text-on-surface-variant">VF G:FEAT</span>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-1 gap-1.5">
            <button
              v-for="(p, i) in PRESET_META"
              :key="p.id"
              :class="[
                'p-3 border font-mono text-[11px] font-bold text-left transition-all cursor-pointer',
                p.id === activeId
                  ? 'bg-inverse-surface text-inverse-on-surface border-inverse-surface'
                  : 'bg-surface-lowest text-on-surface border-outline-variant hover:bg-surface-container',
              ]"
              @click="activeId = p.id"
            >
              <span class="block text-[13px]">{{ presetTexts[i]?.label }}</span>
              <span class="text-[10px] block opacity-70 font-medium normal-case">{{ presetTexts[i]?.tagline }}</span>
            </button>
          </div>
          <div class="mt-auto p-3 bg-surface-container border border-outline-variant text-on-surface-variant">
            <div class="flex items-center gap-1 text-primary font-bold font-mono text-[10px] uppercase">
              <Icon icon="ph:cursor-click-bold" width="16" height="16" />
              <span>{{ t('explorer.howTitle') }}</span>
            </div>
            <p class="text-[12px] leading-[18px] pt-1">{{ t('explorer.howText') }}</p>
          </div>
        </div>

        <div class="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-outline-variant p-4 flex flex-col gap-3">
          <div class="flex items-center justify-between border-b border-outline-variant/60 pb-1">
            <span class="font-mono text-[11px] uppercase font-bold">{{ t('explorer.filesTitle') }}</span>
            <span class="font-mono text-[10px] bg-surface-container px-1.5 py-0.5 text-on-surface-variant font-bold">
              {{ active.files.length }} {{ t('explorer.items') }}
            </span>
          </div>
          <div class="scroll-x-discreet-dark bg-inverse-surface p-4 font-mono text-[13px] text-inverse-on-surface space-y-1 overflow-x-auto border border-outline/30">
            <div class="text-primary-fixed font-bold">{{ t('explorer.fileComment', { label: activeText.label, count: active.files.length }) }}</div>
            <div v-for="f in active.files" :key="f" class="whitespace-nowrap">
              <span class="text-primary-fixed-dim">├──</span> {{ f }}
            </div>
          </div>
          <CopyCommand :command="active.command" compact />
          <ul class="space-y-1">
            <li
              v-for="n in activeText.notes"
              :key="n"
              class="flex items-start gap-1.5 text-[12px] text-on-surface-variant"
            >
              <Icon icon="ph:check-circle-bold" width="16" height="16" class="text-primary shrink-0 mt-[1px]" />
              <span>{{ n }}</span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-4 p-4 flex flex-col gap-3">
          <div class="flex items-center justify-between border-b border-outline-variant/60 pb-1">
            <span class="font-mono text-[11px] uppercase font-bold">{{ t('explorer.flowTitle') }}</span>
            <span class="font-mono text-[10px] text-primary font-bold">{{ t('explorer.unidir') }}</span>
          </div>
          <ol class="flex flex-col">
            <li v-for="(s, i) in FLOW_META" :key="s.file" class="flex flex-col">
              <div class="flex items-start gap-2 border border-outline-variant bg-surface-lowest p-2.5">
                <span class="w-8 h-8 shrink-0 bg-primary/10 border border-primary flex items-center justify-center text-primary">
                  <Icon :icon="s.icon" width="18" height="18" />
                </span>
                <div class="min-w-0">
                  <div class="font-mono text-[11px] font-bold text-on-surface">{{ s.name }}</div>
                  <div class="font-mono text-[10px] text-on-surface-variant truncate">{{ s.file }}</div>
                  <div class="text-[12px] text-on-surface-variant">{{ roles[i] }}</div>
                </div>
              </div>
              <div v-if="i < FLOW_META.length - 1" class="flex justify-center py-0.5 text-outline">
                <Icon icon="ph:arrow-down-bold" width="16" height="16" />
              </div>
            </li>
          </ol>
          <div class="bg-surface-container p-3 border border-outline-variant font-mono text-[10px] text-on-surface-variant space-y-1">
            <div v-for="r in rules" :key="r.label" class="flex justify-between gap-2">
              <span>{{ r.label }}</span><span class="font-bold text-on-surface text-right">{{ r.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
