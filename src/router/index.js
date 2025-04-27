import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '@/views/Auth/Auth'
import SigninPassword from '@/views/Auth/SigninPassword'
import VideosPage from '@/views/Auth/VideosPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    component: Auth,
    children: [
      {
        path: 'password',
        name: 'password',
        component: SigninPassword
      }
    ]
  },
  {
    path: '/rmbloco3-videos',
    name: 'rmbloco3-videos',
    component: VideosPage
  },
  {
    path: '*',
    redirect: { name: 'password' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
