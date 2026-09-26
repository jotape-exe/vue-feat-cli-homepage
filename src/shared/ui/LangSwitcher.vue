<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { SUPPORTED_LOCALES, type Locale } from '@/app/i18n'

const route = useRoute()
const router = useRouter()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const current = computed(() => (route.params.lang as Locale) || 'en')

const NAMES: Record<Locale, string> = { en: 'English', es: 'Español', pt: 'Português' }

function toggle(): void {
  open.value = !open.value
}

function close(): void {
  open.value = false
}

function pick(lang: Locale): void {
  close()
  if (lang === current.value) return
  router.push({ name: 'landing', params: { lang } })
}

function onKey(e: KeyboardEvent): void {
  if (e.key === 'Escape') close()
}

function onDocClick(e: MouseEvent): void {
  if (root.value && !root.value.contains(e.target as Node)) close()
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="relative">
    <button
      :aria-expanded="open"
      aria-haspopup="listbox"
      :class="[
        'flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] font-bold uppercase cursor-pointer transition-colors',
        open
          ? 'bg-inverse-surface text-inverse-on-surface border-inverse-surface'
          : 'bg-surface-lowest text-on-surface border-outline-variant hover:border-primary',
      ]"
      @click="toggle"
    >
      <Icon icon="ph:translate-bold" width="14" height="14" class="shrink-0" />
      <span>{{ NAMES[current] ?? current }}</span>
      <Icon :icon="open ? 'ph:caret-up-bold' : 'ph:caret-down-bold'" width="12" height="12" />
    </button>
    <ul
      v-if="open"
      role="listbox"
      class="absolute right-0 top-full mt-1 min-w-full border border-outline-variant bg-surface-lowest shadow-[2px_2px_0px_#002112] z-50"
    >
      <li v-for="lang in SUPPORTED_LOCALES" :key="lang">
        <button
          role="option"
          :aria-selected="lang === current"
          :class="[
            'w-full text-left px-3 py-1.5 font-mono text-[10px] font-bold uppercase cursor-pointer transition-colors flex items-center justify-between gap-3',
            lang === current
              ? 'bg-inverse-surface text-inverse-on-surface'
              : 'text-on-surface hover:bg-surface-container',
          ]"
          @click="pick(lang)"
        >
          <span>{{ NAMES[lang] }}</span>
          <Icon v-if="lang === current" icon="ph:check-bold" width="12" height="12" />
        </button>
      </li>
    </ul>
  </div>
</template>
