import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";

import router from './router/index.js';

const app = createApp(App)
const pinia = createPinia()
app.use(router)
import {plugin, defaultConfig} from '@formkit/vue'
import Antd from 'ant-design-vue';

app.use(Antd);
app.use(plugin, defaultConfig({theme: "genesis"}))
app.use(pinia)

app.mount('#app')
