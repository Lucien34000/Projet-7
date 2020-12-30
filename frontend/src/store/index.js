import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    userId: null,
    token: "",
    moderation: false
}
};

const store = new Vuex.Store({
  state,
  guetters: {
    user: (state) => {
      return state.user;
    }
  },
  mutations: {
    user(state, user) {
      state.user = user;
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user);
    }
  },
  modules: {
  }
})

export default store;