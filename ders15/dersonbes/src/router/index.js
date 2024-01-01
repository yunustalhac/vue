// src/router/index.js
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import("@/components/home.vue"),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("@/components/about.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
