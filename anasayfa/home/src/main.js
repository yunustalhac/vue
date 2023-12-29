import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

import router from './router/index.js';

const app = createApp(App)
app.use(router)
import {plugin, defaultConfig} from '@formkit/vue'

app.use(plugin, defaultConfig({theme: "genesis"}))

app.mount('#app')
