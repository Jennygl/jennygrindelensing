<template>
  <p>How would you like to contact me?</p>
  <select class="wayofcontact" v-model="selected">
    <option
      v-for="option in options"
      v-bind:value="option.value"
      :key="option.text"
    >
      {{ option.text }}
    </option>
  </select>
  <span
    ><h3>{{ selected }}</h3></span
  >
</template>

<style>
.wayofcontact {
  width: fit-content;
}
</style>

<script>
export default {
  el: "#app",
  data() {
    return {
      selected: "",
      options: [
        { text: "Call me", value: "0768535812" },
        { text: "Use the awesome form", value: "Form over there ->" },
      ],
    };
  },
  watch: {
    selected(newVal, oldVal) {
      console.log(
        `Jag vill kontakta Jenny via ${newVal}, inte ${oldVal} just idag.`
      );
    },
  },
};
//  <img class="jennyImg" src="../assets/jenny1.jpg" alt="Jenny" />
</script>
