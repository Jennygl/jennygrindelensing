<!-- Bootstrap code slide -->

<template>
  <div class="grid-container-code">
    <div class="grid1"><h2 class="page-title">Code</h2></div>

    <div class="grid2">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/code1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/code2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../assets/code3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div id="vote">
        <p>Hur otrolig kod?</p>
        <input
          type="button"
          @click="$store.commit('increase')"
          class="countButton"
          value="+"
        />
        <p>{{ $store.state.count }}</p>
        <input
          type="button"
          @click="$store.commit('decrease')"
          class="countButton"
          value="-"
        />
      </div>
    </div>
  </div>
</template>

<style>
.grid-container-code {
  display: grid;
  grid-template-rows: 25vh auto;
  grid-template-columns: 40vw;
  grid-template-areas:
    "grid1"
    "grid2";
}

.grid1 {
  display: grid;
  grid-area: grid1;
}
.grid2 {
  display: grid;
  grid-area: grid2;
}

.page-title {
  font-size: 4em;
}

.countButton {
  width: 2vw;
}
#vote {
  border: solid 1px black;
  width: fit-content;
  padding: 1vw;
  margin: 2vw;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return { count: 0 };
  },
};
</script>
