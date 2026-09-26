<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import CopyCommand from '@/shared/ui/CopyCommand.vue'
import { FIRST_FEAT_COMMAND, INIT_COMMAND, INSTALL_COMMAND, NPX_COMMAND } from '../data/landing.data'

const { t, tm } = useI18n()

const steps = computed(() => [
  { command: INSTALL_COMMAND, hint: (tm('quick.hints') as unknown as string[])[0] ?? '' },
  { command: INIT_COMMAND, hint: (tm('quick.hints') as unknown as string[])[1] ?? '' },
  { command: FIRST_FEAT_COMMAND, hint: (tm('quick.hints') as unknown as string[])[2] ?? '' },
])

const copiedIndex = ref<number | null>(null)

async function copy(command: string, index: number) {
  try {
    await navigator.clipboard.writeText(command)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = command
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  copiedIndex.value = index
  setTimeout(() => (copiedIndex.value = null), 2000)
}
</script>

<template>
  <div class="bg-inverse-surface text-inverse-on-surface border border-outline/40">
    <div
      class="flex items-center justify-between px-4 py-1.5 border-b border-outline/40 font-mono text-[10px] uppercase tracking-wider text-inverse-on-surface/70"
    >
      <span>{{ t('quick.title') }}</span>
      <span class="flex items-center gap-1">
        <span class="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span> {{ t('quick.steps') }}
      </span>
    </div>
    <div class="px-4 py-2">
      <div
        v-for="(s, i) in steps"
        :key="s.command"
        class="flex items-center gap-2 py-1.5 border-b border-outline/20 last:border-0"
      >
        <span class="text-primary-fixed font-mono font-bold select-none">$</span>
        <code class="font-mono text-[13px] font-medium select-all truncate flex-1">{{ s.command }}</code>
        <span class="font-mono text-[10px] text-inverse-on-surface/50 uppercase hidden sm:inline">{{ s.hint }}</span>
        <button
          class="text-primary-fixed-dim hover:text-primary-fixed cursor-pointer shrink-0"
          :title="s.command"
          @click="copy(s.command, i)"
        >
          <Icon :icon="copiedIndex === i ? 'ph:check-bold' : 'ph:copy-bold'" width="14" height="14" />
        </button>
      </div>
    </div>
    <div class="px-4 py-1.5 border-t border-outline/40 font-mono text-[10px] text-inverse-on-surface/60">
      {{ t('quick.noInstall') }}
      <button class="text-primary-fixed hover:underline font-bold" @click="copy(NPX_COMMAND, 99)">
        {{ NPX_COMMAND }}
      </button>
      <span v-if="copiedIndex === 99" class="text-accent font-bold">{{ t('quick.copied') }}</span>
    </div>
  </div>
</template>
