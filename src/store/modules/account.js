import * as api from '../../api/index'
// import Vue from 'vue'
// import { Notification } from 'element-ui'
const state = {
  username: sessionStorage.getItem('username') || '',
  token: sessionStorage.getItem('token') || ''
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
  }
}
const getters = {
  username: state => state.username,
  token: state => state.token
}
const actions = {
  signin ({commit}, {username, password}) {
    return api.login({username, password}).then((datas) => {
      // console.log('do 1 datas=', datas)
      commit('setUsername', {username})
      commit('setToken', {token: datas.token})
      datas.test = 'test'
      return datas
    })
  },
  signout ({commit}) {
    // console.log('signout')
    return api.logout().then((datas) => {
      commit('removeUsername')
      commit('removeToken')
    })
  },
  signoutdry ({commit}) {
    commit('removeUsername')
    commit('removeToken')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
