<template>
  <div class="screen black" id="contact">
    <p>Contact</p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      name: 'Contact'
    }
  }
}
</script>

<style scoped>
#contact {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: white;
  font-family: 'Montserrat' sans-serif;
  font-weight: 700;
  font-size: 40px;
}
</style>
