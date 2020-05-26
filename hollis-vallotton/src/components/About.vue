<template>
  <div class="screen vllttch-blue" id="about">
    <h1>I'm a compulsive learner</h1>
    <div class="description">
      <p>If I don't know it, I'll be happy to learn it so I can solve a problem. I've been doing this for 4 years and I don't plan on stopping.</p>
      <p>That's 4 years of experience developing user interfaces, back end API’s, designing databases, 
        debugging and testing features as well as architecting and implementing solutions and features. 
        Experience managing a team of two people in order to deliver a product. Proven ability to develop 
        new features and improve those already in place.</p>
    </div>
    <!-- <p id='process'>Understand -> Think -> Investigate -> Learn -> Architect  -> Implement -> Solve</p> -->
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
  flex-direction: column;
}
h1 {
  font-size: 3.5vh;
  color: var(--light-pink);
  font-weight: 100;
}
p {
  font-family:  var(--font-family);
  font-weight: 400;
  font-size: 2vh;
  color: white;
  text-align: left;
  line-height: 1.5em;
}
#process {
  font-family: var(--font-family);
  font-weight: 200;
  font-size: 20px;
  color: white;
}
.description {
  padding: 5vh;
}
</style>
