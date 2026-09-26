import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'
import pt from './locales/pt'

export const SUPPORTED_LOCALES = ['en', 'es', 'pt'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

const STORAGE_KEY = 'vf-lang'

export function storedLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'es' || v === 'pt') return v
  } catch {
    /* storage unavailable */
  }
  return DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, es, pt },
})

export function setLocale(lang: Locale): void {
  ;(i18n.global.locale as unknown as { value: Locale }).value = lang
  document.documentElement.lang = lang
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* storage unavailable */
  }
}
