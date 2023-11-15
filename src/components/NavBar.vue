<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="greetings">
    <header>
      <div class="about">
        <!-- <h1 id="h-jenny">
          Jenny
          <span id="role">Frontendutvecklare</span>
        </h1> -->
        <img src="../assets/Jenny.png" class="Jennyimg" />
      </div>
      <nav class="right">
        <ul>
          <li>
            <h2>
              <RouterLink to="/experience" @click="scrollToTitle"
                >Erfarenhet</RouterLink
              >
            </h2>
          </li>
          <li>
            <h2>
              <RouterLink to="/portfolio" @click="scrollToTitle"
                >Portfolio</RouterLink
              >
            </h2>
          </li>
          <li>
            <h2>
              <RouterLink to="/about" @click="scrollToTitle">Om mig</RouterLink>
            </h2>
          </li>
          <li>
            <h2>
              <RouterLink to="/contact" @click="scrollToTitle"
                >Kontakt</RouterLink
              >
            </h2>
          </li>
        </ul>
      </nav>
      <div ref="scrollToHere"></div>
    </header>
  </div>
</template>

<style scoped>
.greetings {
  width: 100%;
}
@media (max-width: 992px) {
  .greetings {
    width: 100%;
  }
}
header {
  display: flex;
  flex-direction: row;
  min-height: 90vh;
  max-height: 100vh;
  overflow-x: hidden;
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100vw;
  }
}
.name {
  display: flex;
  flex-direction: column;
}
#h-jenny {
  color: black;
  font-weight: 300;
  font-size: 5em;
  font-family: "Poiret One";
  position: absolute;
  @media (max-width: 992px) {
    font-size: 4em;
  }
}
#role {
  /* margin: 0 0 -55px 55px; */
  font-size: 0.3em;
  position: relative;
  bottom: 50px;
  right: 180px;
  @media (max-width: 992px) {
    font-size: 0.4em;
    bottom: 120px;
    right: -35px;
  }
}
.Jennyimg {
  width: 20vw;
  @media (max-width: 992px) {
    width: 35vw;
  }
}
.h-gl {
  display: flex;
  flex-direction: row;
  margin: 0 0 0 8px;
  padding-top: 10px;
}

.about {
  display: flex;
  /* justify-content: flex-start; */
  flex-direction: column;
  align-self: center;
  margin-left: 2em;
  text-align: left;
  padding-bottom: 5em;
  /* width: 30vw; */
  @media (max-width: 992px) {
    align-self: flex-start;
    margin-top: 10vh;
  }
}

h3 {
  font-size: 1.5em;
  font-family: "Poiret One";
}

/* .jImg {
  border-radius: 50%;
  left: 35px;
} */

ul {
  list-style-type: none;
  color: grey;
  max-height: 100%;
  /* position: relative; */
}

.right {
  padding-top: 6vh;
  padding-bottom: 6vh;
  padding-right: 2vw;
  margin-left: auto;
  margin-right: 2vw;
  justify-content: flex-end;
  text-align: end;
  display: flex;
  max-height: 100vh;
  /* overflow-x: hidden; */
}

a:link {
  text-decoration: none;
  color: rgb(40, 40, 40);
  font-size: 15vh;
  font-family: "Cabin Sketch", cursive;
  @media (max-width: 992px) {
    font-size: 10vw;
  }
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

.greetings h1,
.greetings h3 {
  text-align: left;
}

/* @media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
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
    scrollToTitle() {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
      //   this.$refs["scrollToHere"].scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
