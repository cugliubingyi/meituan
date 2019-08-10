<template>
  <div class="header">
    <router-link
      class="header-search"
      :to="{name: 'CitySearch'}"
      tag="div"
    >
      <i class="iconfont iconfangdajing"></i>
      <div class="header-placeholder">城市名/拼音</div>
    </router-link>
    <i class="iconfont iconcuo" @click="goToHome"></i>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    goToHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:40px;
    background:$header-bgc;
    @include flex-center();
    .header-search{
      width:60%;
      height:24px;
      background:#fff;
      border-radius:12px;
      @include flex-center();
      .iconfangdajing{
        color:#999;
        font-size:$icon-font-size-sm;
        font-weight: bold;
      }
      .header-placeholder{
        margin-left:6px;
        color:#999;
        font-size:$font-size-l;
      }
    }
    .iconcuo{
      position:absolute;
      top:11px;
      left:20px;
      color:#000;
      font-weight:bold;
      font-size:$icon-font-size-sm;
    }
  }
</style>
