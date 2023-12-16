// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import birinciders from "@/components/birinciders.vue";
import ikinciders from "@/components/ikinciders.vue"
import ucuncuders from "@/components/ucuncuders.vue"

const routes = [
    {
        path: '/birinciders',
        name: 'birinci',
        component: birinciders,
    },
    {
        path: '/ikinciders',
        name: 'ikinci',
        component: ikinciders,
    },    {
        path: '/dersuc',
        name: 'dersuc',
        component: ucuncuders,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
