import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/accueil'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/accueil'
      },
      {
        path: 'accueil',
        name: 'accueil',
        component: () => import('@/views/Accueil.vue')
      },
      {
        path: 'communes',
        name: 'communes',
        component: () => import('@/views/Communes.vue')
      },
      {
        path: 'departements',
        name: 'departements',
        component: () => import('@/views/Départements.vue')
      },
      {
        path: 'regions',
        name: 'regions',
        component: () => import('@/views/Régions.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
