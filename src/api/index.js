import Vue from 'vue'
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
      errCb(res)
    }
  })
}
