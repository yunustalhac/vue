// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import Birinciders from "@/components/birinciders.vue";

const routes = [
    {
        path: '/birinci',
        name: 'birinci',
        component: Birinciders,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
