import "primevue/resources/themes/lara-light-blue/theme.css";

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true  });

app.component('PrimeButton', Button);

app.mount('#app')
