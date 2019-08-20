<template>
  <div class="personal">
    <div class="overhead" :style="{'top':`${personalHeaderTop}px`}">
      <div class="header-overhead"></div>
    </div>
    <personal-header
      :username="usermsg.username"
      v-if="isHeaderShow"
    />
    <div class="personal-scroll" ref="wrapper">
      <div>
        <div class="scroll-container">
          <div class="content-top">
            <personal-user :usermsg="usermsg"/>
            <personal-pannel/>
          </div>
          <div class="content-bottom">
            <personal-wallet :usermsg="usermsg"/>
            <personal-swiper :list="swiperList"/>
            <personal-tool :list="toolList"/>
          </div>
        </div>
      </div>
    </div>
    <c-tabbar/>
  </div>
</template>

<script>
import CTabbar from 'common/tabbar'
import Bscroll from 'better-scroll'
import PersonalHeader from './components/Header'
import PersonalUser from './components/User'
import PersonalPannel from './components/Pannel'
import PersonalWallet from './components/Wallet'
import PersonalSwiper from './components/Swiper'
import PersonalTool from './components/Tool'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'Personal',
  components: {
    CTabbar,
    PersonalHeader,
    PersonalUser,
    PersonalPannel,
    PersonalWallet,
    PersonalSwiper,
    PersonalTool
  },
  data () {
    return {
      usermsg: {},
      swiperList: [],
      toolList: []
    }
  },
  computed: {
    isHeaderShow () {
      return this.personalHeaderTop < 0
    },
    ...mapState(['personalHeaderTop'])
  },
  methods: {
    getPersonalInfo () {
      axios.get('/api/personal.json').then(this.getPersonalInfoSucc)
    },
    getPersonalInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.usermsg = data.usermsg
        this.swiperList = data.swiperList
        this.toolList = data.toolList
      }
    },
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: 3
        })

        this.scroll.on('scroll', (pos) => {
          this.changePersonalHeaderTop(pos.y)
        })
      })
    },
    ...mapMutations(['changePersonalHeaderTop'])
  },
  mounted () {
    this.getPersonalInfo()
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

  .personal{
    overflow:hidden;
    width:100%;
    height:100%;
    background:$bgc-theme;
    .overhead{
      position:absolute;
      left:0;
      width:100%;
      height:0;
      .header-overhead{
        position:absolute;
        left:0;
        bottom:100%;
        margin-bottom:-10px;
        width:100%;
        height:500px;
        background:$header-bgc;
        z-index:$navbar-z-index;
      }
    }
    .personal-scroll{
      overflow:hidden;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:$tabbar-height;
      background:#fff;
      .scroll-container{
        height:auto;
        .content-top{
          width:100%;
          height:220px;
          padding:0 20px;
          background:$header-bgc;
          margin-bottom:-20px;
        }
        .content-bottom{
          padding:20px;
          border-top-left-radius:20px;
          border-top-right-radius:20px;
          background:#fff;
        }
      }
    }
  }
</style>
