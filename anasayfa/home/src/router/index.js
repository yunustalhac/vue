// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import birinciders from "@/components/birinciders.vue";
import ikinciders from "@/components/ikinciders.vue"
import ucuncuders from "@/components/ucuncuders.vue"
import dorduncuders from "@/components/dorduncuders.vue"
import besinciders from "@/components/besinciders.vue"
import dersalti from "@/components/altinciders.vue"
import dersyedi from "@/components/dersyedi.vue"
import dersekiz from "@/components/sekizinciders.vue"
import dersdokuz from "@/components/dersdokuz.vue"
import derson from "@/components/derson.vue"
import dersonbir from "@/components/dersonbir.vue.vue"

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
    },{
        path: '/dersyedi',
        name: 'yedi',
        component: dersyedi,
    },{
        path: '/dersekiz',
        name: 'sekiz',
        component: dersekiz,
    },{
        path: '/dersdokuz',
        name: 'dokuz',
        component: dersdokuz,
    }, {
        path: '/derson',
        name: 'on',
        component: derson,
    },{
        path: '/onbir',
        name: 'onbir',
        component: dersonbir,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
