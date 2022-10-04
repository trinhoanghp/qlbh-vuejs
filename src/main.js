import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './axios.js'

import axios from 'axios';
const token = localStorage.getItem('access_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

createApp(App).use(store).use(router).mount('#app') 