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
    console.log('setCurrentBreadcrumbKeypath=', state)
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
