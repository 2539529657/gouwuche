import {createRouter, createWebHashHistory} from 'vue-router'

const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const ShopCart = () => import('@/views/shopCart/ShopCart')
const Profile = () => import('@/views/profile/Profile')

const routes = [
  {path: '', redirect: Home},
  {path: '/home', component: Home},
  {path: '/profile', component: Profile},
  {path: '/shopcart', component: ShopCart},
  {path: '/category', component: Category}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
