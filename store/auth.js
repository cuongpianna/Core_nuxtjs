const cookieparser = process.server ? require("cookieparser") : undefined;

const CREATE_OAUTH_PATH = 'http://localhost:57947/api/User/createOAuth'
const GET_USER_INFO_PATH = 'http://localhost:57947/api/User/getUserInfo'

export const mutations = {
  setUserProfile: (state, userInfo) => {
    state.facebookPages = userInfo.facebookPages
    var pageSelected = JSON.parse(JSON.stringify(state.facebookPages[0]))
    pageSelected.picture_url = pageSelected.picture.data.url
    state.selectPage = pageSelected

    state.firstName = userInfo.firstName
    state.lastName = userInfo.lastName
    state.user_picture = userInfo.pictureUrl
  }
}

export const actions = {
  async facebookLogin({ commit }, userInfo) {
      const data = await this.$axios.$post(CREATE_OAUTH_PATH, userInfo)
      commit('setUserProfile', data)
  },

  async getUserInfo({ commit }, data) {
    try{
      const result = await this.$axios.$post(GET_USER_INFO_PATH, data)
      commit('setUserProfile', result)
    }catch (e) {
      console.log(e)
    }
  }
}

export const state = () => ({
  facebookId: '',
  facebookPages: [],
  selectPage: {},
  firstName: '',
  lastName: '',
  user_picture: ''
})

export const getters = {
  selectPage: state => state.selectPage,
  fullName: state => state.lastName + ' ' + state.firstName,
  user_picture: state => state.user_picture
}
