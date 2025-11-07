import { createApp } from 'vue'
import App from '@/views/login/Login.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
