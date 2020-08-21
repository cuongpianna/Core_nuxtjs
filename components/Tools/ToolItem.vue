<template>
  <tr class="toolWrap">
    <td class="name-wrap"> <font-awesome-icon :icon="icon" class="icon"/> {{ tool.name }}</td>
    <td>-</td>
    <td>-</td>
    <td><button class="draftButton">Nháp</button></td>
  </tr>
</template>

<script>
export default {
  name: 'ToolItem',
  props: {
    tool: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    icon() {
      let iconFont = ''
      if(this.tool.type === 'message'){
        iconFont = ['fab', 'facebook-messenger']
      }else if(this.tool.type === 'comment'){
        iconFont = ['far', 'comment-alt']
      }
      return iconFont
    }
  }
}
</script>

<style scoped lang="scss">
tr {
  td {
    text-align: center;
    padding: 10px 15px;
    border: 1px solid #e0e6ed;
    vertical-align: bottom;
    font-weight: 500;
    line-height: 1.5;
  }

  transition: all ease .2s;
  cursor: pointer;

  &:hover {
    background: #f1f2f4;
  }
}

.draftButton{
  border-radius: 4px;
  background-color: rgba(227,233,237,.7);
  color: #6c798f;
  border: none;
  cursor: pointer;
  padding: 4px 10px;
}

.name-wrap{
  display: flex;
  align-items: center;

  .icon{
    font-size: 20px;
    color: #35475e;
    flex-basis: 30%;
  }
}
</style>
