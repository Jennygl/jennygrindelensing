<template>
  <h2 class="page-title">Erfarenhet</h2>
  <div id="grid-container">
    <!-- <div id="grid2"></div> -->
    <!-- Använder resultat från axios -->
    <div id="grid3">
      <div class="verticalline"></div>

      <ul v-for="experience in experiences" :key="experience.id">
        <div class="exp-box">
          <li>
            <div class="circle"></div>
            <h3 class="exptitle">{{ experience.exp }}</h3>
            <p>{{ experience.place }}, {{ experience.year }}</p>
            <p style="white-space: pre">{{ experience.more }}</p>
          </li>
        </div>
      </ul>
    </div>

    <!-- <div id="grid4"> -->
    <!-- <ul id="courses">
        <li>
          <router-link to="/exp/Courses"
            ><h3>
              Innan min LIA börjar kommer jag att ha genomfört följande kurser:
            </h3></router-link
          >
        </li>
        <li>HTML & CSS</li>
        <li>Native Javascript</li>
        <li>UX- & UI-design</li>
        <li>Javascript med ramverk</li>
        <li>Agil utveckling</li>
        <li>Fullstackutveckling</li>
        <li>
          <RouterLink to="/code">
            <ion-icon name="code-slash-outline" id="codeIcon"
              ><MyCode></MyCode
            ></ion-icon>
          </RouterLink>
        </li>
        <li></li>
      </ul> -->
    <!-- </div> -->
  </div>

  <router-view></router-view>
</template>

<style>
body {
  background-color: var(--bg-color);
}
/* @media (min-width: 1024px) { */
#grid-container {
  display: grid;
  padding-left: 2vw;
  /* grid-template-rows: 25vh auto auto; */
  grid-template-columns: 40vw;
  grid-template-areas:
    "grid1"
    "grid3";
}

@media (max-width: 900px) {
  #grid-container {
    display: grid;
    grid-template-rows: 20vh auto;
    grid-template-columns: 80vw;
    grid-template-areas:
      "grid1"
      "grid3";
  }
}

#grid1 {
  display: grid;
  grid-area: grid1;
}
#grid2 {
  display: grid;
  grid-area: grid2;
}

#grid3 {
  display: grid;
  grid-area: grid3;
}

/* Timleline */
.verticalline {
  border-left: 1px solid rgb(174, 219, 240);
  height: 2200px;
  width: 10px;
  position: absolute;
  left: 25px;
}

.circle {
  height: 25px;
  width: 25px;
  border: 1px solid white;
  background-color: rgb(174, 219, 240);
  border-radius: 50%;
  position: absolute;
  left: 13px;
}
.exp-box {
  box-shadow: 5px 5px 10px rgb(174, 219, 240), -1px -1px 10px rgb(174, 219, 240);
  border-radius: 5px 30px 30px 5px;
  padding: 2em;
  margin: 1em;
}

#grid4 {
  display: grid;
  grid-area: grid4;
}

#grid5 {
  display: grid;
  grid-area: grid5;
}
#codeIcon {
  font-size: 1.5em;
  color: blue;
}
/* More info button */
button {
  border: none;
  background-color: rgb(231, 221, 249);
}
ul {
  list-style: none;
  padding-bottom: 0;
}

li {
  padding-bottom: 5px;
}

#courses {
  color: blue;
}

a:link {
  text-decoration: none;
  color: rgb(40, 40, 40);
  font-size: 1.5em;
}
a:visited {
  text-decoration: none;
  color: rgb(40, 40, 40);
}
a:hover {
  text-decoration: none;
  font-style: italic;
}
a:active {
  text-decoration: none;
}

.title {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 4vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      experiences: [],
      show: false,
    };
  },
  mounted() {
    axios
      .get("experience.json")
      .then((response) => (this.experiences = response.data));
  },
};
</script>
