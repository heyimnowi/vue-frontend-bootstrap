import { defineConfig } from 'vite'
import pugLint from 'vite-plugin-vue-pug-lint'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

export default defineConfig({
  define: {
    'process.env': {},
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __VUE_I18N_PROD_DEVTOOLS__: false
  },
  plugins: [
    pugLint(),
    vue(),
    vuetify({
      autoImport: true
    }),
    vueI18n({
      include: path.resolve(__dirname, 'src/locales/**')
    })
  ],
  envDir: path.resolve(__dirname, 'src/environment'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: { },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/application.scss";'
      }
    }
  }
});
