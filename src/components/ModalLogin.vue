<template>
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal-container">
      <!-- <div class="modal-header">
        <h2>{{ title }}</h2>
        <button @click="closeModal">X</button>
      </div> -->
      <div class="modal-body">
        <div class="login">
          <h2>Log In</h2>

          <form>
            <p>E-mail</p>
            <input type="text" id="email" placeholder="name@mail.com" />
            <p>Password</p>
            <input type="text" id="password" />
          </form>
          <button id="loginbtn" @click="closeModal">Log in</button>
          <p>
            Not a member yet?
            <span>Sign up here</span>
          </p>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

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
  width: 35vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff3f3;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  align-items: center;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-header h2 {
  margin: 0;
}

.modal-header button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* .modal-body {
  max-height: 80vh;
  overflow-y: auto;
} */

h2 {
  text-align: center;
}
input {
  margin-bottom: 2vh;
  border-radius: 5px;
}
#loginbtn {
  background-color: #86b393;
  width: 20vw;
  border: none;
  border-radius: 5px;
}

p {
  padding: 0;
  margin: 0;
}

#password {
  width: 20vw;
}
#email {
  width: 20vw;
}

span {
  color: grey;
}
</style>
