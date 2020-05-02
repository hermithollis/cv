<template>
  <div class="screen vllttch-blue" id="about">
    <!-- <p>About me</p> -->
    <p id='process'>Understand -> Think -> Investigate -> Learn -> Architect  -> Implement -> Solve</p>
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
  font-weight: 400;
  font-size: 40px;
  color: white;
}
#process {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 20px;
  color: white;
}
</style>
