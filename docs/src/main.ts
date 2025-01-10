import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import VueDevkit from 'vue-devkit';
createApp(App).use(VueDevkit).use(router)
  .mount('#app')
