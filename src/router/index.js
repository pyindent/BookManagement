import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home'
import SignIn from '../views/auth/SignIn'
import SignUp from '../views/auth/SignUp'
import BookList from '../views/book/BookList'

const routes = [
  {
    path: '/',
    component: Home,
  }, {
    path: '/signin',
    component: SignIn,
  }, {
    path: '/signup',
    component: SignUp,
  }, {
    path: '/books',
    children: [
      {
        path:'/books',
        component: BookList
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router