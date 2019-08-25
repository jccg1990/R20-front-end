import Vue from 'vue'
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

Vue.use(Vuex)

export default  new Vuex.Store({
  state: {
    user: null,
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
      removeItem: key => Cookies.remove(key)
    }
  })],
  getters: {
    user: state => {
      console.log(state.user);
      return state.user;
    },
    authHeader: state => {
      let jwt = state.user.getSignInUserSession()
      .getIdToken()
      .getJwtToken();

      return {
        headers: {
          authorization: 'Bearer ' + jwt
        }
      }
    }
  },
  mutations: {
    setUser (state, payload) {
      console.log(payload);
      state.user = payload.user;
    },
    removeUser (state) {
      state.user = null;
    }
  }
});
