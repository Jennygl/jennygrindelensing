import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import AlertIcon from "vue-ionicons/dist/ios-alert.vue";
import Vuex from "vuex";
import store from "./store";
import { ref } from "vue";
import { Modal } from "usemodal-vue3";

{
  AlertIcon;
}

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Vuex);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.bundle.js";
