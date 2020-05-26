<template>
  <div class="screen vllttch-blue" id="blog">
      <p>Blog</p>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      name: 'Blog'
    }
  }
}
</script>

<style scoped>
#blog {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: white;
  font-family:  var(--font-family);
  font-weight: 700;
  font-size: 40px;
}
</style>
