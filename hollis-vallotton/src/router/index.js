import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)
const order = [
  'Home',
  'About',
  'Work',
  'Blog',
  'Contact'
]
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/work/',
      name: 'Work',
      component: Work
    },
    {
      path: '/blog/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    },
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
    return {x: 0, y: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * order.indexOf(to.name)}
  }
})
