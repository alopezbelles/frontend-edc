<template>
  <NavbarWeb/> 
  <HomePage msg="Welcome to Your Vue.js App"/>
</template>

<script>
import NavbarWeb from '@/components/NavbarWeb/NavbarWeb.vue'
import HomePage from '@/components/HomePage/HomePage.vue'

export default {
  name: 'App',
  components: {
    NavbarWeb, 
    HomePage,
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
