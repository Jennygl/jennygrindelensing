<template>
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal-container">
      <h2>Sign Up</h2>

      <form id="loginForm">
        <p class="inputLabel" id="firstLabel">First name</p>
        <input
          class="formInput"
          type="text"
          id="firstName"
          placeholder="First name"
        />
        <p class="inputLabel" id="lastLabel">Last name</p>
        <input
          class="formInput"
          type="text"
          id="email"
          placeholder="Last name"
        />
        <p class="inputLabel" id="emailLabel">E-mail</p>
        <input
          class="formInput"
          type="text"
          id="email"
          placeholder="name@mail.com"
        />

        <p class="inputLabel" id="passwordLabel">Password</p>
        <input class="formInput" type="text" id="password" />
        <p class="inputLabel" id="passwordLabel">Comfirm password</p>
        <input class="formInput" type="text" id="comPassword" />

        <button id="loginbtn" @click="closeModal">Sign Up</button>
      </form>
      <p>
        Already a member?
        <button id="signup" @click="openLogin">Log in here</button>
        <ModalLogin
          :title="'Log in'"
          :is-open="modalIsOpen"
          @close="closeModal"
        >
        </ModalLogin>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(76, 76, 76, 0.5);
  z-index: 10;
}

.modal-container {
  position: absolute;
  width: 45vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff3f3;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 2vh;
}

@media screen and (max-width: 600px) {
  .modal-container {
    width: 80vw;
  }
}

@media screen and (min-width: 900px) {
  .modal-container {
    width: 45vw;
  }
}

/* h2 {
    text-align: center;
    margin-top: 2vh;
  } */
input {
  border-radius: 5px;
}
#loginbtn {
  background-color: #86b393;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-bottom: 2vh;
}

#loginForm {
  width: 70%;
  text-align: center;
  align-items: center;
  margin: auto;
}

@media screen and (min-width: 900px) {
  #loginForm {
    width: 50%;
  }
}

.inputLabel {
  padding: 0;
  margin: 0;
  text-align: start;
}

.formInput {
  width: 100%;
  margin-bottom: 2vh;
  margin-top: 0vh;
}

span {
  color: grey;
}
</style>

<script>
import ModalLogin from "./ModalLogin.vue";

export default {
  props: {
    title: String,
    isOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    openLogin() {
      this.modalIsOpen = true;
    },
  },
  components: { ModalLogin },
};
</script>
