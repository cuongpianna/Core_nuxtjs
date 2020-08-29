<template>
  <div class="menu-header">
      <div class="page-info__wrap">
        <div class="page-image">
          <img :src="user_picture" alt="">
        </div>
        <div class="page-title">
          {{ fullName }}

          <font-awesome-icon class="icon" icon="angle-down"/>
        </div>

        <div class="page-info"></div>
      </div>
      <switch-language />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import SwitchLanguage from './switch-language'

export default {
  name: 'MenuHeader',
  components: {
    SwitchLanguage
  },
  data() {
    return {
      picture_url: ''
    }
  },
  computed: {
    ...mapState({
      auth: 'auth',
      access_token: 'accessToken',
      fb_id: 'fb_id'
    }),
    ...mapGetters({
      selectPage: 'auth/selectPage',
      fullName: 'auth/fullName',
      user_picture: 'auth/user_picture'
    })
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    ...mapActions({
      actGetUserInfo: 'auth/getUserInfo'
    }),
    ...mapMutations({
      changeLanguage: "locale/SET_LANG"
    }),
    getUserInfo() {
      this.actGetUserInfo({
        AccessToken: this.access_token,
        Id: this.fb_id
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .menu-header{
    display: flex;
    align-items: center;
    position: relative;

    .page-image{
      margin-right: 10px;
      img{
        width: 45px;
        border-radius: 100%;
      }
    }
    cursor: pointer;

    .page-title{
      position: relative;
      font-size: 15px;
      color: #F5F5F5;
      font-weight: 600;
      max-width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .icon{
        margin-left: 5px;
        margin-top: 4px;
      }
    }
  }

  .page-info__wrap{
    display: flex;
    align-items: center;
    margin-right: 15px;
  }
</style>
