import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('pages/home/Home')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('pages/find/Find')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('pages/order/Order')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('pages/personal/Personal')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('pages/city/City'),
    children: [
      {
        name: 'CitySearch',
        path: 'citysearch',
        component: () => import('pages/citysearch/CitySearch')
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('pages/search/Search')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default new Router({
  routes
})
