import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
import { apiClient } from './api/apiClient'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { ar, en } from '@formkit/i18n'
import { rootClasses } from './formkit.theme'

import { createI18n } from 'vue-i18n'
import VueDevkit, { type VueDevkitConfig } from 'vue-devkit';
import 'vue-devkit/style';
// import type { VueDevkitConfig } from 'vue-devkit/types/src/types';
// import type { IconListResponse } from '@buf/ahmeddarwish_devkit-api.bufbuild_es/devkit/v1/public_icon_pb'
// import { apiClient } from './api/mock';
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const config: VueDevkitConfig<typeof apiClient> = {
  // iconList: new Promise<IconListResponse>((r) => apiClient.iconList({}).then(resp => r(resp))),
  // iconList: 'iconList',
  // primevueConfig: {
  //   theme: {
  //     options: {
  //     }
  //   }
  // },
  // const config = {
  iconList: apiClient.iconList,
  apiClient
}

const i18n = createI18n({
  locale: 'en', // Default locale
  globalInjection: true,
  messages: {
    en: {
      hello: 'Hello!',
    },
    ar: {
      hello: 'اهلا!',
    },
  },
});
app
  .use(plugin, defaultConfig({
    locales: { en, ar },
    locale: 'en',
    icons: {
      ...genesisIcons
    },
    config: {
      rootClasses
    }
  }))
  .use(VueDevkit, config)
  .use(router)
app.use(i18n)

// mount
app.mount('#app')
