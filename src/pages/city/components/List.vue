<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div
            class="item"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            <div class="item-inner">
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    letter: String,
    cities: [Array, Object],
    hot: Array
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 100)
  },
  methods: {
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: 3
        })
      })
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/home')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  activated () {
    if (this.scroll) {
      this.scroll.scrollTo(0, 0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .list{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 20px;
    bottom: 0;
    .title {
      line-height: 27px;
      background: #eee;
      padding-left: 10px;
      color: #666;
      font-size: $font-size-l;
    }
    .button-list {
      overflow: hidden;
      padding: 5px;
      .button-wrapper {
        float: left;
        width: 33.33%;
        .button {
          margin: 5px;
          padding: 10px 0;
          text-align: center;
          border: 1px solid #ccc;
          border-radius: 3px;
          background:#fff;
          font-size: $font-size-l;
          color:#000;
        }
      }
    }
    .item-list {
      .item {
        line-height: 38px;
        padding-left: 10px;
        font-size: $font-size-l;
        color:#000;
        background:#fff;
        .item-inner{
          border-bottom:1px solid #ddd;
        }
      }
    }
  }
</style>
