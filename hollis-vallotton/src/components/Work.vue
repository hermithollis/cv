<template>
  <div class="screen black" id="work">
    <div class="half-screen pink">
      <div>
        <p>Work</p>
      </div>
    </div>
    <div class="half-screen black"></div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      name: 'Work'
    }
  }
}
</script>

<style scoped>
div .pink{
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  color: black;
  font-family: 'Montserrat' sans-serif;
  font-weight: 700;
  font-size: 40px;
}
</style>
