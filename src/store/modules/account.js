import * as api from '../../api/index'
import routerConfig from '../../router/config' // 模拟全部权限用
// import Vue from 'vue'
// import { Notification } from 'element-ui'
const state = {
  username: sessionStorage.getItem('username') || '',
  token: sessionStorage.getItem('token') || '',
  permission: sessionStorage.getItem('permission') && sessionStorage.getItem('permission').split(',') || []
}
const mutations = {
  setUsername: (state, {username}) => {
    // console.log('do setUsername')
    state.username = username
    sessionStorage.setItem('username', username)
  },
  removeUsername: (state) => {
    // console.log('do setUsername')
    state.username = ''
    sessionStorage.removeItem('username')
  },
  setToken: (state, {token}) => {
    // console.log('do setUsername')
    state.token = token
    sessionStorage.setItem('token', token)
  },
  removeToken: (state) => {
    // console.log('do setUsername')
    state.token = ''
    sessionStorage.removeItem('token')
  },
  setPermission (state, {permission}) {
    state.permission = permission
    sessionStorage.setItem('permission', permission)
  },
  removePermission: (state) => {
    state.permission = []
    sessionStorage.removeItem('permission')
  }
}
const getters = {
  username: state => state.username,
  token: state => state.token
}
const actions = {
  // signin ({commit}, {username, password}) {
  //   return api.login({username, password}).then((datas) => {
  //     // console.log('do 1 datas=', datas)
  //     commit('setUsername', {username})
  //     commit('setToken', {token: datas.token})
  //     datas.test = 'test'
  //     return datas
  //   })
  // },
  // 与上面 signin方法等价
  async signin ({commit}, {username, password}) {
    let datas = await api.login({username, password})
    // 模拟权限开始 =====
    if (!datas.permission) {
      // 模拟全部权限
      datas.permission = ['/']
      routerConfig.forEach(item => {
        datas.permission.push(`/${item.path}`)
      })
      // // 模拟部分权限
      // datas.permission = [
      //   '/',
      //   '/submenu-test',
      //   '/submenu-test/m1',
      //   // '/submenu-test/m1/m1-1',
      //   '/submenu-test/m1/m1-1/m1-1-2'
      // ]
    }
    // 模拟权限结束 =====
    // console.log('do 1 datas=', datas)
    commit('setUsername', {username})
    commit('setToken', {token: datas.token})
    commit('setPermission', {permission: datas.permission})
    datas.test = 'test'
    return datas
  },
  signout ({commit}) {
    // console.log('signout')
    return api.logout().then((datas) => {
      commit('removeUsername')
      commit('removeToken')
      commit('removePermission')
    })
  },
  signoutdry ({commit}) {
    commit('removeUsername')
    commit('removeToken')
    commit('removePermission')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
