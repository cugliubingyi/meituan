<template>
  <div class="left">
    <div class="left-scroll" ref="wrapper">
      <div>
        <div class="scroll-container" ref="scroll">
          <ul class="tab">
            <li
              class="tab-item"
              :class="{'tab-item-active': item.id === curId}"
              v-for="(item, index) in items"
              :key="index"
              @click="switchTab(item.id)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import axios from 'axios'

export default {
  name: 'CityLeft',
  data () {
    return {
      items: [],
      curId: ''
    }
  },
  methods: {
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: 3
        })
      })
    },
    getLeftInfo () {
      axios.get('/api/city.json').then(this.getLeftInfoSucc)
    },
    getLeftInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.items = data.categoryNames
      }
    },
    switchTab (id) {
      if (this.curId === id) {
        return
      }
      this.curId = id
      this.$emit('switch-tab', id)
    }
  },
  mounted () {
    this.getLeftInfo()
    this.switchTab('tj')
    setTimeout(() => {
      this.initScroll()
    }, 100)
    this.$refs.scroll.style.height = (document.documentElement.clientHeight - 79) + 'px'
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .left{
    width:80px;
    height:100%;
    background:#eee;
    .left-scroll{
      overflow:hidden;
      position:absolute;
      top:0;
      left:0;
      width:80px;
      height:100%;
      background:#eee;
      .scroll-container{
        .tab {
          width: 80px;
          &-item {
            height: 46px;
            background-color: #eee;
            color: #666;
            font-size: $font-size-l;
            font-weight: normal;
            text-align: center;
            line-height: 46px;
            @include ellipsis();
          }
          &-item-active {
            background: #fff;
            font-weight: bold;
            color: #000;
          }
        }
      }
    }
  }
</style>
