import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quests',
      name: 'quests',
      component: () => import('../views/QuestsView.vue'),
    },
    {
      path: '/mudae-top-name-extractor',
      name: 'mudaetopnameextractor',
      component: () => import('../views/MudaeTopExtractorView.vue'),
    },
    {
      path: '/tiypaniki',
      name: 'tiypaniki',
      component: () => import('../views/TiypanikiView.vue'),
    },
    {
      path: '/coor-convert',
      name: 'coordinateconverter',
      component: () => import('../views/CoorConvertView.vue'),
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/BooksView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
