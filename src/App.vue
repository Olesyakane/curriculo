<template>
  <div>
    <!-- <nav>
      <router-link to="/">Estudios</router-link> |
      <router-link to="/experiencia">Experiencia</router-link>
    </nav> -->
    <TheMenu></TheMenu>
    <router-view/>
    
  </div>
</template>

<style>
body{
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serifs !important;
  background: rgb(221, 137, 233);
  background: linear-gradient(
    34deg,
    rgba(221, 137, 233, 1) 0%,
    rgba(113, 216, 218, 1) 49%,
    rgba(202, 245, 254, 1) 100%
  );
}
h1{
  color: rgb(56, 73, 146);
}

</style>

<script setup>
import TheMenu from "./components/TheMenu.vue";
require ('@/assets/style/reset.css');

</script>
