// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import birinciders from "@/components/birinciders.vue";
import ikinciders from "@/components/ikinciders.vue"

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
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
