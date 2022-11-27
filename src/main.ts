import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'
import '@unocss/reset/normalize.css'
import 'virtual:unocss-devtools'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from '@/router/index'
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})
app.use(vuetify)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
