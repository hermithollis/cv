<template>
  <div class="screen darken" id="home">
    <div class="info-container typewriter">
      <p>Hollis Vallotton</p>
      <p class='type'>Fullstack developer</p>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hollis Vallotton',
      name: 'Home'
    }
  },
  components: {
    'vllttch-slider': Slider
  }
}
</script>

<style scoped>
#home {
  display:flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.darken {
  background: linear-gradient(rgba(2, 43, 58, 0.5), rgba(2, 43, 58, 0.5)), url('../assets/cover_happy.jpg');
  background-repeat: no-repeat;
  background-position: 0% 65%;
  background-size: 100% auto;
}

img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
}

div .black{
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 40px;
  color: white;
  white-space: nowrap;
  letter-spacing: .15em;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px white solid;
  border-style: solid;
  margin-right: 10%;
  padding: 20px;
}

.typewriter .type {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #C493B7; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
    typing 2.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color:#C493B7; }
}
</style>
