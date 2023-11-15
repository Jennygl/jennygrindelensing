<script setup>
// import ModalSignup from "./ModalSignup.vue";
</script>

<template>
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal-container">
      <h2>Log In</h2>

      <form id="loginForm">
        <p id="emailLabel">E-mail</p>
        <input type="text" id="email" placeholder="name@mail.com" />
        <p id="passwordLabel">Password</p>
        <input type="text" id="password" />
        <button id="loginbtn" @click="closeModal">Log in</button>
      </form>
      <p>
        Not a member yet? <span>Sign in here</span>
        <!-- <button id="signup" @click="openModal">Sign in here</button>
        <ModalSignup
          :title="'Sign Up'"
          :is-open="modalIsOpen"
          @close="closeModal"
        >
        </ModalSignup> -->

        <!-- <i
          class="bi bi-person px-2"
          @click="openModal"
          role="link"
          style="font-size: 1.5rem"
        ></i>
        <ModalLogin
          :title="'Log In'"
          :is-open="modalIsOpen"
          @close="closeModal"
        >
        </ModalLogin> -->
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

#signup {
  border: none;
  background-color: none;
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

#passwordLabel {
  padding: 0;
  margin: 0;
  text-align: start;
}

#password {
  width: 100%;
  margin-bottom: 2vh;
  margin-top: 0vh;
}

#emailLabel {
  padding: 0;
  margin: 0;
  text-align: start;
}
#email {
  width: 100%;
  margin-bottom: 2vh;
}

span {
  color: grey;
}
</style>

<script>
export default {
  data() {
    return { modalIsOpen: false };
  },

  props: {
    title: String,
    isOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    openModal() {
      this.modalIsOpen = true;
    },
    // closeModal() {
    //   this.modalIsOpen = false;
    // },
  },
  //   components: { ModalSignup },
};
</script>
