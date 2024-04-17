import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import InfographicView from '../views/PortfolioView.vue'
import WebsiteView from '../views/PortfolioView.vue'
import BusinesscardView from '../views/PortfolioView.vue'
import AllView from '../views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/infographic',
      name: 'infographic',
      component: InfographicView
    },
    {
      path: '/website',
      name: 'website',
      component: WebsiteView
    },
    {
      path: '/businesscard',
      name: 'businesscard',
      component: BusinesscardView
    },
    {
      path: '/all',
      name: 'all',
      component: AllView
    }
  ]
})

export default router