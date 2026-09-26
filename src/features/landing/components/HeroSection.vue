<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import QuickStartTerminal from '../components/QuickStartTerminal.vue'
import GithubStars from '@/shared/ui/GithubStars.vue'
import LangSwitcher from '@/shared/ui/LangSwitcher.vue'
import { README_URL } from '../data/landing.data'
import type { TeleItem } from '../types/landing.types'

const { t, tm } = useI18n()

const badges = computed(() => tm('hero.badges') as unknown as string[])
const tele = computed(() => tm('hero.tele') as unknown as TeleItem[])
</script>

<template>
  <section class="w-full px-5 lg:px-10 py-8 lg:py-12 bg-surface border-b border-outline-variant/70">
    <div class="max-w-7xl mx-auto flex flex-col gap-6">
      <div
        class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-outline-variant/40 font-mono text-[11px] uppercase tracking-wider text-on-surface-variant"
      >
        <div class="flex items-center gap-2 min-w-0">
          <span class="px-2 py-0.5 bg-inverse-surface text-inverse-on-surface font-bold shrink-0">VF // 01</span>
          <span class="truncate">{{ t('hero.eyebrowA') }}</span>
          <span class="text-outline hidden sm:inline">/</span>
          <span class="text-primary font-bold hidden sm:inline">{{ t('hero.eyebrowB') }}</span>
        </div>
        <div class="flex flex-wrap items-center gap-2 text-[10px]">
          <span class="hidden md:flex items-center gap-1">
            <span class="w-2 h-2 bg-primary inline-block"></span> {{ t('hero.legend1') }}
          </span>
          <GithubStars />
          <a
            :href="README_URL"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-1.5 bg-primary text-on-primary px-2 py-0.5 font-mono text-[10px] font-bold uppercase hover:bg-on-primary-container transition-colors"
          >
            <Icon icon="ph:book-open-bold" width="14" height="14" />
            <span>{{ t('hero.docs') }}</span>
          </a>
          <LangSwitcher />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-1">
        <div class="lg:col-span-8 flex flex-col gap-4">
          <h1 class="font-sans text-[32px] lg:text-[48px] leading-[1.15] tracking-tight text-on-surface font-bold">
            {{ t('hero.titleA') }}
            <span class="text-primary underline decoration-primary/40 decoration-4 underline-offset-4">Vue.js</span>.
          </h1>
          <p class="font-mono text-[11px] text-outline -mt-2">{{ t('hero.titleNote') }}</p>
          <p class="text-[16px] leading-[26px] text-on-surface-variant max-w-3xl">
            {{ t('hero.sub') }}
          </p>
          <div class="flex items-start gap-2 border border-outline-variant bg-surface-container p-3 max-w-3xl">
            <Icon icon="ph:scales-bold" width="18" height="18" class="text-secondary shrink-0 mt-0.5" />
            <p class="text-[12px] leading-[18px] text-on-surface-variant">
              <span class="font-mono text-[10px] font-bold uppercase tracking-wider text-on-surface block">{{ t('hero.discTitle') }}</span>
              {{ t('hero.discText') }}
            </p>
          </div>
          <div class="flex flex-wrap items-stretch gap-2 pt-1">
            <div class="flex flex-col gap-2">
              <a
                href="#arquitetura"
                class="flex-1 flex items-center gap-2 bg-primary hover:bg-on-primary-container text-on-primary px-6 py-3 font-mono text-[13px] font-bold uppercase transition-all shadow-[2px_2px_0px_#002112]"
              >
                <span>{{ t('hero.cta1') }}</span>
                <Icon icon="ph:arrow-right-bold" width="18" height="18" />
              </a>
              <a
                href="#comparativo"
                class="flex-1 flex items-center gap-2 bg-surface-lowest hover:bg-surface-container border border-outline px-4 py-3 font-mono text-[13px] text-on-surface font-bold uppercase transition-colors"
              >
                <Icon icon="ph:tree-structure-bold" width="18" height="18" />
                <span>{{ t('hero.cta2') }}</span>
              </a>
            </div>
            <QuickStartTerminal class="flex-1 min-w-[300px]" />
          </div>
          <div class="flex flex-wrap items-center gap-1.5 pt-1 font-mono text-[10px] text-on-surface-variant">
            <span class="uppercase tracking-widest font-bold text-on-surface mr-1">{{ t('hero.badgesTitle') }}</span>
            <span
              v-for="b in badges"
              :key="b"
              class="px-2 py-0.5 border border-outline-variant bg-surface-lowest font-semibold"
            >
              {{ b }}
            </span>
          </div>
        </div>

        <div class="lg:col-span-4 bg-surface-lowest border border-outline-variant p-4 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-outline-variant pb-1">
            <span class="font-mono text-[11px] uppercase tracking-wider text-on-surface font-bold">{{ t('hero.teleTitle') }}</span>
            <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div v-for="item in tele" :key="item.label" class="bg-surface-container p-3 border border-outline-variant/60">
              <span class="font-mono text-[10px] text-on-surface-variant block uppercase">{{ item.label }}</span>
              <span class="text-[20px] leading-[26px] text-primary font-bold break-all">{{ item.value }}</span>
              <span class="text-[12px] text-on-surface-variant block">{{ item.sub }}</span>
            </div>
          </div>
          <div class="border-t border-outline-variant pt-1 flex items-center justify-between font-mono text-[10px]">
            <span class="text-on-surface-variant">{{ t('hero.contract') }}</span>
            <span class="text-primary font-bold uppercase">MIT</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
