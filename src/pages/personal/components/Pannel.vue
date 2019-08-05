<template>
  <div class="pannel">
    <ul class="pannel-list">
      <li class="pannel-item">
        <i class="iconfont iconshoucang"></i>
        <span>收藏</span>
      </li>
      <li class="pannel-item">
        <i class="iconfont iconpost"></i>
        <span>评价</span>
      </li>
      <li class="pannel-item">
        <i class="iconfont iconhongbao"></i>
        <span>红包/卡券</span>
      </li>
      <li class="pannel-item">
        <i class="iconfont iconxiaoxi"></i>
        <span>消息</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonalPannel'
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .pannel{
    color:#000;
    font-weight:bold;
    .pannel-list{
      display:flex;
      width:100%;
      height:100px;
      .pannel-item{
        flex:1;
        @include flex-center(column);
        font-size:$font-size-l;
        .iconfont{
          margin-bottom:8px;
          font-size:$icon-font-size;
        }
      }
    }
  }
</style>
