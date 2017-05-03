import Vue from 'vue'
import _ from 'lodash'
import * as types from './mutation-types'
export default {
  // 设置左侧菜单树
  [types.MENU_TREE] (state, {menu}) {
    Vue.set(state, 'menuTree', menu)
  },
  // 设置路由配置源
  [types.MENU_ORIGIN] (state, {menu}) {
    Vue.set(state, 'menuOrigin', menu)
  },
  // 设置当前面包屑全路径信息
  setCurrentBreadcrumbKeypath (state, {keyPath}) {
    state.currentBreadcrumbKeypath = _.uniq(keyPath)
  },
  // 通过路由路径设置当前面包屑全路径信息
  routeSetCurrentBreadcrumbKeypath (state, {routePath}) {
    let path = routePath
    let paths = []
    let keyPath = []
    if (path) {
      path = path.replace(/^\//, '')
      paths = path.split('/')
    }
    let tmpPaths = []
    for (let i = 0, len = paths.length; i < len; i++) {
      let item = paths[i]
      tmpPaths.push(item)
      keyPath.push('/' + tmpPaths.join('/'))
    }
    state.currentBreadcrumbKeypath = _.uniq(keyPath)
  }
  // TOGGLE_LOADING (state) {
  //   state.callingAPI = !state.callingAPI
  // },
  // TOGGLE_SEARCHING (state) {
  //   state.searching = (state.searching === '') ? 'loading' : ''
  // },
  // SET_USER (state, user) {
  //   state.user = user
  // },
  // SET_TOKEN (state, token) {
  //   state.token = token
  // }
}
