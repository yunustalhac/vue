import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@/store/authStore.ts";
import MyDataComponent from "../components/data.vue";
import login from "../views/loginViews.vue";
import home from "../components/home.vue";
import about from "../components/about.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/data",
            name: "data",
            component: MyDataComponent ,
            meta: {
                authRequired: true,
                layout: 'mainLayout'
            }
        },
        {
            path: "/login",
            name: "login",
            component: login    ,
            meta: {
                authRequired: true,
                layout: 'loginLayout'
            }
        },
        {
            path: "/home",
            name: "home",
            component: home      ,
            meta: {
                authRequired: true,
                layout: 'mainLayout'
            }
        },
        {
            path: "/about",
            name: "about",
            component: about
        }
    ]
})

router.beforeEach((to) => {
    const authStore = useAuthStore()

    if (to.meta.authRequired && !authStore.isAuth) {
        location.href = "/login"
    }
})

export default router
