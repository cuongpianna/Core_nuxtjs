<template>
  <div class="admin-header">
    <button @click="miniSideBar">Mini</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AdminHeader',
  methods: {
    ...mapMutations(['miniAdminSidebar']),
    miniSideBar() {
      this.miniAdminSidebar()
    }
  }
}
</script>

<style scoped lang="scss">
.admin-header {
  height: 64px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 256px;
  right: 0px;
  background: #272727;
  flex: 1 1 auto;
  max-width: 100%;
}
</style>
