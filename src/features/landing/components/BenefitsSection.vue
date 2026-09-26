<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SectionTag from '@/shared/ui/SectionTag.vue'
import { BENEFIT_ICONS } from '../data/landing.data'
import type { BenefitText } from '../types/landing.types'

const { t, tm } = useI18n()

const items = computed(() => tm('benefits.items') as unknown as BenefitText[])
</script>

<template>
  <section class="w-full px-5 lg:px-10 py-8 lg:py-12 bg-surface border-b border-outline-variant">
    <div class="max-w-7xl mx-auto flex flex-col gap-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-outline-variant pb-4">
        <div class="max-w-2xl">
          <SectionTag index="VF // 03" :label="t('benefits.tag')" />
          <h2 class="font-sans text-[26px] lg:text-[32px] font-bold tracking-tight text-on-surface pt-2">
            {{ t('benefits.title') }}
          </h2>
        </div>
        <p class="text-[14px] text-on-surface-variant max-w-md">{{ t('benefits.intro') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-outline-variant bg-surface-lowest">
        <div
          v-for="(b, i) in items"
          :key="b.title"
          :class="[
            i === 3 ? '' : 'border-b md:border-b-0',
            i % 2 === 0 ? 'md:border-r' : '',
            i !== 3 ? 'lg:border-r' : '',
            'border-outline-variant p-6 flex flex-col justify-between hover:bg-surface-low transition-colors',
          ]"
        >
          <div class="flex flex-col gap-4">
            <div class="w-10 h-10 bg-primary/10 border border-primary flex items-center justify-center text-primary">
              <Icon :icon="BENEFIT_ICONS[i] ?? 'ph:square-bold'" width="20" height="20" />
            </div>
            <h3 class="font-sans text-[18px] font-semibold text-on-surface">{{ b.title }}</h3>
            <p class="text-[12px] leading-[18px] text-on-surface-variant">{{ b.text }}</p>
          </div>
          <div class="pt-6 border-t border-outline-variant/40 mt-4 font-mono text-[10px] text-primary font-bold uppercase">
            {{ b.footer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
