<template>
  <transition name="city">
    <div class="city">
      <city-header/>
      <city-tab @switch-tab="getCurId"/>
      <city-content :curId="curId"/>
      <router-view/>
    </div>
  </transition>
</template>

<script>
import CityHeader from './components/Header'
import CityTab from './components/Tab'
import CityContent from './components/Content'

export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab,
    CityContent
  },
  data () {
    return {
      curId: 0
    }
  },
  methods: {
    getCurId (id) {
      this.curId = id
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .city{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:1200;
  }
  .city-enter-active,
  .city-leave-active{
    transition:all 0.3s;
  }
  .city-enter,
  .city-leave-to{
    transform:translate3d(0,100%,0);
  }
</style>
