import Vue from 'vue'
export function getAllMessages (cb) {
  let url = '/chat/chat'
  Vue.http.get(url).then(res => {
    let datas = res.data.data || []
    cb(datas)
  })
}
