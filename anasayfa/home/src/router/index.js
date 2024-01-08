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
import dersonbir from "@/components/dersonbir.vue"
import dersoniki from "@/components/dersoniki.vue"
import dersonuc from "@/components/dersonuc.vue"
import dersondort from "@/components/dersondort.vue"
import dersonbes from "@/components/dersonbes.vue"
import dersonalti from "@/components/onaltinciders.vue"
import dersonyedi from "@/components/dersonyedi.vue"
import dersonsekiz from "@/components/onsekizinciders.vue"
import dersondokuz from "@/components/dersondokuz.vue"
import yirmi from "@/components/yirmi.vue"
import yirmibir from "@/components/yirmibir.vue"
import yirmiki from "@/components/yirmiiki.vue"
import yirmiuc from "@/components/yirmiuc.vue"
import {useAuthStore} from "../../../../ders21/dersyirmibir/src/store/authStore.ts"

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
    }, {
        path: '/oniki',
        name: 'oniki',
        component: dersoniki,
    }, {
        path: '/onuc',
        name: 'onuc',
        component: dersonuc,
    }, {
        path: '/ondort',
        name: 'ondort',
        component: dersondort,
    },{
        path: '/onbes',
        name: 'onbes',
        component: dersonbes,
    },{
        path: '/onalti',
        name: 'onalti',
        component: dersonalti,
    },{
        path: '/onyedi',
        name: 'onyedi',
        component: dersonyedi,
    },{
        path: '/onsekiz',
        name: 'onsekiz',
        component: dersonsekiz,
    }, {
        path: '/ondokuz',
        name: 'ondokuz',
        component: dersondokuz,
    },{
        path: '/yirmi',
        name: 'yirmi',
        component: yirmi,
    },{
        path: '/yirmibir',
        name: 'yirmibir',
        component: yirmibir,
    }, {
        path: '/yirmiiki',
        name: 'yirmiki',
        component: yirmiki,
    }, {
        path: '/yirmiuc',
        name: 'yirmiuc',
        component: yirmiuc,
    },


    {
        path: "/home",
        name: "home",
        component: () => import("../../../../ders21/dersyirmibir/src/components/home.vue"),
        meta: {
            authRequired: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../../../../ders21/dersyirmibir/src/views/loginViews.vue")
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../../../../ders21/dersyirmibir/src/components/about.vue"),
        meta: {
            authRequired: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to) => {
    const authStore = useAuthStore()

    if (to.meta.authRequired && !authStore.isAuth) {
        location.href = "/login"
    }
})

export default router;
