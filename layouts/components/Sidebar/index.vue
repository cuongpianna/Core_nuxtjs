<template>
  <div class="sidebar-wrap">
      <div class="logo">Logo</div>
    <div class="nav_wrap">
      <div class="nav-item" v-for="(item, index) in links" :key="index">
        <font-awesome-icon :icon="item.icon" class="icon" /> <nuxt-link class="nav-link" :to="item.to"> {{ item.title }} </nuxt-link>
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
    ...mapGetters(['openAdminSidebar'])
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
    }

    .icon{
      color: #fff;
      margin-right: 5px;
    }
  }
</style>
