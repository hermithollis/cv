<template>
  <div class="screen black" id="about">
    <p>About me</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: 'About'
    }
  }
}
</script>

<style scoped>
#about {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: white;
}
</style>
