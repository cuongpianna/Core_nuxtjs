<template>
  <div class="sidebar-wrap" :style="sidebarWidth">
      sidebar
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['openAdminSidebar']),
    sidebarWidth: function() {
      let width = 256
      if(!this.openAdminSidebar) {
        width = 60
      }
      return {
        '--sidebar-width': width + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar-wrap{
  height: 100vh;
  top: 0px;
  transition: all ease .3s;
  width: var(--sidebar-width);
  background: #3b8070;
  //transform: translateX(0)
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
</style>
