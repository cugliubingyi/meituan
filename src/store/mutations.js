export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeHomeHeaderTop (state, homeHeaderTop) {
    state.homeHeaderTop = homeHeaderTop
  },
  changePersonalHeaderTop (state, personalHeaderTop) {
    state.personalHeaderTop = personalHeaderTop
  },
  changeInternationalTab (state, internationalTab) {
    state.internationalTab = internationalTab
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
