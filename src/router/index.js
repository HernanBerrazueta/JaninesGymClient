import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'
import Login from '../views/Login.vue'
import Perfil from '../views/Perfil.vue'
import Clientes from '../views/Clientes.vue'
import Dietas from '../views/Dietas.vue'
import PlanAlimenticio from '../views/clientes/Plan Alimenticio.vue'

const routes = [
  {
    path: '/',
    name: 'Home2',
    component: Home2,
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/dietas',
    name: 'Dietas',
    component: Dietas
  },
  {
    path: '/plan-alimenticio',
    name: 'Plan Alimenticio',
    component: PlanAlimenticio
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
