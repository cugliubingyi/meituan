<template>
  <div class="result">
    <div class="result-scroll" ref="wrapper">
      <div>
        <div class="scroll-container" ref="scroll">
          <ul class="result-list">
            <li
              class="result-item"
              v-for="item of list"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >{{item.name}}</li>
            <li class="result-item" v-show="hasNoData">
              抱歉，未找到相关位置，可尝试修改后重试
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
import axios from 'axios'
import {debounce} from 'assets/js/util'

export default {
  name: 'CitySearchResult',
  props: {
    query: String
  },
  data () {
    return {
      cities: [],
      list: [],
      hasNoData: false
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
    getResultInfo () {
      axios.get('/api/city.json').then(this.getResultInfoSucc)
    },
    getResultInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
      }
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/home')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    query: debounce(function () {
      if (!this.query) {
        this.list = []
        this.hasNoData = true
        return
      }
      const result = []
      for (let i in this.cities) {
        this.cities[i].forEach((value) => {
          if (value.spell.indexOf(this.query) > -1 || value.name.indexOf(this.query) > -1) {
            result.push(value)
          }
        })
      }
      this.list = result
      this.hasNoData = !this.list.length
    })
  },
  mounted () {
    this.getResultInfo()
    setTimeout(() => {
      this.initScroll()
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .result{
    position:fixed;
    top:50px;
    left:0;
    bottom:0;
    right:0;
    .result-scroll {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      padding-left: 20px;
      .scroll-container {
        height:auto;
        .result-list{
          .result-item{
            width:100%;
            height:40px;
            line-height:40px;
            font-size:$font-size-l;
            font-weight:bold;
            color:#000;
            border-bottom:1px solid #ddd;
          }
        }
      }
    }
  }
</style>
