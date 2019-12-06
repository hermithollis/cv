<template>
  <router-link v-bind:class="{ tab: true, hover }" v-bind:to="url">{{ name }}</router-link>
</template>


<script>
export default {
  data () {
    return {
      hover: false,
    }
  },
  props: ['name', 'url'],
  methods: {
    mouseOver: function (){
      this.hover = !this.hover;
    }
  }
}
</script>

<style scoped>
.tab {
  padding: 5px;
  color: black;
  font-size: 20px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}
.hover {
  background-color: white;
}
</style>
