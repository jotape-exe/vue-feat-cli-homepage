<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'

const { t } = useI18n()

const props = withDefaults(defineProps<{ command: string; compact?: boolean }>(), { compact: false })

const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.command)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = props.command
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
  <div
    class="flex items-center justify-between gap-3 bg-inverse-surface text-inverse-on-surface border border-outline/40"
    :class="compact ? 'px-3 py-1.5' : 'px-4 py-2.5'"
  >
    <span class="flex items-center gap-2 min-w-0 flex-1">
      <span class="text-primary-fixed font-mono font-bold select-none">$</span>
      <code class="font-mono text-[13px] font-medium select-all truncate">{{ command }}</code>
    </span>
    <button
      class="text-primary-fixed-dim hover:text-primary-fixed text-[10px] font-mono font-bold border-l border-outline/40 pl-3 uppercase flex items-center gap-1 cursor-pointer shrink-0"
      @click="copy"
    >
      <Icon :icon="copied ? 'ph:check-bold' : 'ph:copy-bold'" width="14" height="14" />
      <span>{{ copied ? t('copy.copied') : t('copy.copy') }}</span>
    </button>
  </div>
</template>
