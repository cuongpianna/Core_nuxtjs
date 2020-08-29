<template>
  <div class="fb-dashboard">
    <div class="fb-page card">
      <div class="fb-image">
        <img :src="selectPage.picture_url" alt="">
      </div>
      <div class="fb-content">
        <h3 class="fb-title">{{ selectPage.name }}</h3>
        <h4>PageId: {{ selectPage.id }}</h4>
        <a :href="selectPage.link" target="_blank">{{ selectPage.link }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

const LABEL = {
  module: 'facebook'
}

export default {
  name: 'dashboard',
  layout: 'admin',
  middleware: 'admin',
  computed: {
    ...mapGetters({
      selectPage: 'auth/selectPage'
    })
  },
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
