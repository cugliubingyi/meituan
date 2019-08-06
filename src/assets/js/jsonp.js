import jsonp from 'jsonp'

// {
//   page: 1,
//   psize: 20
// }
// page=1&psize=20

const parseParam = param => { // 转译数据拼接到url地址
  let params = []

  for (const key in param) {
    params.push([key, param[key]]) // [[page,1],[psize,20]]
  }

  return params.map(value => value.join('=')).join('&')
}

export default (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data)

  return new Promise((resolve, reject) => { // 返回一个Promise对象
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
