import Vue from 'vue'
import { Notification } from 'element-ui'
export function login ({username, password}) {
  let url = 'login.do'
  const params = {
    username,
    password
  }
  return new Promise((resolve, reject) => {
    return Vue.http.post(url, params).then(res => {
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
