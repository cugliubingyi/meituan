<template>
  <div class="home">
    <home-header :class="{'header-fixed':isHeaderFixed}" :style="{'top':`${headerTop}px`}"/>
    <div class="home-scroll" ref="wrapper">
      <div>
        <div class="scroll-container">
          <home-icons :list="iconList"/>
          <home-swiper :list="swiperList"/>
          <home-recommend :list="recommendList"/>
        </div>
      </div>
    </div>
    <c-tabbar/>
  </div>
</template>

<script>
import CTabbar from 'common/tabbar'
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    CTabbar,
    HomeHeader,
    HomeIcons,
    HomeSwiper,
    HomeRecommend
  },
  computed: {
    ...mapState(['backtop', 'city'])
  },
  data () {
    return {
      isHeaderFixed: true,
      headerTop: 0,
      lastCity: '',
      iconList: [],
      swiperList: [],
      recommendList: []
    }
  },
  methods: {
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: 3
        })

        this.scroll.on('scroll', (pos) => {
          if (pos.y < 0 && -pos.y > 300) {
            this.showBacktop()
          } else {
            this.hideBacktop()
          }
          this.headerTop = Math.abs(pos.y)
          this.isHeaderFixed = (pos.y <= 0)
        })
      })
    },
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.iconList = data.iconList
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
      }
    },
    ...mapMutations(['showBacktop', 'hideBacktop', 'backEnd'])
  },
  watch: {
    backtop (backtop) {
      if (backtop) {
        this.scroll.scrollTo(0, 0, 500)
        this.backEnd()
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
    setTimeout(() => {
      this.initScroll()
    }, 100)
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home{
    .home-scroll{
      overflow:hidden;
      position:absolute;
      top:$navbar-height;
      left:0;
      right:0;
      bottom:$tabbar-height;
      .scroll-container{
        height:auto;
      }
    }
  }
</style>
