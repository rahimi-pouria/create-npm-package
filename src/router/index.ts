import { createRouter, createWebHistory } from 'vue-router'
// import pages
import createAddress from '../views/createAddress.vue'
import showAddress from '../views/showAddress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'createAddress',
      component: createAddress
    },
    {
      path: '/showAddress',
      name: 'showAddress',
      component: showAddress
    }
  ]
})

export default router
