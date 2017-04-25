import Vue from 'vue'
export function getAllMessages (cb) {
  let url = '/chat/chat'
  Vue.http.get(url).then(res => {
    let datas = res.data.data || []
    cb(datas)
  })
}
export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = 'm_' + timestamp
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan'
  }
  let url = '/chat/add'
  Vue.http.post(url, message).then(res => {
    let datas = res.data.data || []
    cb(datas)
  })
}
