<template>
  <div class="tab">
    <div>
      <ul class="tab-list">
        <li
          class="tab-item"
          :class="{'tab-item-active': item.id === curId}"
          v-for="(item, index) of list"
          :key="index"
          @click="switchTab(item.id, item.status)"
        >{{item.name}}</li>
        <li
          class="tab-pannel"
          :style="{transform:'translate3d(' + 20*curId + 'vw,0,0)'}"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderTab',
  props: {
    list: [Array, Object]
  },
  data () {
    return {
      curId: 0
    }
  },
  methods: {
    switchTab (id, status) {
      if (this.curId === id) {
        return
      }
      this.curId = id
      this.$emit('switch-tab', status)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .tab{
    position:absolute;
    left:0;
    top:40px;
    width:100%;
    height:40px;
    overflow:hidden;
    background:#fff;
    .tab-list{
      position:relative;
      &::after{
        content:'';
        display:block;
        height:0;
        visibility:hidden;
        clear:both;
      }
      .tab-item{
        float:left;
        width:(100%/5);
        height:40px;
        text-align:center;
        line-height:40px;
      }
      .tab-item-active{
        font-size:$font-size-l;
        font-weight:bold;
      }
      .tab-pannel{
        position:absolute;
        bottom:4px;
        left:6vw;
        width:8vw;
        height:2px;
        background:$header-bgc;
        transition:all .4s;
      }
    }
  }
</style>
