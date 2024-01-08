import {createRouter, createWebHistory} from "vue-router";
import {useAuthStore} from "@/store/authStore.ts";
import home from "../components/home.vue"
import about from "../components/about.vue"
import login from "../views/loginViews.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/home",
            name: "home",
            component: home,
            meta: {
                authRequired: true
            }
        },
        {
            path: "/about",
            name: "about",
            component: about,
            meta: {
                authRequired: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: login,

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