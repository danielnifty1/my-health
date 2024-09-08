import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Notifications from "@kyvg/vue3-notification";
import { createPinia } from "pinia";
import router from "./core/router/router";


// initialize store
const pinia = createPinia();    
// create app
const myHealthApp = createApp(App);
myHealthApp.use(pinia);
myHealthApp.use(router);
 myHealthApp.use(Notifications);
myHealthApp.mount("#app");









// const pinia = createPinia();

// const myHealthApp = createApp(App);
// myHealthApp.use(pinia);
// myHealthApp.use(router);

// myHealthApp.mount("#app");

// createApp(App).mount('#app')
