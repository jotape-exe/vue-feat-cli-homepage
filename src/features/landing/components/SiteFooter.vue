<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { ISSUES_URL, NPM_URL, REPO_URL } from '../data/landing.data'

const { t, tm } = useI18n()

const badges = computed(() => tm('footer.badges') as unknown as string[])
const links = computed(() => tm('footer.links') as unknown as string[])

const LINK_URLS = [REPO_URL, NPM_URL, ISSUES_URL]
const LINK_ICONS = ['ph:github-logo-bold', 'ph:package-bold', 'ph:lifebuoy-bold']
</script>

<template>
  <footer class="w-full border-t border-outline-variant bg-surface-low text-[12px] text-on-surface-variant">
    <div class="w-full px-5 lg:px-10 py-12 border-b border-outline-variant/60 max-w-7xl mx-auto">
      <div class="flex flex-col gap-3 max-w-xl">
        <div class="flex items-center gap-2">
          <span class="w-7 h-7 bg-primary text-on-primary flex items-center justify-center font-mono font-bold text-[13px]">vf</span>
          <span class="font-sans text-[18px] tracking-tight text-on-surface font-bold">vue-feat-cli</span>
        </div>
        <p class="text-[14px]">{{ t('footer.tagline') }}</p>
        <div class="flex items-center gap-2 pt-1 font-mono text-[11px]">
          <span
            v-for="(b, i) in badges"
            :key="b"
            :class="i === 1 ? 'px-1.5 py-0.5 border border-outline-variant bg-surface-container text-primary font-semibold' : 'px-1.5 py-0.5 border border-outline-variant bg-surface-container'"
          >
            {{ b }}
          </span>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider">
      <span>{{ t('footer.bottom') }}</span>
      <span class="flex items-center gap-3">
        <a
          v-for="(label, i) in links"
          :key="label"
          class="flex items-center gap-1 hover:text-on-surface"
          :href="LINK_URLS[i]"
          target="_blank"
          rel="noreferrer"
        >
          <Icon :icon="LINK_ICONS[i] ?? 'ph:link-bold'" width="14" height="14" /> {{ label }}
        </a>
      </span>
    </div>
  </footer>
</template>
