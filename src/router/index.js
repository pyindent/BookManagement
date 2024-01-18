import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'

const routes = [
    {
        path: '/',
        component: Home,
    },{
        path: '/signin',
        component: SignIn,
    },{
        path: '/signup',
        component: SignUp,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router