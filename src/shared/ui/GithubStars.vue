<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const REPO = 'jotape-exe/vue-feat-cli'
const stars = ref<number | null>(null)

function format(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',').replace(',0', '')}k` : `${n}`
}

onMounted(async () => {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`)
    if (!res.ok) return
    const data = await res.json()
    if (typeof data.stargazers_count === 'number') stars.value = data.stargazers_count
  } catch {
    /* offline ou rate limit: mantém fallback estático */
  }
})
</script>

<template>
  <a
    :href="`https://github.com/${REPO}`"
    target="_blank"
    rel="noreferrer"
    title="Ver no GitHub"
    class="flex items-center gap-1.5 border border-outline-variant bg-surface-lowest px-2 py-0.5 font-mono text-[10px] font-bold text-on-surface hover:border-primary hover:text-primary transition-colors"
  >
    <Icon icon="ph:star-bold" width="14" height="14" />
    <span>{{ stars !== null ? format(stars) : 'Star' }}</span>
  </a>
</template>
