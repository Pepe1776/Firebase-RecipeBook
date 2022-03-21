import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Print from 'vue-print-nb'

createApp(App)
  .use(Print)
  .use(router)
  .mount('#app')
