import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Film from '../views/film'
// eslint-disable-next-line no-unused-vars
import search from '../views/search'
import player from '../views/play'
import about from '../views/About'
import tv from '../views/tv'
import cartoon from '../views/cartoon'
import child from '../views/child'
import variety from '../views/variety'
import iPlayer from '../views/iplayer'
import filmPlayer from '../views/film_player'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/film',
    component: Film
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/player',
    component: player
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/tv',
    component: tv
  },
  {
    path: '/cartoon',
    component: cartoon
  },
  {
    path: '/child',
    component: child
  },
  {
    path: '/variety',
    component: variety
  },
  {
    path: '/iPlayer',
    component: iPlayer
  },
  {
    path: '/film_player',
    component: filmPlayer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
