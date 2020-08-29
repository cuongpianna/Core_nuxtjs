<template>
  <div class="dashboard-wrap">
    <modulelist/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ModuleList from "@/components/modules/modulelist"

export default {
  name: 'dashboard',
  layout: 'admin',
  components: {
    ModuleList
  },
  data(){
    return {
      pageName: 'Dashboard'
    }
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
