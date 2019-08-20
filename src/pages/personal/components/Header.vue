<template>
  <div class="header" :style="{opacity:headerOpacity}">
    <div class="username" v-if="showUsername">{{username}}</div>
    <i class="iconfont iconkefu"></i>
    <i class="iconfont iconshezhikongxin"></i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PersonalHeader',
  props: {
    username: String
  },
  computed: {
    showUsername () {
      return Math.abs(this.personalHeaderTop) > 20
    },
    headerOpacity () {
      return Math.abs(this.personalHeaderTop) > 20 ? 1 : (Math.abs(this.personalHeaderTop) / 20)
    },
    ...mapState(['personalHeaderTop'])
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:$header-bgc;
    color:#000;
    font-size:$font-size-l;
    font-weight:bold;
    z-index:$navbar-z-index;
    .username{
      position:absolute;
      left:30%;
      right:30%;
      top:0;
      bottom:0;
      line-height:40px;
      text-align:center;
      @include ellipsis();
    }
    .iconfont{
      float:right;
      margin-right:20px;
      font-size:$icon-font-size-sm;
    }
  }
</style>
