import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dark from './views/Dark.vue'
import About from './views/About.vue';
import Robots from './views/Robots.vue';
import 'vue-material/dist/theme/default.css'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL || 'headersetter.us',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/dark',
      name: 'dark',
      component: Dark
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/robots.txt',
      name: 'robots',
      component: Robots
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
