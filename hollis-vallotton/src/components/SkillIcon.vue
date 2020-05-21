<template>
  <div class="icon-container">
    <div class="tech-icon" :style="style" ></div>
    <p class="description">{{ text }}</p>
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

.description {
  display: none;
}

@media only screen and (min-device-width: 650px) {
.icon-container {
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex: 1 0 21%; /* explanation below */
   padding: 5px;
   height: 5vw;
   width: 5vw;
}
.tech-icon {
  background-repeat: no-repeat;
  background-size: 5vw 5vw;
  height: 5vw;
  width: 5vw;
  margin-right: 1vw;

}
.description {
  display: block;
  color: white;
}
}
</style>
