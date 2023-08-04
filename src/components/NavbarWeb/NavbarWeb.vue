<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="custom-navbar">
    <b-navbar-brand href="/" class="custom-navbar-brand">Mi Web</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav-collapse">
      <b-navbar-nav>
        <!-- <b-nav-item to="/" class="custom-nav-item">Home</b-nav-item>
        <b-nav-item to="/about" class="custom-nav-item">About</b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarWeb',
};
</script>

<style scoped>
/* Importa el archivo CSS */
@import './NavbarWeb.css';
</style>