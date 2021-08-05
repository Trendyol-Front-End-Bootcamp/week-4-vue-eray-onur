<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
  font-size: 62.5%;
}
body {
  background-color: #1B1B1B;
}
h1 {
  color: orange;
}
h2, h3, h4, h5, p {
  color: beige;
}
*, *::before, *::after {
  box-sizing: inherit;
}
h1 {
  font-size: 3.6rem;
}
p, a {
  font-size: 1.8rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
