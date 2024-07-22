import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from "pinia";
import router from "./core/router/router";

const pinia = createPinia();

const myHealthApp = createApp(App);
myHealthApp.use(pinia);
myHealthApp.use(router);

myHealthApp.mount("#app");

// createApp(App).mount('#app')
