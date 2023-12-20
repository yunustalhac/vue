// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import birinciders from "@/components/birinciders.vue";
import ikinciders from "@/components/ikinciders.vue"
import ucuncuders from "@/components/ucuncuders.vue"
import dorduncuders from "@/components/dorduncuders.vue"
import besinciders from "@/components/besinciders.vue"
import dersalti from "@/components/altinciders.vue"

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
    }, {
        path: '/dorduncuders',
        name: 'dorduncuders',
        component:dorduncuders ,
    }, {
        path: '/besinciders',
        name: 'dersbes',
        component: besinciders,
    }, {
        path: '/dersalti',
        name: 'alti',
        component: dersalti,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
