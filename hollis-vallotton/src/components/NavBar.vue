<template>
  <nav>
    <router-link class="tab" to="/">Home</router-link>
    <router-link class="tab" to="/work/">Work</router-link>
    <router-link class="tab" to="/blog/">Blog</router-link>
    <router-link class="tab" to="/about/">About</router-link>
    <router-link class="tab" to="/contact/">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'Hollis Vallotton',
      name: 'Home'
    }
  }
}
</script>

<style scoped>
nav {
  border-style: solid;
  display: flex;
  justify-content: flex-start;
}
.tab {
  padding: 5px;
  color: white;
  font-size: 20px;
  text-decoration: none;
}
</style>
