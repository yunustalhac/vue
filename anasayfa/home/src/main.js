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
import { createClient } from '@supabase/supabase-js'



// Create a single supabase client for interacting with your database
const supabase = createClient('https://vjscubdslsskiromsajp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqc2N1YmRzbHNza2lyb21zYWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2ODA2MDgsImV4cCI6MjAyMDI1NjYwOH0.VsDs-4onIawwxq6z1Opo-xvOMOd4rUbTzxRSJgN_UDs')

app.use(Antd);
app.use(plugin, defaultConfig({theme: "genesis"}))
app.use(pinia)

app.mount('#app')
