import './assets/main.css'
import './assets/styles/app.css'

import router from '@/router'
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

console.debug("Environment : " + import.meta.env.MODE);

app.use(router)

app.mount('#app')
