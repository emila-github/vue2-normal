// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import { apiRoot } from './api/config'
// Import Helpers for filters
import filters from './filters/index'

import moment from 'moment'
Object.defineProperty(Vue.prototype, '$moment', { value: moment })

// 引入axios
import AxiosPlugin from './plugin/axios.js'
Vue.use(AxiosPlugin, '$axios')

// Import Install and register helper items
// Vue.filter('datetime', filters.datetime)
// Vue.filter('dateonly', filters.dateonly)
for (let filter in filters) {
  Vue.filter(filter, filters[filter])
}

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

let lastNotify = ''
app.$on('notify', (arg) => {
  if (arg.title !== lastNotify) {
    app.$notify.error(arg)
  }

  lastNotify = arg.title

  setTimeout(() => {
    lastNotify = ''
  }, 1000)
})
// 配置api根路径
Vue.http.options.root = apiRoot
// 拦截异步请求,在请求头加token
Vue.http.interceptors.push((request, next) => {
  // console.log('request=', request)
  if (request.url === 'signin') {
    next()
  } else {
    // console.log('interceptors store=', store)
    request.headers.set('Authorization', `JWT ${store.state.account.token}`)
    next((response) => {
      // TODO:验证
      // console.log('interceptors response=', response)
      if (response.status === 200) {
        if (response.data.result !== 'success') {
          app.$emit('notify', {
            title: `${request.url}: 请求失败`,
            message: response &&
              response.data &&
              response.data.messages &&
              response.data.messages.join(' ') ||
              '未知错误'
          })
        }
      } else if (response.status === 401) {
        app.$emit('notify', {
          title: '认证已失效',
          message: '请重新登录'
        })
        store.dispatch('signoutdry').then(() => {
          app.$router.push({ path: '/signin' })
        })
      } else {
        app.$emit('notify', {
          title: `${request.url}: 服务错误`,
          message: `${response.status} ${response.statusText}`
        })
      }
      return response
    })
  }
})
