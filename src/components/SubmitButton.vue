<template><input @click="onClick" type="button" value="knapp" /></template>

<script>
export default {
  data() {
    return {
      thankYou: "",
    };
  },
  methods: {
    onClick() {
      this.$emit("thank-you");
    },
  },
};
</script>
