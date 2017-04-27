import Vue from 'vue'
import * as types from './mutation-types'
export default {
  [types.MENU_TREE] (state, {menu}) {
    Vue.set(state, 'menuTree', menu)
  },
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}
