<template>
  <div class="dashboard-wrap">
    <modulelist :moduleList="modules"/>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import ModuleList from "@/components/modules/modulelist"

export default {
  name: 'dashboard',
  layout: 'admin',
  components: {
    ModuleList
  },
  head() {
    return {
      title: this.$t('meta.moduleList')
    }
  },
  data(){
    return {
      pageName: 'Dashboard',
      modules: [
        {
          name: 'Facebook Marketing',
          icon: ['fab', 'facebook'],
          to: `/fb/dashboard`,
          color: '#267cde'
        },
        {
          name: 'Store',
          icon: 'store-alt',
          to: '',
          color: '#dbaa07'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale/locale'
    })
  },
  mounted() {
    this.onSetAppTitle()
  },
  methods: {
    ...mapMutations(['setAppTitle']),
    onSetAppTitle() {
      this.setAppTitle(this.pageName)
    }
  }
}
</script>

<style scoped lang="scss">
.dashboard-wrap{
  max-width: 900px;
  margin: auto;
  padding: 30px 10px;
}
</style>
