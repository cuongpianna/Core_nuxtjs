export const state = () => ({
  locales: ['vi', 'en'],
  locale: 'vi'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const getters = {
  locale: state => state.locale
}
