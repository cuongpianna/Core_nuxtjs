const cookieparser = process.server ? require("cookieparser") : undefined;
import {setToken, setAccessToken, setFacebookId} from '../utils/auth'

const GET_USER_INFO_PATH = 'http://localhost:57947/api/User/getUserInfo'

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
  },
  setAppTitle(state, title) {
    state.appTitle = title
  },
  setSelectModule(state, module) {
    state.module = module
  },
  setUserProfile: (state, userInfo) => {
    state.auth.facebookPages = userInfo.facebookPages
    var pageSelected = JSON.parse(JSON.stringify(state.auth.facebookPages[0]))
    pageSelected.picture_url = pageSelected.picture.data.url
    state.auth.selectPage = pageSelected

    state.auth.firstName = userInfo.firstName
    state.auth.lastName = userInfo.lastName
    state.auth.user_picture = userInfo.pictureUrl
  }
}

export const actions = {
  async nuxtServerInit({state, commit}, {req}) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      const cookie = JSON.parse(JSON.stringify((parsed)))
      const token = cookie.token
      const {fb_id, access_token} = cookie
      commit("setToken", token)
      commit('setAccessToken', access_token)
      commit('setFacebookId', fb_id)

      try {
        const result = await this.$axios.$post(GET_USER_INFO_PATH, {
          AccessToken: access_token,
          Id: fb_id
        })
        commit('setUserProfile', result)
      } catch (e) {
        console.log(e)
      }
    }
  },

  login({commit}, userInfo) {
    if (userInfo.username === 'admin' && userInfo.password === '123456') {
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
  fb_id: '',
  appTitle: '',
  module: 'dashboard'
})

export const getters = {
  token: (state) => {
    return state.token
  },
  openAdminSidebar: state => state.openAdminSidebar,
  adminSidebar: state => state.adminSidebar,
  device: state => state.device,
  appTitle: state => state.appTitle,
  module: state => state.module
}
