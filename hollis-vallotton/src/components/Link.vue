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
  justify-content: flex-end;
}
.tab {
  font-size: 20px;
  text-decoration: none;
  font-family:  var(--font-family);
  margin-bottom: 1em;
  margin-right: 1em;
  text-decoration: none;
  color: var(--dark-blue);
  opacity: 0;

  transition: opacity 150ms ease-in-out;
}
.tab:hover {
  color: var(--light-pink);
  cursor: pointer;
}

.nav-toggle:checked ~ nav .tab {
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

a {
  color: inherit;
}

@media only screen and (min-device-width: 834px) {
  .tab {
    color: white;
    opacity: 1;
    margin: 0;
    width: 100%;
  }
}

</style>
