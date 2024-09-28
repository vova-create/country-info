import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleCountry from "@/components/SingleCountry";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/country/:id',
    name: 'SingleCountry',
    component: SingleCountry

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
