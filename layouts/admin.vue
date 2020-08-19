<template>
  <div class="admin-container">
    <sidebar/>
    <div class="main-app">
      <admin-header/>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import  Sidebar  from './components/Sidebar'
import  AdminHeader  from './components/AdminHeader'
export default {
  name: 'admin',
  components: {
    Sidebar,
    AdminHeader
  }
}
</script>

<style scoped lang="scss">
.admin-container{
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}

.main-app{
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
