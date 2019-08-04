export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  showBacktop (state) {
    state.isBacktopVisible = true
  },
  hideBacktop (state) {
    state.isBacktopVisible = false
  },
  back (state) {
    state.backtop = true
  },
  backEnd (state) {
    state.backtop = false
  }
}
