import * as api from '../api'
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
  login ({commit}, {username, password}) {
    api.login({username, password}, datas => {
      commit('setUsername', {username, password})
    }, res => {
      console.log('err', res)
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}