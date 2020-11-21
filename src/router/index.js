import {createRouter, createWebHistory} from 'vue-router'

const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const ShopCart = () => import('@/views/shopCart/ShopCart')
const Profile = () => import('@/views/profile/Profile')
const Pop = () => import('@/views/recommand/Pop')
const Sell = () => import('@/views/recommand/Sell')
const New = () => import('@/views/recommand/New')
const Category3627 = () => import('../components/common/category/Category3627')
const Category582 = () => import('../components/common/category/Category582')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {title: '淘淘马-每一天的快乐就是购物！'},
    children: [
      {
        path: '',
        redirect: '/home/pop'
      },
      {
        path: 'pop',
        component: Pop
      },
      {
        path: 'sell',
        component: Sell
      },
      {
        path: 'new',
        component: New
      }
    ]
  },
  {path: '/profile', component: Profile, meta: {title: "我的"}},
  {path: '/shopcart', component: ShopCart, meta: {title: "我的购物车"}},
  {
    path: '/category',
    component: Category,
    meta: {title: '淘淘马-每一天的快乐就是购物！'},
    children: [
      {
        path: '',
        redirect: '/category/category3627'
      },
      {
        path: 'category3627',
        component: Category3627
      },
      {
        path: 'category582',
        component: Category582
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
