<template>
  <div class="pages">
      <h2>{{ $t('fb.pageList') }}</h2>
      <page-list/>
  </div>
</template>

<script>
import PageList from '@/components/pages/page-list'

export default {
  name: "FacebookPages",
  layout: 'admin',
  middleware: 'admin',
  components: {
    PageList
  }
}
</script>

<style scoped lang="scss">
  .pages{
    padding: 30px 40px;

    h2{
      margin-bottom: 10px;
    }
  }
</style>
