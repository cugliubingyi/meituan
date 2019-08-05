<template>
  <div class="tool">
    <div class="tool-title">推荐工具</div>
    <ul class="tool-list">
      <li
        class="tool-item"
        v-for="item of list"
        :key="item.id"
      >
        <i class="iconfont" :class="item.iconName"></i>
        <span class="icons-desc">{{item.desc}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonalTool',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .tool{
    width:100%;
    height:330px;
    .tool-title{
      width:100%;
      height:60px;
      line-height:60px;
      font-size:$icon-font-size-sm;
      font-weight:bold;
      color:#000;
    }
    .tool-list{
      width:100%;
      height:270px;
      overflow:hidden;
      .tool-item{
        float:left;
        width:25%;
        height:90px;
        @include flex-center(column);
        .iconfont{
          font-size:$icon-font-size;
          margin-bottom:4px;
          width:40px;
          height:40px;
          border-radius:10px;
          @include flex-center();
          &.iconyaoqingyouli{
            color:#FE9041;
          }
          &.iconshoujichongzhi{
            color:#FE8A41;
          }
          &.iconhuochepiao{
            color:#24A4F6;
          }
          &.iconshui{
            color:#F96F5F;
          }
          &.iconVIP-{
            color:#F96F5F;
          }
          &.icongongyi{
            color:#F76C5E;
          }
          &.iconGroupCopy{
            color:#FF9849;
          }
          &.iconmianliuliangfuwu{
            color:#7490F2;
          }
          &.iconfapiao{
            color:#23A6F4;
          }
          &.iconwoyaohezuo{
            color:#F6AC19;
          }
          &.iconmeituan{
            color:#FEAD19;
          }
        }
        .icons-desc{
          color:#000;
          font-size:$font-size-l;
          @include ellipsis();
        }
      }
    }
  }
</style>
