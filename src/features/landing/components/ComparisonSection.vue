<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SectionTag from '@/shared/ui/SectionTag.vue'

const { t, tm } = useI18n()

const chaosTree = computed(() => tm('comparison.chaosTree') as unknown as string[])
const chaosPoints = computed(() => tm('comparison.chaosPoints') as unknown as string[])
const tacticTree = computed(() => tm('comparison.tacticTree') as unknown as string[])
const tacticPoints = computed(() => tm('comparison.tacticPoints') as unknown as string[])
</script>

<template>
  <section id="comparativo" class="w-full px-5 lg:px-10 py-8 lg:py-12 bg-surface-low border-b border-outline-variant">
    <div class="max-w-7xl mx-auto flex flex-col gap-6">
      <div class="text-center max-w-2xl mx-auto">
        <div class="flex justify-center"><SectionTag index="VF // 04" :label="t('comparison.tag')" /></div>
        <h2 class="font-sans text-[26px] lg:text-[32px] font-bold text-on-surface pt-2">
          {{ t('comparison.title') }}
        </h2>
        <p class="text-[14px] text-on-surface-variant pt-1">{{ t('comparison.sub') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-surface-lowest border border-error/50 p-4 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-error/30 pb-1 text-error font-bold font-mono text-[11px] uppercase">
            <span class="flex items-center gap-1.5">
              <Icon icon="ph:warning-octagon-bold" width="16" height="16" /> {{ t('comparison.chaosTitle') }}
            </span>
            <span>{{ t('comparison.deprecated') }}</span>
          </div>
          <div class="scroll-x-discreet bg-surface-container p-4 font-mono text-[13px] text-on-surface space-y-1 overflow-x-auto border border-outline-variant/40">
            <div class="text-error font-bold">{{ t('comparison.chaosComment') }}</div>
            <div v-for="line in chaosTree" :key="line" class="whitespace-nowrap">{{ line }}</div>
          </div>
          <div class="space-y-1 text-[12px] text-on-surface-variant pt-1">
            <div v-for="p in chaosPoints" :key="p" class="flex items-center gap-1.5 text-error font-medium">
              <Icon icon="ph:x-circle-bold" width="16" height="16" /> {{ p }}
            </div>
          </div>
        </div>

        <div class="bg-surface-lowest border-2 border-primary p-4 flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-primary/30 pb-1 text-primary font-bold font-mono text-[11px] uppercase">
            <span class="flex items-center gap-1.5">
              <Icon icon="ph:seal-check-bold" width="16" height="16" /> {{ t('comparison.tacticTitle') }}
            </span>
            <span class="bg-primary text-on-primary px-1.5 py-0.5">{{ t('comparison.strict') }}</span>
          </div>
          <div class="scroll-x-discreet-dark bg-inverse-surface p-4 font-mono text-[13px] text-inverse-on-surface space-y-1 overflow-x-auto border border-outline/30">
            <div class="text-primary-fixed font-bold">{{ t('comparison.tacticComment') }}</div>
            <div v-for="line in tacticTree" :key="line" class="whitespace-nowrap">{{ line }}</div>
          </div>
          <div class="space-y-1 text-[12px] text-on-surface pt-1">
            <div v-for="p in tacticPoints" :key="p" class="flex items-center gap-1.5 text-primary font-semibold">
              <Icon icon="ph:check-circle-bold" width="16" height="16" /> {{ p }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
