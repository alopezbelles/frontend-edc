<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">Mi Web</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav-collapse">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
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
@import './NavbarWeb.css';
</style>
