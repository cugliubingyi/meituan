<template>
  <div class="header">
    我的订单
    <i class="iconfont iconfangdajing"></i>
  </div>
</template>

<script>
export default {
  name: 'OrderHeader'
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:$navbar-height - 10px;
    background:$header-bgc;
    text-align:center;
    line-height:$navbar-height - 10px;
    color:#000;
    font-size:$font-size-l;
    font-weight:bold;
    .iconfont{
      position:absolute;
      right:10px;
      color:#000;
      font-size:$icon-font-size-sm;
    }
  }
</style>
