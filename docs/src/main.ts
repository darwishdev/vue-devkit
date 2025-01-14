import { createApp } from 'vue'
import './style.css'
import './index.css';

import App from './App.vue'
import router from './routes'
import { apiClient } from './api/apiClient'
import { plugin, defaultConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { ar, en } from '@formkit/i18n'
import { rootClasses } from './formkit.theme'
import VueDevkit from 'vue-devkit';
import type { VueDevkitConfig } from 'vue-devkit/dist/types/src/types';
// import type { IconListResponse } from '@buf/ahmeddarwish_devkit-api.bufbuild_es/devkit/v1/public_icon_pb'
// import { apiClient } from './api/mock';
const app = createApp(App)
const config: VueDevkitConfig<typeof apiClient> = {
  // iconList: new Promise<IconListResponse>((r) => apiClient.iconList({}).then(resp => r(resp))),
  // iconList: 'iconList',
  // primevueConfig: {
  //   theme: {
  //     options: {
  //     }
  //   }
  // },

  iconList: apiClient.iconList,
  apiClient
}
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

// mount
app.mount('#app')
