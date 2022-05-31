//#region import
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const MainPage = () => import('@/views/pages/main-page.vue')

const Layout = () => import('@/views/layouts/layout.vue')

import {
  MAIN_PAGE
} from './routerNames'


const routes: Array<RouteRecordRaw> = [
  {
    component: Layout,
    path: '/',
    redirect: '/main-page',
    children: [
      {
        path: '/main-page',
        name: MAIN_PAGE,
        component: MainPage,
        meta: { title: 'Main Page' }
      }
    ]
  },


  { path: '/:pathMatch(.*)*', component: Error },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
