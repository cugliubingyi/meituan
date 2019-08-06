const storage = window.localStorage // 取出window对象上的localStorage

export default {
  set (key, val) { // 将值存入对应key
    if (val === undefined) { // 如果值为undefined，直接返回
      return
    }
    storage.setItem(key, serialize(val)) // 调用storage下的setItem方法，将值转成字符串存入key
  },
  get (key, def) { // 按照key，获取值
    const val = deserialize(storage.getItem(key)) // 调用storage下的getItem方法，将值转成对象取出来
    return val === undefined ? def : val // 如果取出的值为undefined，返回默认值，否则返回取到的值
  },
  remove (key) { // 按照key，移除值
    storage.removeItem(key)
  },
  clear () { // 清空storage
    storage.clear()
  }
}

function serialize (val) { // 将一个对象转成JSON字符串格式
  return JSON.stringify(val)
}

function deserialize (val) { // 将一个JSON字符串转换成对象
  if (typeof val !== 'string') { // 如果传入值不是字符串
    return undefined // 返回undefined
  }
  try {
    return JSON.parse(val) // 将JSON字符串转成字符串返回
  } catch (e) {
    return val || undefined // 如果报错，返回传入值或undefined
  }
}
