import { mapGetters } from 'vuex'

export const commonMixin = {
  computed: {
    ...mapGetters({
      locale: 'locale/locale'
    })
  },
  methods: {
    isEnglish() {
      if(this.locale === 'en') {
        return true
      }else {
        return false
      }
    }
  }
}
