import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuestsView from '../views/QuestsView.vue'
import MudaeTopExtractorView from '../views/MudaeTopExtractorView.vue'
import TiypanikiView from '../views/TiypanikiView.vue'

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
      component: QuestsView,
    },
    {
      path: '/mudae-top-name-extractor',
      name: 'mudaetopnameextractor',
      component: MudaeTopExtractorView,
    },
    {
      path: '/tiypaniki',
      name: 'tiypaniki',
      component: TiypanikiView,
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
