<template>
  <a @click="scrollToTop">
    <img class="arrow" src="../assets/arrow.png" alt="Jenny"
  /></a>
</template>

<style>
.arrow {
  width: 40px;
  position: fixed;
  right: 10px;
  bottom: 5px;
  rotate: -40deg;
  cursor: pointer;
}
</style>

<script>
export default {
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      //   this.$refs["scrollToHere"].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
