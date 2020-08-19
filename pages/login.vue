<template>
  <div class="login_wrap">
    <h1>Login</h1>
    <div class="login-form">
      <input type="text" v-model="user.username" placeholder="Tài khoản">
      <input v-on:keyup.enter="onLogin" type="text" v-model="user.password" placeholder="Mật khẩu">
      <button @click="onLogin">Đăng nhập</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const Cookie = process.client ? require("js-cookie") : undefined

export default {
  name: "login",
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    ...mapActions({
      actLogin: 'login'
    }),
    onLogin() {
      const nextUrl = this.$route.query.next
       this.actLogin({username: this.user.username, password: this.user.password})
      if(this.token === 'admin') {
        this.$router.replace( nextUrl )
        Cookie.set('token', 'admin')
      }else {
        alert('Tai khoản hoặc mật khẩu sai')
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
