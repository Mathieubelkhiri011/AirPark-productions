import './assets/main.css'
import './assets/styles/app.css'

//Google
import vue3GoogleLogin from 'vue3-google-login'

import router from '@/router'
import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App);
console.debug("Environment : " + import.meta.env.MODE);

app.use(router)
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID
});
app.mount('#app');
