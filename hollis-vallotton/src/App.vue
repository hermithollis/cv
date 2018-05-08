import NavBar from
<template>
  <div id="app">
      <home />
      <work />
  </div>
</template>

<script>
import Home from './components/Home'
import Work from './components/Work'

export default {
  name: 'App',
  components: {
    home: Home,
    work: Work
  }
}
</script>

<style>
html {
  background: black;
}
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.screen {
  height: 100vh;
  min-height:100%;
  min-width:100%;
  background-color:black;
  display:flex;
  align-items:stretch;
  position:relative;
}

.half-screen {
  height: 100%;
  width: 50%;
}

.black {
  background-color: black;
}

.white {
  background-color: white;
}
</style>
