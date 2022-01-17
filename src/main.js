import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './index.css'
import router from '@/router/index.js'

createApp(App).use(router, store).mount('#app')
