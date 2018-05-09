<template>
  <div class="screen" id="home">
    <div class="half-screen black"></div>
    <div class="half-screen white">
      <nav-bar />
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
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

</style>
