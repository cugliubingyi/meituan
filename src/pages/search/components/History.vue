<template>
  <div class="history">
    <h4 class="history-title">历史搜索</h4>
    <i class="iconfont iconlajitong" @click="clear"></i>
    <ul class="history-list">
      <li
        class="history-item"
        v-for="(item, index) in list"
        :key="index"
        @click="$_selectItem(item)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
import storage from 'assets/js/storage'
import {SEARCH_HISTORY_KEYWORD_KEY} from './config'
import {searchMixin} from 'assets/js/mixins'
export default {
  name: 'SearchHistory',
  data () {
    return {
      list: []
    }
  },
  mixins: [searchMixin],
  created () {
    this.getKeyword()
  },
  methods: {
    getKeyword () {
      this.list = storage.get(SEARCH_HISTORY_KEYWORD_KEY, [])
    },
    clear () {
      storage.remove(SEARCH_HISTORY_KEYWORD_KEY)
      this.getKeyword()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .history{
    padding-top:20px;
    position:relative;
    .iconlajitong{
      position:absolute;
      right:0;
      top:20px;
      color:#999;
      font-size:$font-size-l;
    }
    .history-title{
      color:#999;
      font-size:$font-size-l;
      margin-bottom:10px;
    }
    .history-list{
      display:flex;
      flex-wrap:wrap;
      .history-item{
        padding:10px;
        color:#000;
        font-size:$font-size-l;
        background:#eee;
        border-radius:5px;
        margin-right:10px;
        margin-bottom:10px;
      }
    }
  }
</style>
