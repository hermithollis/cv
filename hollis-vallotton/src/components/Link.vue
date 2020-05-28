<template>
  <div v-on:click="outerBoxClicked(url)" :class="currentSection.includes(url)? activeClass : inactiveClass">
    <ripple>
      <router-link v-bind:class="{ tab: true, hover}" v-bind:to="url">{{ name }}</router-link>
    </ripple>
  </div>
</template>

<script>
import Ripple from '@/components/Ripple'
import router from '@/router'
export default {
  data () {
    return {
      hover: false,
      activeClass: 'active',
      inactiveClass: 'inactive'
    }
  },
  components: {
    ripple: Ripple
  },
  computed: {
    currentSection () {
      return this.$route.path
    }
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
  color: inherit;
  opacity: 0;
  cursor: pointer;
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

.inactive {
  color: var(--dark-blue);
}

.active {
  color: var(--light-pink);
}

@media only screen and (min-device-width: 834px) {
  .tab {
    color: inherit;
    opacity: 1;
    margin: 0;
    width: 100%;
  }
  .inactive {
    color: white;
  }
}

</style>
