<template>
  <div class="screen" id="home">
    <div class="half-screen black">
      <div>
        <p>Hollis Vallotton</p>
        <p>Fullstack developer</p>
      </div>
    </div>
    <div class="half-screen white">
      <nav-bar />
      <div>
        <img src="@/assets/my_handsome_self.jpg">
      </div>
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

div .white div {
  display:flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
}

div .black{
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #fff0f5
}
</style>
