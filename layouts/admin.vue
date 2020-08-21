<template>
  <div class="admin-container" :style="mainStyle">
    <sidebar class="sidebar-container" :style="sidebarWidth"/>
    <div class="main-app">
      <admin-header/>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import  Sidebar  from './components/Sidebar'
import  AdminHeader  from './components/AdminHeader'

const WIDTH = 992

export default {
  name: 'admin',
  components: {
    Sidebar,
    AdminHeader
  },
  computed: {
    ...mapGetters(['device', 'adminSidebar']),
    sidebarWidth: function() {
      let width = 210
      let leftPosition = 0
      let durationTime = 0

      if(this.adminSidebar.isMini) {
        width = 60
      }

      if(!this.adminSidebar.opened) {
        leftPosition = -500
      }

      if(this.adminSidebar.animation) {
        durationTime = 0.3
      }

      return {
        '--sidebar-width': width + 'px',
        '--left-position': leftPosition + 'px',
        '--duration-time': durationTime + 's'
      }
    },
    mainStyle: function () {
      let width = 210
      if(this.adminSidebar.isMini) {
        width = 60
      }
      if(this.device === 'mobile') {
        width = 0
      }
      return {
        '--margin-left': width + 'px'
      }
    }
  },
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      this.toggleDevice('mobile')
      this.closeAdminSideBar({ animation: false })
    }
  },
  methods: {
    ...mapMutations(['toggleDevice', 'closeAdminSideBar', 'openAdminSidebar']),
    isMobile() {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        this.toggleDevice(isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          this.closeAdminSideBar({ animation: false })
        }else {
          this.openAdminSidebar()
        }
      }
    }
  }

}
</script>

<style scoped lang="scss">
.admin-container{
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}

.sidebar-container{
  position: absolute;
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: var(--duration-time);
  left: var(--left-position);
  top: 0;
  height: 100vh;
  width: var(--sidebar-width);
  background: #35475e;
}

.main-app{
  transition: all ease .3s;
  margin-left: var(--margin-left);
  max-height: 100vh;
}
</style>
