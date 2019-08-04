<template>
  <div class="g-tabbar">
    <router-link to="/home" class="g-tabbar-item">
      <i class="iconfont iconshouyekongxin" v-if="!isBacktopVisible"></i>
      <span v-if="!isBacktopVisible">首页</span>
      <i
        class="iconfont iconshang"
        v-if="isBacktopVisible"
        @click="backToTop"
      ></i>
    </router-link>
    <router-link to="/find" class="g-tabbar-item">
      <i class="iconfont iconfaxian"></i>
      <span>发现</span>
    </router-link>
    <router-link to="/order" class="g-tabbar-item">
      <i class="iconfont icondd"></i>
      <span>订单</span>
    </router-link>
    <router-link to="/personal" class="g-tabbar-item">
      <i class="iconfont iconwode"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CTabbar',
  computed: {
    ...mapState(['isBacktopVisible'])
  },
  methods: {
    backToTop () {
      this.back()
    },
    ...mapMutations(['back'])
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .router-link-active {
    color:$link-active-color;
    .iconshang {
      font-size:40px;
    }
  }
</style>
