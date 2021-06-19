import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Carousel from "../components/Carousel.vue";
import Shop from "../components/Shop.vue";
import CardList from "../components/CardShopList.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Carousel',
    component: Carousel
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
   {
    path: '/CardList',
    name: 'CardList',
    component: CardList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
