import { createApp } from 'vue'
import App from './App.vue'
import '@vuepic/vue-datepicker/dist/main.css'
import router from './router';
import liff from '@line/liff'

const app = createApp(App)
const liffId = '2007300744-2OQRxQ4Z'

liff.init({ liffId })
  .then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
    app.use(router)
      app.mount('#app');
    }
  })
  .catch((error) => {
    console.error('LIFF initialization failed', error);
  });
