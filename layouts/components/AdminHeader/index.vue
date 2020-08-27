<template>
  <div class="admin-header">
<!--    <button @click="miniSideBar">Mini</button>-->
    <div class="left-content"><span class="app-title">{{ appTitle }}</span></div>
    <div class="right-content">
      <menu-header/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import MenuHeader from "@/layouts/components/AdminHeader/menuheader";

export default {
  name: 'AdminHeader',
  components: {
    MenuHeader
  },
  computed: {
    ...mapGetters(['appTitle'])
  },
  mounted() {

  },
  methods: {
    ...mapMutations(['toggleSizeSidebar']),
    miniSideBar() {
      this.toggleSizeSidebar()
    }
  }
}
</script>

<style scoped lang="scss">
.admin-header {
  padding: 8px 40px;
  height: 62px;
  margin-top: 0;
  transform: translateY(0px);
  left: 256px;
  right: 0;
  background: #35475e;
  flex: 1 1 auto;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .app-title{
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
