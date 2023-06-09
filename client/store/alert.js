const state = () => ({
  type: null,
  message: null
})

const getters = {
  alertt: state => state.message,

};

const actions = {
  success({ commit }, message) {
      commit('success', message);
  },
  error({ commit }, message) {
      commit('error', message);
  },
  clear({ commit }) {
      commit('clear');
  }
};

const mutations = {
  success(state, message) {
      state.type = 'success';
      state.message = message;
  },
  error(state, message) {
      state.type = 'error';
      state.message = message;
  },
  clear(state) {
      state.type = null;
      state.message = null;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
