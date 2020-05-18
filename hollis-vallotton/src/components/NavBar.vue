<template>
  <header>
  <h1 id="logo">HV</h1>
  <input type='checkbox' id="nav-toggle" class="nav-toggle"/>
  <nav class="nav-mobile">
    <tab
      v-for="tab in tabs"
      :key="tab.name"
      v-bind:name="tab.name"
      v-bind:url="tab.url"
      v-bind:tabs="tab"
    />
  </nav>
  <label for="nav-toggle" class="nav-toggle-label">
    <span></span>
  </label>
  </header>
</template>

<script>
import Link from '@/components/Link'
import {order} from '@/objects'
import {toUrl} from '@/helpers'

const createTabs = () => {
  return order.map(section => ({
    name: section,
    url: toUrl(section)
  }))
}
export default {
  name: 'NavBar',
  data () {
    return {
      tabs: createTabs()
    }
  },
  components: {
    tab: Link
  }
}
</script>

<style scoped>
header {
  background-color: white;
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
#logo {
  margin: 0;
  margin-left: 0.5em;
  color: var(--dark-blue);
  font-weight: 100;
  font-size: 30px;
}
/* .nav-desktop {
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  top: 0;
  right: 0;
  width: 100%;
  position: fixed;
} */

.nav-toggle {
  display: none;
}

.nav-toggle-label {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1em;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
  display: block;
  background: var(--dark-blue);
  width: 1.75em;
  height: 2px;
  border-radius: 2px;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
  content: '';
  position: absolute;
}

.nav-toggle-label span::before {
  bottom: 13px;
}

.nav-toggle-label span::after {
  top: 13px;
}

nav {
  position: absolute;
  right: 0;
  background: white;
  width: 100%;
  top: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
  padding-top: 20px;
}

.nav-toggle:checked ~ nav {
  transform: scale(1, 1);
}

@media only screen and (min-device-width: 834px) {
  .nav-toggle-label {
    display: none;
  }

  header {
    display: grid;
    grid-template-columns: 1fr 1fr auto minmax(600px, 1fr);
    background-color: transparent;
  }

  nav {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column:  4 / 4;
  }

  #logo {
    grid-column: 1/1;
    color: white;
  }

}

</style>
