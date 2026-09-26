<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import CopyCommand from '@/shared/ui/CopyCommand.vue'
import { INIT_COMMAND, ISSUES_URL, NPM_URL, README_URL, REPO_URL, CTA_ICONS } from '../data/landing.data'
import type { CtaStepText } from '../types/landing.types'

const { t, tm } = useI18n()

const steps = computed(() => tm('cta.steps') as unknown as CtaStepText[])
const links = computed(() => tm('cta.links') as unknown as string[])

const LINK_URLS = [README_URL, REPO_URL, NPM_URL, ISSUES_URL]
const LINK_ICONS = ['ph:book-open-bold', 'ph:github-logo-bold', 'ph:package-bold', 'ph:lifebuoy-bold']
</script>

<template>
  <section class="w-full px-5 lg:px-10 py-12 bg-surface-container border-b border-outline-variant relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#006c47_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 relative z-10">
      <div class="flex items-center gap-2 font-mono text-[11px] text-primary font-bold uppercase tracking-wider">
        <span class="w-2 h-2 bg-primary rounded-full animate-ping"></span>
        <span>{{ t('cta.eyebrow') }}</span>
      </div>
      <h2 class="font-sans text-[32px] lg:text-[48px] font-bold tracking-tight text-on-surface">
        {{ t('cta.title') }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full text-left">
        <div v-for="(s, i) in steps" :key="s.title" class="bg-surface-lowest border border-outline-variant p-3 flex flex-col gap-1.5">
          <Icon :icon="CTA_ICONS[i] ?? 'ph:square-bold'" width="20" height="20" class="text-primary" />
          <div class="font-mono text-[11px] font-bold text-on-surface">{{ s.title }}</div>
          <div class="text-[12px] text-on-surface-variant">{{ s.text }}</div>
        </div>
      </div>
      <div class="w-full max-w-xl">
        <CopyCommand :command="INIT_COMMAND" />
      </div>
      <div class="flex flex-wrap items-center justify-center gap-3 pt-1 font-mono text-[11px]">
        <template v-for="(label, i) in links" :key="label">
          <span v-if="i > 0" class="text-outline">/</span>
          <a
            :class="i === 0 ? 'text-primary hover:underline font-bold flex items-center gap-1' : 'text-on-surface-variant hover:text-on-surface flex items-center gap-1'"
            :href="LINK_URLS[i]"
            target="_blank"
            rel="noreferrer"
          >
            <Icon :icon="LINK_ICONS[i] ?? 'ph:link-bold'" width="16" height="16" />
            <span>{{ label }}</span>
          </a>
        </template>
      </div>
    </div>
  </section>
</template>
