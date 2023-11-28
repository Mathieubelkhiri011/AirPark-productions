// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from '@/router'
import { createApp } from 'vue'
import App from '@/App.vue'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

console.debug("Environment : " + import.meta.env.MODE);

app.use(vuetify)
app.use(router)

app.mount('#app')
