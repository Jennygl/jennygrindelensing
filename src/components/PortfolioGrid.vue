<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <h2 class="page-title">Portfolio</h2>
    <div class="Portfolio-container">
      <!-- 1 -->
      <div class="PortGrid">
        <div class="symbols">
          <!-- GitHub link -->
          <a href="https://github.com/Jennygl/congratulations"
            ><button class="btn">
              <ion-icon
                name="logo-github"
                type="button"
                class="GH-button"
              ></ion-icon></button
          ></a>
        </div>
        <img class="portItem" src="../assets/comin.png" alt="Glasssida" />
      </div>
      <!-- 2 -->
      <div class="PortGrid">
        <div>
          <div class="symbols">
            <a href="https://github.com/Jennygl/BG-glass"
              ><button class="btn">
                <ion-icon
                  name="logo-github"
                  type="button"
                  class="GH-button"
                ></ion-icon></button
            ></a>
          </div>
          <img class="portItem" src="../assets/glassar1.png" alt="Glasssida" />
        </div>
        <div class="portText">
          <p>Ett glasscommunity skapat i ett team som ett skolprojekt.</p>
        </div>
      </div>
      <!-- 3 -->
      <div class="PortGrid">
        <div class="symbols">
          <a href="https://github.com/Jennygl/BG-glass"
            ><button class="btn">
              <ion-icon
                name="logo-github"
                type="button"
                class="GH-button"
              ></ion-icon></button
          ></a>
        </div>
        <img class="portItem" src="../assets/glassar.png" alt="Glasssida" />
      </div>
      <!-- 4 -->
      <div class="PortGrid">
        <div class="symbols">
          <a href="https://github.com/Jennygl/BG-glass"
            ><button class="btn">
              <ion-icon
                name="logo-github"
                type="button"
                class="GH-button"
              ></ion-icon></button
          ></a>
        </div>
        <img class="portItem" src="../assets/glassar1.png" alt="Glasssida" />
      </div>
    </div>
  </div>
</template>

<style>
.Portfolio-container {
  display: grid;
  justify-content: center;
  grid-template-columns: 60vw;
  padding: 10px;
}
@media (max-width: 1100px) {
  .Portfolio-container {
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    padding: 10px;
  }
}
.PortGrid {
  display: flex;
  box-shadow: 5px 5px 10px rgb(174, 219, 240), -5px -5px 10px rgb(174, 219, 240);
  border-radius: 5px;
  padding: 1em;
  margin: 2em;
  width: 60vw;
  height: 30vw;
}
.portItem {
  object-fit: cover;
  width: 28vw;
  border-radius: 5px;
}
.portText {
  margin: 2em;
}
.symbols {
  display: flex;
  flex-direction: row;
  position: absolute;
}
.GH-button {
  background-color: white;
  border-color: white;
  box-shadow: 5px 5px 10px rgb(174, 219, 240), -1px -1px 10px rgb(174, 219, 240);
  border-radius: 5px 5px;
  font-size: 2.4vw;
  margin-right: 5px;
}
.btn {
  padding: 0;
}
</style>
<script>
export default {
  data() {
    return {
      grupp: false,
      enskilt: false,
    };
  },
};
</script>
