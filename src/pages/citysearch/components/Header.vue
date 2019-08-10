<template>
  <div class="header">
    <div class="header-search-wrapper">
      <i class="iconfont iconfangdajing"></i>
      <input
        class="header-search-box"
        type="text"
        title="搜索框"
        placeholder="城市名/拼音"
        ref="input"
        v-model="query"
      >
      <i
        class="iconfont iconcuo"
        v-show="query"
        @click="reset"
      ></i>
    </div>
    <div @click="goBack" class="header-cancel">取消</div>
  </div>
</template>

<script>
import {debounce} from 'assets/js/util'

export default {
  name: 'CitySearchHeader',
  data () {
    return {
      query: ''
    }
  },
  watch: {
    query: debounce(function () {
      this.$emit('query', this.query)
    })
  },
  methods: {
    focus () {
      this.$refs.input && this.$refs.input.focus()
    },
    clear () {
      this.query = ''
    },
    reset () {
      this.clear()
      this.focus()
    },
    goBack () {
      this.$router.back()
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    background:$header-bgc;
    padding:0 20px;
    display:flex;
    align-items:center;
    .header-search-wrapper{
      display: flex;
      align-items: center;
      padding: 0 7px;
      flex:1;
      height:30px;
      border-radius:12px;
      background:#fff;
      margin-right:10px;
      .header-search-box{
        flex: 1;
        background: none;
        border: none;
        margin: 0 12px;
        color: #999;
        font-size:$font-size-l;
        line-height: 1.5;
      }
      .iconfont{
        color: #999;
        font-size: $icon-font-size-sm;
        font-weight: bold;
        &.iconcuo{
          width:16px;
          height:16px;
          border-radius:8px;
          background:#999;
          color:#fff;
          font-size:$font-size-base;
          font-weight:bold;
          @include flex-center();
        }
      }
    }
    .header-cancel{
      font-size:$font-size-l;
      color:#999;
    }
  }
</style>
