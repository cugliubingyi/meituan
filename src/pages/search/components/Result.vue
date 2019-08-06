<template>
  <div class="result">
    <ul class="result-list">
      <li
        class="result-item"
        v-for="(item, index) of list"
        :key="index"
        v-html="item"
        @click="$_selectItem(item)"
      ></li>
      <li class="result-item" v-show="!loading&&!list.length">没有结果</li>
    </ul>
  </div>
</template>

<script>
import {searchMixin} from 'assets/js/mixins'
import jsonp from 'assets/js/jsonp'
export default {
  name: 'SearchResult',
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      results: [],
      loading: false
    }
  },
  computed: {
    list () {
      const arr = []
      this.results.forEach(item => {
        arr.push(item[0])
      })
      return arr
    }
  },
  mixins: [searchMixin],
  watch: {
    query (query) {
      this.getResults(query)
    }
  },
  methods: {
    getResults (keyword) {
      if (!keyword) {
        this.results = []
        return
      }

      this.loading = true
      const url = 'https://suggest.taobao.com/sug'
      const params = {
        q: keyword,
        code: 'utf-8',
        area: 'c2c',
        nick: '',
        sid: null
      }

      const jsonpOptions = {
        param: 'callback',
        timeout: 10000
      }

      jsonp(url, params, jsonpOptions).then(res => {
        if (res.result) {
          this.results = res.result
          this.loading = false
          return
        }

        throw new Error('没有成功获取到数据！')
      }).catch(err => {
        if (err) {
          console.log(err)
        }
      }).then(res => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(res)
          }, 1000)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .result{
    .result-list{
      .result-item{
        border-bottom:1px solid #ddd;
        height:40px;
        line-height:40px;
        padding:0 30px;
        font-size:$icon-font-size-sm;
        color:#000;
      }
    }
  }
</style>
