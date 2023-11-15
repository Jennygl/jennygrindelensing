<script setup></script>

<template>
  <footer>
    <p>&copyJenny Grinde Lensing, last updated {{ date }}</p>
  </footer>
</template>

<style scoped>
footer {
  bottom: 0px;
  display: flex;
  justify-content: center;
  color: grey;
}
</style>
<script>
export default {
  data() {
    return {
      lastUpdated: this.date,
    };
  },
  props: { date: Number },
};
</script>
