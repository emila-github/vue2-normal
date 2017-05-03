import * as api from '../../api/'
// import Vue from 'vue'
// import { Notification } from 'element-ui'
const state = {
  username: sessionStorage.getItem('username') || ''
}
const mutations = {
  setUsername: (state, {username}) => {
    console.log('do setUsername')
    state.username = username
    sessionStorage.setItem('username', username)
  }
}
const getters = {
  username: state => state.username
}
const actions = {
  signin ({commit}, {username, password}) {
    return api.login({username, password}).then(() => {
      console.log('do 1')
      commit('setUsername', {username})
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
