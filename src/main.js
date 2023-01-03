import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AppNotify from './components/AppNotify.vue'

const app = createApp(App)
app.component('app-notify',AppNotify)
app.mount('#app')
