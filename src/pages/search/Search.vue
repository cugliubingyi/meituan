<template>
  <div class="search">
    <search-header
      :placeholder="hotList[0]"
      @query="getQuery"
    />
    <div class="search-scroll" ref="wrapper">
      <div>
        <div class="scroll-container" ref="scroll">
          <search-hot
            :list="hotList"
            v-show="!query"
          />
          <search-history v-show="!query"/>
          <search-result :query="query" v-show="query"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchHot from './components/Hot'
import SearchHistory from './components/History'
import SearchResult from './components/Result'
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchHot,
    SearchHistory,
    SearchResult
  },
  data () {
    return {
      query: '',
      hotList: []
    }
  },
  methods: {
    getQuery (query) {
      this.query = query
    },
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: 3
        })
      })
    },
    getSearchInfo () {
      axios.get('/api/search.json').then(this.getSearchInfoSucc)
    },
    getSearchInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotList = data.hotList
      }
    }
  },
  mounted () {
    this.getSearchInfo()
    setTimeout(() => {
      this.initScroll()
    }, 100)
    this.$refs.scroll.style.height = (document.documentElement.clientHeight - 39) + 'px'
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .search{
    overflow:hidden;
    width:100%;
    height:100%;
    background:$bgc-theme;
    .search-scroll{
      overflow:hidden;
      position:absolute;
      top:40px;
      left:0;
      right:0;
      bottom:0;
      background:#fff;
      padding:0 10px;
      .scroll-container{
      }
    }
  }
</style>
