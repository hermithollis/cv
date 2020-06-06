<template>
  <div class="screen vllttch-blue" id="about">
    <div class="content">
      <div class="title-div">
        <h2 class="title">About me</h2>
      </div>
      <div class="description">
        <p v-for="paragraph in about" :key="paragraph">{{paragraph}}</p>
        <p>Send me an email at <span>{{constants.email}}</span> to connect or use the <router-link class= "pink-letters" v-bind:class="{ tab: false }" to="/contact/">contact form</router-link> below. You can also find me on <a class="pink-letters" :href="constants.linked_in">linkedIn</a> and <a class="pink-letters" :href="constants.github">github</a>. </p>
      </div>
  </div>
</div>
</template>

<script>
import {about, constants} from '@/objects/'

export default {
  name: 'About',
  data () {
    return {
      name: 'About',
      about,
      constants
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 64px;
  width: 100%;
  display: grid;
  grid-template-areas:
    "title"
    "description";
  grid-template-rows: 1fr 24fr;
  grid-template-columns: 1fr;
}
.title-div {
  grid-area: title;
}
h2 {
  margin: 0;
  margin-top: 0.5em;
}
p {
  font-family:  var(--font-family);
  font-weight: 100;
  font-size: calc(1vw + 1vh);
  color: white;
  text-align: left;
  line-height: 1.5em;
}
.description {
  grid-area: description;
  padding: calc(1vw + 1vh);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

#process {
  font-family: var(--font-family);
  font-weight: 200;
  font-size: 20px;
  color: white;
}
span {
  text-decoration: none;
  color: var(--light-pink);
}

.pink-letters {
  text-decoration: none;
  color: var(--light-pink);
}

.pink-letters:hover {
  font-weight: bold;
}

@media only screen and (min-device-width: 834px) {
  .description {
    padding: calc(2.5vw + 2.5vh);
    justify-content: flex-start;
  }
  p {
    font-size: calc(0.75vw + 0.75vh);
  }
}
</style>
