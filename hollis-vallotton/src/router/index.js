import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Work from '@/components/Work'
import Blog from '@/components/Blog'
import About from '@/components/About'
import Contact from '@/components/Contact'
import scrollIt from '@/helpers/'
import {order} from '@/objects'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/',
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
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    const destination = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * order.indexOf(to.name)
    scrollIt(destination, 500, 'easeInOutQuad')
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
    return {x: 0, y: destination}
  }
})

export default router
