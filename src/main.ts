import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Google
import vue3GoogleLogin from 'vue3-google-login'

// Importer les styles CSS
import './assets/main.css'
import './assets/styles/app.css'

// PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'

const app = createApp(App);
console.debug("Environment : " + import.meta.env.MODE);


app.use(PrimeVue);
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID
});
app.mount('#app')

