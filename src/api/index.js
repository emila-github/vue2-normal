import Vue from 'vue'
import { Notification } from 'element-ui'
export function login ({username, password}, cb, errCb = () => {}) {
  let url = 'login.do'
  const params = {
    username,
    password
  }
  Vue.http.post(url, params).then(res => {
    let datas = res.data.data || []
    if (res.data.result === 'success') {
      cb(datas)
    } else {
      Notification.error({
        title: '提示',
        message: '登录失败请稍后再试！'
      })
      errCb(res)
    }
  })
}
