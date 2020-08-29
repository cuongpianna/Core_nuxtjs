<template>
  <div class="create-wrap">
    <div class="tool-list_wrap">
      <div class="tool-list">
        <div class="title">Chọn kiểu công cụ</div>
        <div class="tool-box__wrap">
          <div class="tool-box" v-for="(item, index) in tools" :key="index" @click="onSelectTool(item)" :class="{'active': selectedToolName === item.name}">
            <div class="icon_wrap">
              <font-awesome-icon class="icon" :icon="item.icon" />
            </div>
            <div class="title">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tool-container">
      <transition name="fade">
        <div class="tool-header" v-if="selectedTool != null">
          <div class="tool-header__inner">
            <div class="toolSelect">
              <div class="icon-tool">
                <font-awesome-icon :icon="selectedTool.icon" class="icon" />
              </div>
              <div class="title-tool">
                {{ selectedTool.name }}
              </div>
            </div>
            <button class="btnSave"> <font-awesome-icon :icon="['far', 'save']" class="icon" /> Lưu</button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolCreate",
  layout: 'admin',
  // middleware: 'admin',
  data() {
    return {
      tools: [
        {
          name: 'Facebook Comment',
          icon: ['fab', 'facebook-messenger']
        },
        {
          name: 'Customer Chat',
          icon: ['far', 'comment-alt']
        }
      ],
      selectedTool: null,
      selectedToolName: ''
    }
  },
  computed: {
  },
  methods: {
    onSelectTool(tool) {
      this.selectedTool = tool
      this.selectedToolName = tool.name
    }
  }
}
</script>

<style scoped lang="scss">
$color1: #35475e;

.create-wrap{
  display: flex;

  .tool-list_wrap{
    width: 455px;
    padding: 30px 30px;
    transition: width .2s ease-out;
    background-color: #f9fafc;
    box-shadow: 0 20px 20px 2px rgba(0,0,0,.2);
    z-index: 1;
    height: calc(100vh - 62px);
  }
}

.title{
  font-size: 20px;
  color: #35475e;
  font-weight: bold;
}

.tool-box__wrap{
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.tool-box{
  margin-bottom: 10px;
  flex-basis: 45%;
  border-radius: 4px;
  padding: 20px 18px;
  background-color: #e3e9ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all ease .3s;

  &:hover{
    background: #bac8d3;
  }

  &.active{
    background: #bac8d3;
  }

  .title{
    font-size: 15px;
    flex-basis: 40%;
    font-weight: normal;
  }

  .icon_wrap{
    flex-basis: 40%;
    display: flex;
    color: $color1;
    justify-content: center;
    align-items: center;
    height: 43px;
    border: 1px solid $color1;
    border-radius: 3px;
  }

  .icon{
    font-size: 18px;
  }
}

.btnSave{
  background: $color1;
  color: #ffffff;
  border-radius: 4px;
  padding: 10px 18px;
  text-decoration: none;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  transition: all ease .3s;
  border: none;
  cursor: pointer;

  &:hover{
    background: #233245;
  }

  .icon{
    margin-right: 7px;
    font-size: 18px;
  }
}

.tool-container{
  width: calc(100% - 455px);

  .tool-header{
    height: 100px;
    padding: 0 20px;
    background: #e3e9ed6b;
    .tool-header__inner{
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;

      .toolSelect{
        display: flex;
        align-items: center;

        .icon{
          font-size: 20px;
          margin-right: 15px;
          color: $color1;
        }
      }


      .title-tool{
        color: $color1;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
