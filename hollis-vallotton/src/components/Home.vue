<template>
  <div class="screen" id="home">
    <div class="half-screen black">
      <div class="left-container">
        <div class="info-container">
          <p>Hollis Vallotton</p>
          <p>Fullstack developer</p>
        </div>
        <div class="slider-container">
          <div class="slider-wrapper">
            <vllttch-slider class="slider" />
          </div>
        </div>
      </div>
    </div>
    <div class="half-screen white">
      <div>
        <img src="@/assets/me.jpeg">
      </div>
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

div .white div {
  display:flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
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
  font-weight: 700;
  font-size: 40px;
  color: white;
}

.left-container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 9fr 1fr;
  grid-template-areas:
    "content"
    "slider";
}

.info-container {
  align-self: center;
}

.slider {
  bottom: 10px;
  left: 10px;
  align-self: end;
}

.slider-container {
  display:flex;
  width: 100%;
  justify-self: center;
  align-self: flex-end;
  justify-content: center;
  align-content: center;
  height: 50px;
}

.slider-wrapper {
  width: 90%;
  align-self: center;
}
</style>
