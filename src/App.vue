<script setup>
import { RouterView } from "vue-router";
// import MyFooter from "./components/MyFooter.vue";
import NavBar from "./components/NavBar.vue";
import ArrowUp from "./components/ArrowUp.vue";
</script>

<template>
  <div>
    <NavBar />
    <RouterView />

    <some-component></some-component>
    <ArrowUp></ArrowUp>
  </div>
  <!-- Props from MyFooter.vue -->
  <!-- <MyFooter :date="230209"></MyFooter> -->
</template>

<style scoped>
.navbar {
  /* padding-bottom: 10vh; */
  width: 100%;
  justify-content: center;
  overflow-x: hidden;
}
/* .arrow {
  width: 40px;
  position: fixed;
  right: 10px;
  bottom: 5px;
  rotate: -40deg;
} */
</style>
