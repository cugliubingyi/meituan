import storage from 'assets/js/storage'
import {SEARCH_HISTORY_KEYWORD_KEY} from 'pages/search/components/config'

export const searchMixin = {
  methods: {
    $_selectItem (keyword) {
      let keywords = storage.get(SEARCH_HISTORY_KEYWORD_KEY, [])// 从storage中获取keywords

      if (keywords.length !== 0) {
        keywords = keywords.filter(val => val !== keyword)// 过滤掉keywords数组中值为keyword的项
      }

      keywords.unshift(keyword)// 将值为keyword的项移到数组开头

      storage.set(SEARCH_HISTORY_KEYWORD_KEY, keywords)// 将新的keywords存入storage

      location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q=${keyword}`
    }
  }
}
