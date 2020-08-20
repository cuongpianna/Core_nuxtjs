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

export default {
  name: 'Sidebar',
  data() {
    return {
      links: [
        {
          icon: 'chart-bar',
          title: 'Tổng quan',
          to: '/admin/1/dashboard'
        },
        {
          icon: 'user',
          title: 'Khách hàng',
          to: '/test'
        },
        {
          icon: 'tools',
          title: 'Công cụ',
          to: '/test'
        },
        {
          icon: 'cog',
          title: 'Cấu hình',
          to: '/test'
        },
        {
          icon: 'life-ring',
          title: 'Hỗ trợ',
          to: '/test'
        }
      ]
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
    padding: 15px;
    font-weight: bold;
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
