<template>
  <div class="menu-header">
    <div class="page-image">
      <img :src="selectPage.picture_url" alt="">
    </div>
    <div class="page-title">
      {{selectPage.name}}

      <font-awesome-icon class="icon" icon="angle-down"/>
    </div>

    <div class="page-info"></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'MenuHeader',
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
      selectPage: 'auth/selectPage'
    })
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    ...mapActions({
      actGetUserInfo: 'auth/getUserInfo'
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
</style>
