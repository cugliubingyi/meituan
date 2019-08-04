<template>
  <div class="header">发现</div>
</template>

<script>
export default {
  name: 'FindHeader'
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
  }
</style>
