//  通用请求处理
import Vue from 'vue'
import { Notification } from 'element-ui'
export default {
  request (method, uri, params = null) {
    if (!method) {
      console.error('API function call requires method argument')
      return
    }

    if (!uri) {
      console.error('API function call requires uri argument')
      return
    }

    return new Promise((resolve, reject) => {
      return Vue.http[method](uri, params).then(res => {
        let datas = res.data.data || []
        if (res.data.result === 'success') {
          resolve(datas)
        } else {
          Notification.error({
            title: '提示',
            message: res.data.messages && res.data.messages.join(',') || '登录失败请稍后再试！'
          })
          reject(res)
        }
      })
    })
  }
}
