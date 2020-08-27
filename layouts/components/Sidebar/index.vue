<template>
  <div class="sidebar-wrap">
      <div class="logo">Logo</div>
    <div class="nav_wrap" v-if="module === 'dashboard'">
      <div class="nav-item" v-for="(item, index) in links" :key="index">
        <font-awesome-icon :icon="item.icon" class="icon" /> <nuxt-link class="nav-link" :to="{name: item.name}"> {{ item.title }} </nuxt-link>
      </div>
    </div>
    <div class="nav_wrap" v-else>
      <div class="nav-item">
        <font-awesome-icon :icon="['far', 'chart-bar']" class="icon"/> <nuxt-link class="nav-link" to="/fb/dashboard"> Dashboard </nuxt-link>
      </div>
      <div class="nav-item">
        <font-awesome-icon icon="rocket" class="icon"/> <nuxt-link class="nav-link" to="/fb/tools"> Công cụ </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { toolRouter } from "@/constant/route";

export default {
  name: 'Sidebar',
  data() {
    return {
      links: toolRouter
    }
  },
  computed: {
    ...mapGetters(['openAdminSidebar', 'module'])
  }
}
</script>

<style scoped lang="scss">
  .logo{
    padding: 21px 15px;
    background: #233245;
    color: #fff;
    font-weight: bold;
  }

  .nav-item{
    padding: 15px 10px 15px 20px;
    font-weight: bold;
    border-bottom: 1px solid #3c506a;
    .nav-link{
      color: #fff;
      text-decoration: none;
      font-weight: 500;
    }

    .icon{
      color: #fff;
      margin-right: 5px;
    }
  }
</style>
