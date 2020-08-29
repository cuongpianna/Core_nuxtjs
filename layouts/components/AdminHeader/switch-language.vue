<template>
  <div class="lang">
    <div class="lang-inner" @click="toggleSwitch">
      <img src="~/assets/images/vi.png" v-if="language === 'vi'">
      <img src="~/assets/images/en.png" v-else>
    </div>
    <transition name="slide">
      <div class="switch" v-if="isShowSwitch">
        <ul>
          <li @click="switchLanguage('vi')">
            <div class="flag-image"><img src="~/assets/images/vi.png"></div>
            <div class="flag-name">{{ $t('language.vi') }}</div>
          </li>
          <li @click="switchLanguage('en')">
            <div class="flag-image"><img src="~/assets/images/en.png"></div>
            <div class="flag-name">{{ $t('language.en') }}</div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'SwitchLange',
  data() {
    return {
      isShowSwitch: false
    }
  },
  computed: {
    ...mapGetters({
      'language': 'locale/locale'
    })
  },
  methods: {
    ...mapMutations({
      changeLanguage: "locale/SET_LANG"
    }),
    toggleSwitch() {
      this.isShowSwitch = !this.isShowSwitch
    },
    switchLanguage(lang) {
      this.changeLanguage(lang)
      this.$i18n.locale = lang
      this.isShowSwitch = false
    }
  }
}
</script>

<style scoped lang="scss">
 .lang{
   position: relative;

   img{
     width: 25px;
   }

   .switch{
     position: absolute;
     top: 35px;
     right: 0;

     &.active{
       display: flex;
     }

     ul{
       padding: 0;
       list-style-type: none;
       background: #fff;
       border: 1px solid #e0e6ed;
       box-shadow: 2px 2px hsla(0,0%,53.3%,.22);

       li{
         width: 180px;
         padding: 10px;
         display: flex;
         border-bottom: 1px solid #f8f9fc;
         border-top: 1px solid #f8f9fc;

         .flag-image{
           margin-right: 9px;
         }

         &:hover{
           background-color: #f8fafc;
           color: #2962ff;
         }
       }
     }
   }
 }

 .slide-enter-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: ease-in;
   -webkit-transition-timing-function: ease-in;
   -o-transition-timing-function: ease-in;
   transition-timing-function: ease-in;
 }

 .slide-leave-active {
   -moz-transition-duration: 0.3s;
   -webkit-transition-duration: 0.3s;
   -o-transition-duration: 0.3s;
   transition-duration: 0.3s;
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
 }

 .slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
 }

 .slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
 }
</style>
