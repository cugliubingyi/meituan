<template>
  <div>
    <find-header/>
    <find-tab
      :list="findList"
      @switch-tab="getCurName"
    />
    <find-content
      :curName="curName"
      :list="findList"
    />
    <c-tabbar/>
  </div>
</template>

<script>
import CTabbar from 'common/tabbar'
import FindHeader from './components/Header'
import FindTab from './components/Tab'
import FindContent from './components/Content'
import axios from 'axios'

export default {
  name: 'Find',
  components: {
    CTabbar,
    FindHeader,
    FindTab,
    FindContent
  },
  data () {
    return {
      findList: [],
      curName: '推荐'
    }
  },
  methods: {
    getFindInfo () {
      axios.get('/api/find.json').then(this.getFindInfoSucc)
    },
    getFindInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.findList = data.findList
      }
    },
    getCurName (name) {
      this.curName = name
    }
  },
  mounted () {
    this.getFindInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
