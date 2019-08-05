<template>
  <div class="swiper" id="parent">
    <div class="swiper-container">
      <swiper :options="swiperOption" style="width:100%" v-if="showSwiper">
        <swiper-slide
          v-for="item of list"
          :key="item.id"
          style="width:100%"
        >
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
  #parent /deep/ .swiper-pagination-bullet-active{
    background:#fff !important;
  }
  .swiper{
    padding:10px 0;
    width:100%;
    height:100px;
    border-bottom:1px solid #eee;
    .swiper-container{
      overflow:hidden;
      width:100%;
      height:100%;
      background:#eee;
      border-radius:5px;
      .swiper-img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
