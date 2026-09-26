<script setup lang="ts">
defineProps<{ index: string; label: string }>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
    <span class="px-2 py-0.5 bg-inverse-surface text-inverse-on-surface font-bold">{{ index }}</span>
    <span class="text-primary font-bold">{{ label }}</span>
  </div>
</template>
