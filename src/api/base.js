//  通用请求处理
import Vue from 'vue'
import { Notification } from 'element-ui'
import { apiRoot } from './config'
export function request (method, uri, params = null) {
  if (!method) {
    console.error('API function call requires method argument')
    return
  }

  if (!uri) {
    console.error('API function call requires uri argument')
    return
  }

  if (!apiRoot) {
    console.error('API ROOT config error')
    return
  }
  let url = apiRoot + uri
  return new Promise((resolve, reject) => {
    return Vue.http[method](url, params).then(res => {
      let datas = res.data.data || []
      if (res.data.result === 'success') {
        resolve(datas)
      } else {
        Notification.error({
          title: '提示',
          message: res.data.messages && res.data.messages.join(',') || '出错了，请稍后再试！'
        })
        reject(res)
      }
    }, res => {
      reject(res)
    })
  })
}

