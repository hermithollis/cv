<template>
  <div class='screen darken' :class='webpclass' id="home">
    <div class="info-container typewriter">
      <p>Hollis Vallotton</p>
      <p class='type'>Fullstack developer</p>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import {canUseWebP} from '@/helpers'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hollis Vallotton',
      name: 'Home',
      webpclass: 'webp'
    }
  },
  created: function () {
    const supportsWebP = canUseWebP()
    this.webpclass = supportsWebP ? 'webp' : 'no-webp'
  },
  components: {
    'vllttch-slider': Slider
  }
}
</script>

<style scoped>
#home {
  display:flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}

.no-webp {
  background: linear-gradient(rgba(2, 43, 58, 0.5), rgba(2, 43, 58, 0.5)), url('../assets/cover.jpg');
}
.webp {
  background: linear-gradient(rgba(2, 43, 58, 0.5), rgba(2, 43, 58, 0.5)), url('../assets/cover.webp');
}

.darken {
  background-repeat: no-repeat;
  background-position: 0% 60%;
  background-size: auto 100%;
}

img {
    flex-shrink: 0;
    min-width: 100vw;
    min-height: 100vh;
}

div .black{
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  font-family: var(--font-family);
  font-weight: 200;
  font-size: 4.5vw;
  color: white;
  white-space: nowrap;
  letter-spacing: .15em;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1vw;
  padding: 20px;
  margin-top: 10vh;
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

@media only screen and (min-device-width: 545px) {
.darken {
  background-repeat: no-repeat;
  background-position: 0% 65%;
  background-size: 100% auto;
}

img {
    flex-shrink: 0;
    min-width: 100vw;
    min-height: 100vh;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 10%;
  padding: 20px;
}

.info-container .type {
  margin-right: 0;
}

#home {
  display:flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

p {
  font-size: 3.5vw;
}

}

@media only screen and (min-device-width: 850px) {
  p{
    font-size: 30px;
  }
}

</style>
