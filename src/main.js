import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import router from '@/router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import VueUILibrary from 'vue-ui-library';

loadFonts()

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale: 'en',
  messages
})

createApp(App)
  .use(vuetify)
  .use(i18n)
  .use(router)
  .use(VueUILibrary)
  .use(createPinia())
  .mount('#app')
