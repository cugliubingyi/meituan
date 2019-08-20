<template>
  <div class="content" ref="wrapper">
    <div>
      <div class="content-container">
        <ul class="content-list">
          <li
            class="content-item"
            v-for="(item, index) of contentList"
            :key="index"
          >
            <div class="content-top">
              <div class="content-head">
                <i class="iconfont" :class="item.icontype"></i>
                <span class="content-title">{{item.title}}</span>
              </div>
              <div class="content-status">{{item.status}}</div>
            </div>
            <div class="content-bottom">
              <div class="content-pic">
                <img class="content-img" :src="item.imgUrl" alt="">
              </div>
              <ul class="content-info">
                <li
                  class="content-info-item"
                  v-for="(i, key, index) of item.info"
                  :key="index"
                >
                  {{key}}:{{i}}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'OrderContent',
  props: {
    curStatus: String,
    list: [Array, Object]
  },
  computed: {
    contentList () {
      if (this.curStatus === '全部') {
        return this.list
      } else {
        return this.list.filter(item => {
          return item.status === this.curStatus
        })
      }
    }
  },
  methods: {
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: 3
        })
      })
    }
  },
  watch: {
    curStatus () {
      this.scroll.scrollTo(0, 0, 0)
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 100)
  },
  deactivated () {
    this.scroll.scrollTo(0, 0, 0)
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .content{
    overflow:hidden;
    position:absolute;
    top:80px;
    left:0;
    right:0;
    bottom:$tabbar-height;
    background:#eee;
    .content-container{
      height:auto;
      .content-list{
        padding:6px 10px;
        .content-item{
          width:100%;
          height:120px;
          background:#fff;
          border-radius:5px;
          padding:0 10px;
          overflow:hidden;
          margin-bottom:6px;
          .content-top{
            width:100%;
            height:30px;
            border-bottom:1px solid #eee;
            @include flex-between();
            .content-head{
              display:flex;
              align-items:center;
              .iconfont{
                @include flex-center();
                font-size:12px;
                width:18px;
                height:18px;
                border-radius:9px;
                color:#fff;
                &.iconic_restaurant_px,
                &.iconKTV,
                &.iconliren{
                  background:#FD8000;
                }
                &.iconmaoyandianying,
                &.iconxiaochikuaican,
                &.iconhuochepiao{
                  background:#FE4F18;
                }
                &.iconjiudianzhusu_icon,
                &.icondache,
                &.iconhongbao{
                  background:#965C3B;
                }
                &.iconxiuxianyule,
                &.iconzhoubianyou,
                &.iconyaoqingyouli{
                  background:#00BF94;
                }
                &.iconwaimai1,
                &.iconjingdian,
                &.icongongyi{
                  background:#FFC006;
                }
              }
              .content-title{
                font-size:$font-size-l;
                font-weight:bold;
                color:#000;
                margin-left:6px;
                @include ellipsis();
                width:260px;
              }
            }
            .content-status{
              font-size:12px;
            }
          }
          .content-bottom{
            padding:10px 0;
            display:flex;
            .content-pic{
              width:40px;
              height:40px;
              border-radius:5px;
              overflow:hidden;
              .content-img{
                width:100%;
                height:100%;
              }
            }
            .content-info{
              margin-left:10px;
              .content-info-item{
                margin-bottom:4px;
              }
            }
          }
        }
        .content-item:last-of-type{
          margin-bottom:0;
        }
      }
    }
  }
</style>
