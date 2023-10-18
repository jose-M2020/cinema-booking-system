import DashboardLayout from '@/layouts/DashboardLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

import bookingRouter from '../modules/bookings/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => DashboardLayout,
      children: [
        bookingRouter
      ]
    },
  ]
})

export default router
