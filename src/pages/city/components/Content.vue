<template>
  <div class="content">
    <div class="inland" v-if="!curId">
      <city-list
        :letter="letter"
        :hot="hot"
        :cities="cities"
      />
      <city-alphabet
        :cities="cities"
        @change="handleLetterChange"
      />
    </div>
    <div class="international" v-if="curId">
      <city-left @switch-tab="getCurrentId"/>
      <city-right :curId="currentId"/>
    </div>
  </div>
</template>

<script>
import CityList from './List'
import CityAlphabet from './Alphabet'
import CityLeft from './Left'
import CityRight from './Right'
import axios from 'axios'

export default {
  name: 'CityContent',
  components: {
    CityList,
    CityAlphabet,
    CityLeft,
    CityRight
  },
  props: {
    curId: Number
  },
  data () {
    return {
      letter: '',
      currentId: '',
      hot: [],
      cities: {}
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hot = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    },
    getCurrentId (id) {
      this.currentId = id
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .content{
    position:fixed;
    top:80px;
    right:0;
    bottom:0;
    left:0;
    background:#eee;
    .inland{
      width:100%;
      height:100%;
    }
    .international{
      width:100%;
      height:100%;
      display:flex;
    }
  }
</style>
