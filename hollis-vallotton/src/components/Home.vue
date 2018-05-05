<template>
  <div id="home">
    <nav-bar />
    <img src="../assets/cowboy_me.png">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hollis Vallotton',
      name: 'Home'
    }
  },
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style scoped>
#id {
  border-style: 'solid'
}
</style>
