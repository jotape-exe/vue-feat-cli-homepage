import { createApp } from 'vue'
import App from './app/App.vue'
import { i18n } from './app/i18n'
import { router } from './app/router'
import './theme.css'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
