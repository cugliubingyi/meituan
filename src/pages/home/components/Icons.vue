<template>
  <div class="icons">
    <div class="icons-container">
      <swiper :options="swiperOption" style="width:100%">
        <swiper-slide v-for="(page, index) of pages" :key="index" style="width:100%">
          <div
            class="icons-item"
            v-for="item of page"
            :key="item.id"
          >
            <i class="iconfont" :class="item.iconName"></i>
            <span class="icons-desc">{{item.desc}}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 15)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .icons{
    width:100%;
    height:220px;
    background:linear-gradient(to bottom,$header-bgc,$header-bgc 45%,#fff 55%,#fff 100%);
    @include flex-center();
    .icons-container{
      width:94%;
      height:210px;
      background:#fff;
      border-radius:10px;
      overflow:hidden;
      .icons-item{
        float:left;
        width:20%;
        height:70px;
        @include flex-center(column);
        .iconfont{
          font-size:$icon-font-size;
          margin-bottom:4px;
          width:40px;
          height:40px;
          border-radius:10px;
          color:#fff;
          @include flex-center();
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
        .icons-desc{
          color:#686868;
          @include ellipsis();
        }
      }
    }
  }
</style>
