const cookieparser = process.server ? require("cookieparser") : undefined;
import { setToken, setAccessToken, setFacebookId } from '../utils/auth'

export const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  toggleSizeSidebar(state) {
    state.adminSidebar.isMini = !state.adminSidebar.isMini
  },
  toggleDevice: (state, device) => {
    state.device = device
  },
  closeAdminSideBar: (state, animate) => {
    state.adminSidebar.opened = false
    state.adminSidebar.animate = animate
  },
  openAdminSidebar: (state) => {
    state.adminSidebar.opened = true
  },
  setAccessToken(state, token) {
    state.accessToken = token
    setAccessToken(token)
  },
  setFacebookId(state, fbId) {
    state.fb_id = fbId
    setFacebookId(fbId)
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      const cookie = JSON.parse(JSON.stringify((parsed)))
      const token = cookie.token
      const { fb_id, access_token } = cookie
      commit("setToken", token)
      commit('setAccessToken', access_token)
      commit('setFacebookId', fb_id)
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
  openAdminSidebar: true,
  adminSidebar: {
    opened: true,
    isMini: false,
    animation: true
  },
  device: '',
  accessToken: '',
  fb_id: ''
})

export const getters = {
  token: (state) => {
    return state.token
  },
  openAdminSidebar: state => state.openAdminSidebar,
  adminSidebar: state => state.adminSidebar,
  device: state => state.device
}
