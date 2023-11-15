<script setup></script>

<template>
  <div>
    <h2 class="page-title">Jenny <span id="lastName">Grinde Lensing</span></h2>
    <div class="grid-container">
      <div class="grid1">
        <p>
          Jag heter Jenny och jag studerar till frontend-utvecklare på
          IT-högskolan i Stockholm. Jag är en social och positiv person med stor
          vilja att lära. Mina elva år som lärare har bland annat bidragit till
          en god samarbetsförmåga, lösningsfokus, flexibilitet, struktur och en
          god dos ledarskap. Till hösten börjar jag min tredje termin av fyra,
          och då är det dags för min första LIA. Jag söker därför en
          praktikplats där jag får möjligheten att omvandla mina kunskaper till
          praktiska färdigheter under åtta veckor med start vecka 34.
        </p>
      </div>
      <div class="grid2">
        <img class="jennyImg" src="../assets/jenny1.jpg" alt="Jenny" />
      </div>
      <div class="grid3"></div>
      <div class="grid4"></div>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) { */

body {
  background-color: var(--bg-color);
  /* rgb(206, 179, 253); */
}
.jennyImg {
  border-radius: 50%;
  height: 40vh;
}
.page-title {
  font-size: 4em;
}

#lastName {
  font-style: italic;
  font-size: 0.8em;
}

.grid-container {
  display: grid;
  grid-template-rows: 25vh auto;
  grid-template-columns: 70vw 30vw;
  grid-template-areas:
    "grid1 grid2"
    "grid3 grid4";
  padding-left: 2vw;
}

.grid1 {
  display: grid;
  grid-area: grid1;
  /* align-self: center; */
}
.grid2 {
  display: grid;
  grid-area: grid2;
  padding-right: 2vh;
}
.grid3 {
  display: grid;
  grid-area: grid3;
}
.grid4 {
  display: grid;
  grid-area: grid4;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      experiences: [],
      edu: [],
      //   filteredData: [],
    };
  },
  mounted() {
    axios
      .get("experience.json")
      .then((response) => (this.experiences = response.data));
  },
};
</script>
