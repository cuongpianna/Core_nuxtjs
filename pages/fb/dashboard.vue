<template>
  <div class="fb-dashboard">
    <div class="fb-page card">
      <div class="fb-image">
        <img :src="selectedPage.picture_url" alt="">
      </div>
      <div class="fb-content">
        <h3 class="fb-title">{{ selectedPage.name }}</h3>
        <h4>PageId: {{ selectedPage.id }}</h4>
        <a :href="selectedPage.link" target="_blank">{{ selectedPage.link }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { commonMixin } from '@/mixin/common'

const LABEL = {
  module: 'facebook'
}

export default {
  name: 'FacebookDashboard',
  layout: 'admin',
  middleware: 'admin',
  head() {
    return {
      title: this.$t('meta.fbDashboard')
    }
  },
  computed: {
    ...mapGetters({
      selectedPage: 'auth/selectPage'
    })
  },
  mixins: [commonMixin],
  created() {
    this.setSelectModule(LABEL.module)
  },
  methods:{
    ...mapMutations(['setSelectModule'])
  }
}
</script>

<style scoped lang="scss">
@import "assets/styles/app";

.fb-dashboard{
  padding: 30px 40px;

  .fb-page{
    display: flex;
    align-items: center;
    .fb-image{
      margin-right: 25px;
      img{
        border-radius: 50%;
      }
    }

    .fb-content{
      h3{
        margin-bottom: 4px;
        font-size: 18px;
      }

      h4{
        font-weight: normal;
      }
    }
  }
}
</style>
