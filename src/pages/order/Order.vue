<template>
  <div class="order">
    <order-header/>
    <order-tab
      :list="tabList"
      @switch-tab="getCurStatus"
    />
    <order-content
      :curStatus="curStatus"
      :list="orderList"
    />
    <c-tabbar/>
  </div>
</template>

<script>
import CTabbar from 'common/tabbar'
import OrderHeader from './components/Header'
import OrderTab from './components/Tab'
import OrderContent from './components/Content'
import axios from 'axios'

export default {
  name: 'Order',
  components: {
    CTabbar,
    OrderHeader,
    OrderTab,
    OrderContent
  },
  data () {
    return {
      tabList: [],
      orderList: [],
      curStatus: '全部'
    }
  },
  methods: {
    getOrderInfo () {
      axios.get('/api/order.json').then(this.getOrderInfoSucc)
    },
    getOrderInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.tabList = data.tabList
        this.orderList = data.orderList
      }
    },
    getCurStatus (status) {
      this.curStatus = status
    }
  },
  mounted () {
    this.getOrderInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .order{
    overflow:hidden;
    width:100%;
    height:100%;
    background:$bgc-theme;
  }
</style>
