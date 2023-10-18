import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: '/bookings',
  name: 'bookings',
  children: [
    {
      path: '',
      name: 'list',
      component: () => {}
    },
    {
      path: ':id',
      name: 'list',
      component: () => {}
    },
    {
      path: 'create',
      name: 'list',
      component: () => {}
    },
  ]

}

export default routes;