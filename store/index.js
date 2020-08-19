const cookieparser = process.server ? require("cookieparser") : undefined;
import { setToken } from '../utils/auth'

export const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  miniAdminSidebar(state) {
    state.openAdminSidebar = !state.openAdminSidebar
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      const cookie = JSON.parse(JSON.stringify((parsed)))
      const token = cookie.token
      commit("setToken", token)
    }
  },

  login({ commit }, userInfo) {
    if(userInfo.username === 'admin' && userInfo.password === '123456') {
      commit('setToken', 'admin')
    }
  }
}

export const state = () => ({
  token: '',
  openAdminSidebar: true
})

export const getters = {
  token: (state) => {
    return state.token
  },
  openAdminSidebar: state => state.openAdminSidebar
}
