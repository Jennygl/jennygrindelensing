import { createStore } from "vuex";

const mutations = {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count--;
    },
  },
  state = {
    count: 0,
  };

export default createStore({ mutations, state, strict: true });
