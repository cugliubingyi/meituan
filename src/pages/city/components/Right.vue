<template>
  <div class="right">
    <div class="right-scroll" ref="wrapper">
      <div>
        <div class="scroll-container" ref="scroll">
          <div
            class="area"
            v-for="(item, key) of hotList"
            :key="key"
          >
            <div class="title">{{key}}</div>
            <ul class="hot-list">
              <li
                class="hot-item"
                v-for="(i, idx) of item"
                :key="idx"
                :style="{'background-image':'url(' + i.imgUrl + ')'}"
                @click="handleCityClick(i.name)"
              >
                <h4 class="hot-item-name">{{i.name}}</h4>
                <div class="hot-item-desc">{{i.desc}}</div>
                <div class="hot-item-mask"></div>
              </li>
            </ul>
          </div>
          <div
            class="area"
            v-for="(item, key, index) of list"
            :key="index"
          >
            <div class="title">{{key}}</div>
            <ul class="city-list">
              <li
                class="city-item"
                v-for="(i, index) of item"
                :key="index"
                :style="{'width':`${itemWidth}px`}"
                @click="handleCityClick(i)"
              >
                <h4 class="city-item-name">{{i}}</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
import axios from 'axios'
import storage from 'assets/js/storage'
import {CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from './config'

export default {
  name: 'CityRight',
  props: {
    curId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      hotList: {},
      list: {},
      itemWidth: 0
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
    getRightInfo (id) {
      let contents = storage.get(CATEGORY_CONTENT_KEY) // 按照key从storage中取出contents
      let updateTime // 更新时间
      const curTime = new Date().getTime() // 当前时间

      if (contents && contents[id]) { // 如果从storage中取到的值存在
        updateTime = contents[id].updateTime || 0
        if (curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL) { // localstorage
          this.getRightInfoByLocalStorage(contents[id])
        } else { // HTTP
          this.getRightInfoByHTTP(id).then(() => {
            this.updateLocalStorage(contents, id, curTime)
          })
        }
      } else { // HTTP
        this.getRightInfoByHTTP(id).then(() => {
          this.updateLocalStorage(contents, id, curTime)
        })
      }
    },
    getRightInfoByLocalStorage (content) {
      this.hotList = content.hotList
      this.list = content.list
    },
    getRightInfoByHTTP (id) {
      return axios.get(`/api/${id}.json`).then(this.getRightInfoSuccByHTTP)
    },
    getRightInfoSuccByHTTP (res) {
      return new Promise(resolve => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          if (data.hotList) {
            this.hotList = data.hotList
            resolve()
          } else {
            this.hotList = {}
            resolve()
          }
          if (data.list) {
            this.list = data.list
            resolve()
          } else {
            this.list = {}
            resolve()
          }
        }
      })
    },
    updateLocalStorage (contents, id, curTime) {
      contents = contents || {}
      contents[id] = {}
      contents[id].hotList = this.hotList
      contents[id].list = this.list
      contents[id].updateTime = curTime
      storage.set(CATEGORY_CONTENT_KEY, contents)
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/home')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    curId (id) {
      this.getRightInfo(id)
      if (this.scroll) {
        this.scroll.scrollTo(0, 0, 0)
      }
    }
  },
  mounted () {
    this.getRightInfo('tj')
    setTimeout(() => {
      this.initScroll()
    }, 100)
    this.itemWidth = (document.documentElement.clientWidth - 120) / 3
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .right{
    flex:1;
    height:100%;
    background:#fff;
    .right-scroll{
      overflow:hidden;
      position:absolute;
      top:0;
      left:80px;
      right:0;
      bottom:0;
      background:#fff;
      .scroll-container{
        padding:10px;
        .area{
          margin-bottom:10px;
          .title{
            color:#666;
            font-size:$font-size-base;
            margin-bottom:10px;
          }
          .hot-list{
            @include flex-between();
            flex-wrap:wrap;
            .hot-item{
              position:relative;
              width:48%;
              height:80px;
              background-size:cover;
              background-repeat:no-repeat;
              border-radius:5px;
              overflow:hidden;
              margin-bottom:10px;
              @include flex-center(column);
              .hot-item-name{
                color:#fff;
                font-size:$font-size-l;
                margin-bottom:6px;
                z-index:10000;
              }
              .hot-item-desc{
                color:#fff;
                font-size:$font-size-base;
                z-index:10000;
              }
              .hot-item-mask{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,0.5);
                z-index:9999;
              }
            }
          }
          .city-list{
            overflow:hidden;
            .city-item{
              float:left;
              height:40px;
              border-radius:5px;
              border:1px solid #eee;
              background:#fff;
              overflow:hidden;
              margin-bottom:10px;
              margin-right:10px;
              @include flex-center();
              text-align:center;
              .city-item-name{
                color:#000;
                font-size:$font-size-l;
              }
              &:nth-of-type(3n){
                margin-right:0;
              }
            }
          }
        }
      }
    }
  }
</style>
