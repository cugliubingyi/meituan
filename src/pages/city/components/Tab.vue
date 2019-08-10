<template>
  <div class="tab">
    <ul class="tab-list">
      <li class="tab-item" @click="switchTab(0)" :class="{'tab-item-active': curId === 0}">国内</li>
      <li class="tab-item" @click="switchTab(1)" :class="{'tab-item-active': curId === 1}">国际/港澳台</li>
      <div class="tab-pannel" :style="{transform:'translate3d('+100*curId+'%,0,0)'}"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityTab',
  data () {
    return {
      curId: 0
    }
  },
  methods: {
    switchTab (id) {
      if (this.curId === id) {
        return
      }
      this.curId = id
      this.$emit('switch-tab', id)
    }
  },
  activated () {
    this.curId = 0
    this.$emit('switch-tab', 0)
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .tab{
    position:fixed;
    top:40px;
    left:0;
    width:100%;
    height:40px;
    background:#fff;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    .tab-list{
      @include flex-between();
      position:relative;
      .tab-item{
        width:50%;
        height:40px;
        @include flex-center();
        font-size:$font-size-l;
        color:#666;
        &-active{
          color:#000;
        }
      }
      .tab-pannel{
        position:absolute;
        left:0;
        bottom:2px;
        width:50%;
        height:2px;
        background:#FE8D01;
        transition:all .4s;
      }
    }
  }

</style>
