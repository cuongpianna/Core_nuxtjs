<template>
  <div class="tool-wrap">
    <div class="row">
      <nuxt-link to="/admin/1/tool/create" class="btn-addTool"><font-awesome-icon icon="plus" class="icon"/> Công cụ mới</nuxt-link>
    </div>
    <div class="tool-list__wrap">
      <table>
        <thead class="thead">
          <tr>
          <th class="th-name">Tên</th>
          <th>Đã gửi</th>
          <th>Tin nhắn Opt-in</th>
          <th>Trạng thái</th>
        </tr>
        </thead>
        <tool-list/>
      </table>
    </div>
  </div>
</template>

<script>
import ToolList from "@/components/Tools/ToolList";

export default {
  name: 'ToolPage',
  components: {ToolList},
  middleware: 'admin',
  layout: 'admin',
  transition: 'bounce'
}
</script>

<style scoped lang="scss">
$bg_color: #35475e;
$bg_color2: #233245;
.tool-wrap{
  padding: 10px;
  .row{
    padding: 10px 20px;
    text-align: right;

    .btn-addTool{
      background: $bg_color;
      color: #ffffff;
      border-radius: 4px;
      padding: 8px 14px;
      text-decoration: none;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      transition: all ease .3s;

      &:hover{
        background: $bg_color2;
      }

      .icon{
        margin-right: 5px;
      }
    }
  }

  .tool-list__wrap{
    padding: 40px 20px;

    table{
      border-radius: 8px;
      width: 100%;
      border-collapse: collapse;
      tr{
        th{
          text-align: center;
          padding: 10px 15px;
          border: 1px solid #e0e6ed;
          vertical-align: bottom;
          font-weight: 500;
          line-height: 1.5;

          &.th-name{
            width: 44%;
          }
        }

        transition: all ease .2s;
        cursor: pointer;

        &:hover{
          background: #f1f2f4;
        }
      }
    }
  }
}
</style>
