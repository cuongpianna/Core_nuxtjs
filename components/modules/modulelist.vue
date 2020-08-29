<template>
  <div class="module-list__container">
    <h4>Ứng dụng</h4>
    <module-item class="item" v-for="(item, index) in moduleList" :key="index" :module-item="item"/>
  </div>
</template>

<script>
import ModuleItem from './moduleitem'
import { mapGetters } from 'vuex';

export default {
  name: 'ModuleList',
  components: {
    ModuleItem
  },
  props: {
    moduleList: {
      type: Array,
      default: () => [
        {
          name: 'Facebook Marketing',
          icon: ['fab', 'facebook'],
          to: '',
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
  data() {
    return{
      modules: []
    }
  },
  computed: {
    ...mapGetters({
      selectPage: 'auth/selectPage'
    })
  }
}
</script>

<style scoped lang="scss">
@import "assets/styles/app";

  h4{
    color: $green1;
    margin-bottom: 5px;
  }
</style>
