// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value) // 内容有可能是数组，则需要将字符串转成数组
  } catch (error) {
    return value
  }
}

// 删除数据
export const removeItem = (key) => {
  return window.localStorage.removeItem(key)
}
