import { createApp } from 'vue'
import App from './App.vue'
// import UserForm from './views/UserForms.vue'
import '@vuepic/vue-datepicker/dist/main.css'
// import VueDatePicker from '@vuepic/vue-datepicker';
import router from './router';

const app = createApp(App)
app.use(router)
// UserForm.component('VueDatePicker', VueDatePicker)
.mount('#app')
