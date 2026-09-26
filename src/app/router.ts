import LandingView from '@/features/landing/views/LandingView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { DEFAULT_LOCALE, setLocale, storedLocale, SUPPORTED_LOCALES, type Locale } from './i18n'

function isLocale(v: unknown): v is Locale {
  return typeof v === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(v)
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: () => `/${storedLocale()}` },
    {
      path: '/:lang',
      name: 'landing',
      component: LandingView,
    },
    { path: '/:pathMatch(.*)*', redirect: `/${DEFAULT_LOCALE}` },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  if (to.params.lang === undefined) return true
  if (!isLocale(to.params.lang)) return `/${DEFAULT_LOCALE}`
  setLocale(to.params.lang)
  return true
})
