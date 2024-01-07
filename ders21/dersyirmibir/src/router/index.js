import {createRouter, createWebHashHistory} from "vue-router";
import {useAuthStore} from "@/store/authStore.ts";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/components/home.vue")      ,
            meta: {
                authReauired: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/loginViews.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/components/about.vue")   ,
            meta: {
                authRequired: true
            }
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