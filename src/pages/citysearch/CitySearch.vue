<template>
  <div class="citysearch">
    <city-search-header @query="getQuery"/>
    <city-search-result :query="query"/>
  </div>
</template>

<script>
import CitySearchHeader from './components/Header'
import CitySearchResult from './components/Result'

export default {
  name: 'CitySearch',
  components: {
    CitySearchHeader,
    CitySearchResult
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    getQuery (query) {
      this.query = query
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .citysearch{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1200;
    background:#fff;
  }
</style>
