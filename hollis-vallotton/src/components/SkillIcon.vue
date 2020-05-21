<template>
  <div class="icon-container">
    <div class="tech-icon" :style="style" ></div>
  </div>
</template>
<script>
export default {
  props: ['text', 'icon'],
  computed: {
    style () {
      return {
        'background-image': `url(${require('../assets/tech-logos/' + this.icon)})`
      }
    }
  }
}
</script>
<style scoped>
.icon-container {
   /* border: 1px solid white; */
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1 0 21%; /* explanation below */
   padding: 5px;

}
.tech-icon {
  background-repeat: no-repeat;
  background-size: var(--icon-size) var(--icon-size);
  /* border-style: solid; */
  height: var(--icon-size);
  width: var(--icon-size);
}
</style>
