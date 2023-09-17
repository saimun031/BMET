import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
// import "./assets/css/pendingapproval.css";
// import "./assets/css/applications.css";
// import "./assets/css/pendinglist.css";
// import "../src/assets/css/nothiform.css";
// import "../src/assets/css/ongikarnama.css";
// import "../src/assets/css/putupshit.css";

// import "vue3-dropdown-navbar/preflight.css";


import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// import './assets/css/pendingapproval.css';

// const app = createApp(App)
// app.use(BootstrapVue3)
createApp(App).use(store).use(router).use(bootstrap).use(BootstrapVue3).mount('#app')
