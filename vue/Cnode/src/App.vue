<template>
  <div id="app">
    <Header/>
    <!-- <img src="./assets/logo.png"> -->
    <router-view name="main"></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body,
ul,
li {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
body {
  background-color: #E1E1E1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
