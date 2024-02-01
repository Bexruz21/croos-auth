import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue"
import SignUp from "./pages/SignUp.vue"
import Home from "./pages/Home.vue"



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/login", component: Login },
        { path: "/sign-up", component: SignUp },
    ]
})

export default router