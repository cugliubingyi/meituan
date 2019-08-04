<template>
  <div class="tab" ref="wrapper">
    <div ref="tablistwrapper">
      <ul class="tab-list" ref="tablist">
        <li
          class="tab-item"
          :class="{'tab-item-active': item.id === curId}"
          v-for="(item, index) of tabItems"
          :key="index"
          @click="switchTab(item.id, item.name)"
        >{{item.name}}</li>
        <li
          class="tab-pannel"
          :style="{transform:'translate3d(' + 62*curId + 'px,0,0)'}"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'FindTab',
  props: {
    list: [Array, Object]
  },
  data () {
    return {
      curId: 0
    }
  },
  computed: {
    tabItems () {
      const arr = []
      const newArr = []
      for (let key in this.list) {
        arr.push(key)
      }
      arr.forEach((item, index) => {
        const tabItem = {}
        tabItem.id = index
        tabItem.name = item
        newArr.push(tabItem)
      })
      return newArr
    }
  },
  methods: {
    switchTab (id, name) {
      if (this.curId === id) {
        return
      }
      this.curId = id
      this.$emit('switch-tab', name)
    },
    initScroll () {
      this.$refs.tablistwrapper.style.width = '558px'
      this.$refs.tablist.style.width = '558px'
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      })
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 100)
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
        width:62px;
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
        left:20px;
        width:20px;
        height:2px;
        background:$header-bgc;
        transition:all .4s;
      }
    }
  }
</style>
