import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import scrollIt from '@/helpers/'
import {orderArray, order} from '@/objects'
import {toUrl} from '@/helpers'
import Home from '@/components/Home'

Vue.use(Router)

const createRoutes = () => {
  const routes = []
  routes.push({
    path: '/',
    name: 'Home',
    component: Home
  })
  orderArray.map(section => {
    routes.push({
      path: toUrl(section.name),
      ...section
    })
  })
  routes.push({
    path: '*',
    component: Home
  })
  return routes
}
const router = new Router({
  routes: createRoutes(),
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    const destination = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * order.indexOf(to.name)
    scrollIt(destination, 500, 'easeInOutQuad')
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
    return {x: 0, y: destination}
  }
})

export default router
