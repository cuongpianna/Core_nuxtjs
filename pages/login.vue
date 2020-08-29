<template>
  <div class="login_wrap">
    <h1>Login</h1>
    <div class="login-form">
      <input type="text" v-model="user.username" placeholder="Tài khoản">
      <input v-on:keyup.enter="onLogin" type="text" v-model="user.password" placeholder="Mật khẩu">
      <button @click="onLogin">Đăng nhập</button>
      <button @click="onLoginFacebook">Đăng nhập fb</button>
      <button @click="ss">Get Permission</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
const Cookie = process.client ? require("js-cookie") : undefined

export default {
  name: "login",
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      profile: {}
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  mounted() {
    let vm = this
    window.fbAsyncInit = function() {
      FB.init({
        appId: '347903993037355',
        autoLogAppEvents : true,
        xfbml: true,
        version: 'v8.0'
      })
      FB.AppEvents.logPageView()
      // Get FB Login Status
      FB.getLoginStatus(response => {
        vm.statusChangeCallback(response)
      })
    }

  },
  methods: {
    ...mapActions({
      actLogin: 'login',
      actFacebookLogin: 'auth/facebookLogin'
    }),
    ...mapMutations([
      'setAccessToken', 'setFacebookId'
    ]),
    onLogin() {
      const nextUrl = this.$route.query.next
       this.actLogin({username: this.user.username, password: this.user.password})
      if(this.token === 'admin') {
        this.$router.replace( nextUrl )
        Cookie.set('token', 'admin')
      }else {
        alert('Tai khoản hoặc mật khẩu sai')
      }
    },
    onLoginFacebook() {
      let vm = this
      FB.login(function (response) {
        vm.statusChangeCallback(response)
      }, {
        scope: 'email, public_profile, pages_messaging, pages_show_list, pages_read_user_content, pages_read_engagement, pages_manage_posts, pages_manage_metadata, pages_manage_engagement, pages_manage_instant_articles, pages_manage_cta',
        return_scopes: true
      }),
        {
          auth_type: 'reauthorize'
        }
    },
    getProfile (accessToken, userId) {
      this.setAccessToken(accessToken)
      this.setFacebookId(userId)
      Cookie.set('access_token', accessToken)
      Cookie.set('fb_id', userId)
      let vm = this
      FB.api('/me?fields=name,id,email,picture,first_name,last_name,gender,locale,birthday,link', function (response) {
        response.accessToken = accessToken
        vm.actFacebookLogin(response).then(() => {
          const url = `dashboard`
          vm.$router.push(url)
        })
      })
    },
    logout () {
      let vm = this
      FB.logout(function (response) {
        vm.statusChangeCallback(response)
      })
    },
    statusChangeCallback (response) {
      let vm = this
      if (response.status === 'connected') {
        vm.authorized = true
        vm.getProfile(response.authResponse.accessToken, response.authResponse.userID)
      } else if (response.status === 'not_authorized') {
        vm.authorized = false
      } else if (response.status === 'unknown') {
        vm.profile = {}
        vm.authorized = false
      } else {
        vm.authorized = false
      }
    },
    ss() {
      window.open('https://www.facebook.com/v3.1/dialog/oauth?client_id=347903993037355&redirect_uri=https%3A%2F%2Flocalhost%3A9000&Fapi_key%3D3f60f6ca6ddf4c35b0cc71667b222cbf%26redirect_uri%3Dhttps%253A%252F%252Fharafunnel.com%252Fplugin%252Faccount%252Fconnect%252Fcallback%26timestamp%3D1598347658%26signature%3DhppM7XBhek1kNMtNlTJHcVaBKCIdy48sqiJldgxxe%252FU%253D&display=popup&scope=email%2Cread_page_mailboxes%2Cpages_messaging%2Cpages_messaging_subscriptions%2Cads_management&cbt=1598347656781&logger_id=adc061c8-de66-44e5-a834-a5dac5bcf919&ext=1598351316&hash=AeYR2OJKRYC6yZd0')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
