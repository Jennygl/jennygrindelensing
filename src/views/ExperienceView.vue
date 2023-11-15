<script setup>
import ExpMore from "../components/ExpMore.vue";
//
</script>

<template>
  <main>
    <h3 class="page-title">{{ $route.params.more }}</h3>
    <ExpMore></ExpMore>
  </main>
</template>

//
<style>
.page-title {
  font-size: 4em;
}
</style>
