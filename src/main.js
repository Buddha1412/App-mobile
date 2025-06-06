import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@vuepic/vue-datepicker/dist/main.css'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
console.log('Vue app is starting...')