<template>
  <div class="admin-header">
<!--    <button @click="miniSideBar">Mini</button>-->
    <div class="left-content">{{crumbs}}</div>
    <div class="right-content">
      <menu-header/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import MenuHeader from "@/layouts/components/AdminHeader/menuheader";

export default {
  name: 'AdminHeader',
  components: {
    MenuHeader
  },
  computed: {
    crumbs() {
      const crumbs = []
      this.$route.matched.map((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        // console.log(crumb.path)
      })
      // this.$route.matched.map((item, i, {length}) => {
      //   const crumb = {}
      //   crumb.path = item.path
      //   crumb.name = this.$i18n.t('route.' + (item.name || item.path))
      //
      //   // is last item?
      //   if (i === length - 1) {
      //     // is param route? .../.../:id
      //     if (item.regex.keys.length > 0) {
      //       crumbs.push({
      //         path: item.path.replace(/\/:[^/:]*$/, ''),
      //         name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, ''))
      //       })
      //       crumb.path = this.$route.path
      //       crumb.name = this.$i18n.t('route.' + this.$route.name, [
      //         crumb.path.match(/[^/]*$/)[0]
      //       ])
      //     }
      //     crumb.classes = 'is-active'
      //   }
      //
      //   crumbs.push(crumb)
      // })

      return crumbs
    }
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
}
</style>
