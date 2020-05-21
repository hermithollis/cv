<template>
  <div id="app">
    <component :is='component.name.toLowerCase()' v-for="component in components" v-bind:key="component.name"></component>
  </div>
</template>

<script>
import {order, orderArray} from '@/objects'
import router from '@/router'
import NavBar from './components/NavBar'

const buildComponentsObject = () => {
  let components = {}
  components['nav-bar'] = NavBar
  orderArray.forEach(section => {
    components[section.name.toLowerCase()] = section.component
  })
  return components
}

const buildComponentsArray = () => {
  let components = []
  components = [{name: 'nav-bar', component: NavBar}, ...orderArray]
  return components
}

export default {
  name: 'App',
  components: buildComponentsObject(),
  data: function () {
    return {
      components: buildComponentsArray()
    }
  },
  methods: {
    handleScroll (event) {
      clearTimeout(this.scrollTimeout)
      const doc = document.documentElement
      const currentTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      const sectionHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      const {hash} = window.location
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
      if (section && !hash.includes(section.toLowerCase())) {
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

:root{
  --dark-blue: #022B3A;
  --light-pink: #CA9EB7;
  --icon-size: 10vw;
}

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
  width: 100vw;
  min-height:100%;
  min-width:100%;
  background-color:black;
  display:flex;
  align-items:stretch;
}

.half-screen {
  height: 100vh;
  width: 50vw;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}

.vllttch-blue {
  background-color: #022B3A;
}

.vllttch-pink {
  background-color: #C49EB7;
}
</style>
