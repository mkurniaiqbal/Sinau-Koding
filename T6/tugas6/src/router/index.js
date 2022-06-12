import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/dashboard/create-user',
    name: 'createUser',
    component: () => import('../components/CreateUserCom')
  },
  {
    path: '/dashboard/update-user/:id',
    name: 'updateUserCom',
    component: () => import('../components/UpdateUserCom')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
