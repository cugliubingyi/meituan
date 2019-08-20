let defaultCity = '北京'
let defaultIsBacktopVisible = false
let defaultBacktop = false
let defaultHomeHeaderTop = 0
let defaultPersonalHeaderTop = 0
let defaultInternationalTab = 'tj'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity,
  isBacktopVisible: defaultIsBacktopVisible,
  backtop: defaultBacktop,
  homeHeaderTop: defaultHomeHeaderTop,
  personalHeaderTop: defaultPersonalHeaderTop,
  internationalTab: defaultInternationalTab
}
