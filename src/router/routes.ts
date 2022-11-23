import type { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/Home.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/view/Search.vue'),
  },
]
export default routes
