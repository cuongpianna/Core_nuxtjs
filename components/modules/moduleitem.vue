<template>
  <div class="module-item">
    <div class="left-content">
      <div class="icon_wrap">
        <font-awesome-icon class="icon" :icon="moduleItem.icon" :style="iconStyle"/>
      </div>
      <div class="link-title">
        <nuxt-link class="link" :to="moduleItem.to">
          {{ moduleItem.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleItem',
  props: {
    moduleItem: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    iconStyle() {
      return {
        '--icon-color': this.moduleItem.color
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/styles/varibles";

.module-item{
  padding: 10px;
  box-shadow: 0 2px 3px 0px rgba(0,0,0,0.05);
  border-radius: 3px;
  margin-bottom: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  .left-content{
    display: flex;
    align-items: center;
    .icon_wrap{
      margin-right: 15px;

      .icon{
        font-size: 35px;
        color: var(--icon-color);
      }
    }

    .link-title{
      .link{
        font-size: 16px;
        color: $blue1;
        transition: all ease;
        font-weight: 500;
        text-decoration: none;
      }
    }
  }
}
</style>
