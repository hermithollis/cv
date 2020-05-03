<template>
  <div v-on:click="outerBoxClicked(url)">
    <ripple>
      <router-link v-bind:class="{ tab: true, hover }" v-bind:to="url">{{ name }}</router-link>
    </ripple>
  </div>
</template>

<script>
import Ripple from '@/components/Ripple'
import router from '@/router'
export default {
  data () {
    return {
      hover: false
    }
  },
  components: {
    ripple: Ripple
  },
  props: ['name', 'url'],
  methods: {
    mouseOver: function () {
      this.hover = !this.hover
    },
    outerBoxClicked: function (url) {
      const { hash } = window.location
      if (!hash.includes(url)) router.push(url)
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  justify-content: center;
}
.tab {
  padding: 5px;
  color:white;
  font-size: 20px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}
.tab:hover {
  color: #022B3A;
  color: #CA9EB7
}
</style>
