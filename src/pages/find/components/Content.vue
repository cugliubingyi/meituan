<template>
  <div class="content" ref="wrapper">
    <div>
      <div class="content-container">
        <ul class="content-list">
          <li
            class="content-item"
            v-for="(item, index) of curList"
            :key="index"
          >
            <div class="content-pic">
              <img :src="item.imgUrl" alt="" class="content-img">
            </div>
            <div class="content-info">
              <h3 class="content-title">{{item.title}}</h3>
              <div class="content-addition">
                <div class="content-user">
                  <img :src="item.photoUrl" alt="" class="content-photo">
                  <span class="content-userName">{{item.userName}}</span>
                </div>
                <i class="iconfont iconzan"></i>
              </div>
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
  name: 'FindContent',
  props: {
    curName: String,
    list: [Array, Object]
  },
  computed: {
    curList () {
      return this.list[this.curName]
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
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 100)
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
    .content-container{
      height:auto;
      .content-list{
        padding:0 10px;
        @include flex-between();
        flex-wrap:wrap;
        .content-item{
          width:49%;
          height:280px;
          border-radius:4px;
          background:#fff;
          overflow:hidden;
          margin-bottom:6px;
          .content-pic{
            width:100%;
            height:220px;
            .content-img{
              width:100%;
              height:100%;
            }
          }
          .content-info{
            padding:10px;
            .content-title{
              font-size:$font-size-l;
              color:#000;
              @include ellipsis();
              margin-bottom:10px;
            }
            .content-addition{
              @include flex-between();
              .content-user{
                .content-photo{
                  width:12px;
                  height:12px;
                  border-radius:6px;
                }
                .content-userName{
                  font-size:12px;
                }
              }
              .iconfont{
                font-size:12px;
              }
            }
          }
        }
      }
    }
  }
</style>
