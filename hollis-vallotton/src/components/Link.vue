<template>
  <router-link v-bind:class="{ tab: true, hover }" v-bind:to="url">{{ name }}</router-link>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  },
  props: ['name', 'url'],
  methods: {
    mouseOver: function () {
      this.hover = !this.hover
    }
  }
}
</script>

<style scoped>
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
