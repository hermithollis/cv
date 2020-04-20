<template>
  <div id="app">
      <nav-bar/>
      <home />
      <about />
      <work />
      <blog />
      <contact />
  </div>
</template>

<script>
import Home from './components/Home'
import Work from './components/Work'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import {order} from '@/objects'
import router from '@/router'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    home: Home,
    work: Work,
    blog: Blog,
    about: About,
    contact: Contact,
    'nav-bar': NavBar
  },
  methods: {
    handleScroll (event) {
      clearTimeout(this.scrollTimeout)
      const doc = document.documentElement
      const currentTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      const sectionHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      const { pathname } = window.location
      let section
      for (let route in order) {
        const nextTop = sectionHeight * route
        const previousBottom = nextTop - sectionHeight
        const halfOffset = sectionHeight / 2
        const isInPrevious = currentTop > nextTop + halfOffset && currentTop < previousBottom - halfOffset
        const isInNext = currentTop > previousBottom + halfOffset && currentTop < nextTop + halfOffset
        if (isInPrevious || isInNext) {
          section = order[route]
          break
        }
      }
      if (section && !pathname.includes(section.toLowerCase())) {
        this.scrollTimeout = setTimeout(() => {
          router.push(`/${section.toLowerCase()}/`)
        }, 400)
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

html {
  background: black;
}
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.screen {
  height: 100vh;
  min-height:100%;
  min-width:100%;
  background-color:black;
  display:flex;
  align-items:stretch;
}

.half-screen {
  height: 100%;
  width: 50%;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

.pink {
  background-color: #fff0f5;
}
</style>
