<template>
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <ul class="hot-list">
      <li
        class="hot-item"
        v-for="(item, index) in list"
        :key="index"
        @click="$_selectItem(item)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {searchMixin} from 'assets/js/mixins'
export default {
  name: 'SearchHot',
  props: {
    list: Array
  },
  mixins: [searchMixin]
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .hot{
    padding-top:20px;
    .hot-title{
      color:#999;
      font-size:$font-size-l;
      margin-bottom:10px;
    }
    .hot-list{
      display:flex;
      flex-wrap:wrap;
      .hot-item{
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
