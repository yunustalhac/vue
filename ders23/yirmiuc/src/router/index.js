import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/loginView.vue'
import {useAuthStore} from "@/store/authStore.ts";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeView,
            meta: {
                authRequired: true
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
            meta: {
                authRequired: true
            },
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        },
    ]
})


router.beforeEach((to) => {
    const authStore = useAuthStore()

    if (to.meta.authRequired && !authStore.isAuth) {
        location.href = "/login"
    }
})
export default router
