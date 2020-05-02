<template>
  <nav>
    <tab
      v-for="tab in tabs"
      :key="tab.name"
      v-bind:name="tab.name"
      v-bind:url="tab.url"
      v-bind:tabs="tab"
    />
  </nav>
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
nav {
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  position: fixed;
}
</style>
