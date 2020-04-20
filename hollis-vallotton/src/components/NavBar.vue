<template>
  <nav>
    <tab
      v-for="tab in tabs"
      :key="tab.name"
      v-bind:name="tab.name"
      v-bind:url="tab.url"
      v-bind:tabs="tab"
    />
  </nav>
</template>

<script>
import Link from '@/components/Link'
export default {
  name: 'NavBar',
  data () {
    return {
      tabs: [
        {
          name: 'Home',
          url: '/home/'
        },
        {
          name: 'About',
          url: '/about/'
        },
        {
          name: 'Work',
          url: '/work/'
        },
        {
          name: 'Blog',
          url: '/blog/'
        },
        {
          name: 'Contact',
          url: '/contact/'
        }
      ]
    }
  },
  components: {
    tab: Link
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  position: fixed;
  border-color: white;
}
</style>
