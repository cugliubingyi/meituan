<template>
  <div class="header" :style="{'top':`${homeHeaderTop}px`}">
    <div class="header-overhead"></div>
    <div class="header-left">
      <div @click="goToCity">
        {{this.city}}
        <i class="iconfont iconarrow-bottom"></i>
      </div>
    </div>
    <div class="header-center">
      <router-link to="/search" class="search-link">
        <div class="header-search">
          <i class="iconfont iconfangdajing"></i>
          江湖堂酒馆
        </div>
      </router-link>
    </div>
    <div class="header-right">
      <i class="iconfont iconhao"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city', 'homeHeaderTop'])
  },
  methods: {
    goToCity () {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    position:absolute;
    left:0;
    width:100%;
    height:$navbar-height;
    background:$header-bgc;
    z-index:$navbar-z-index;
    @include flex-between();
    &.header-fixed{
      position:fixed;
      left:0;
      top:0!important;
    }
    .header-overhead{
      position:absolute;
      left:0;
      bottom:100%;
      width:100%;
      height:500px;
      background:$header-bgc;
    }
    .header-left{
      margin-left:10px;
      font-size:$font-size-l;
      font-weight:bold;
      color:#000;
      .iconfont{
        font-size:$icon-font-size-sm;
      }
    }
    .header-center{
      flex:1;
      margin:0 auto;
      @include flex-center();
      .search-link{
        display:block;
        width:90%;
        height:30px;
        .header-search{
          line-height:30px;
          width:100%;
          height:30px;
          background:#fff;
          border-radius:6px;
          padding:0 10px;
          font-size:14px;
          color:#686868;
          .iconfont{
            font-weight:bold;
          }
        }
      }
    }
    .header-right{
      margin-right:10px;
      color:#000;
      font-weight:bold;
      .iconfont{
        font-size:$icon-font-size-sm;
      }
    }
  }
</style>
