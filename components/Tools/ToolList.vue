<template>
  <tbody>
    <tool-item v-for="(item, index) in items" :key="index" :tool="item"/>
  </tbody>
</template>

<script>


import ToolItem from "@/components/Tools/ToolItem";

export default {
  name: 'ToolList',
  components: {ToolItem},
  props: {
    items: {
      type: Array,
      default: () => [
        {
          name: 'Công cụ 1',
          type: 'message'
        },
        {
          name: 'Công cụ 2',
          type: 'comment'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
