let defaultCity = '北京'
let defaultIsBacktopVisible = false
let defaultBacktop = false

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity,
  isBacktopVisible: defaultIsBacktopVisible,
  backtop: defaultBacktop
}
