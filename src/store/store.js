import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

// 告诉 vue “使用” vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'ttt1', done: true },
      { id: 2, text: 'ttt2', done: true },
      { id: 3, text: 'ttt3', done: false }
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    increment2 (state) {
      // 变更状态
      state.count++
    },
    decrement2 (state) {
      // 变更状态
      state.count--
    },
    incrementPayload (state, payload) {
      // 变更状态
      state.count += payload.amount
    },
    decrementPayload (state, payload) {
      // 变更状态
      state.count -= payload.amount
    },
    [types.SOME_MUTATION] (state, payload) {
      // 取个别名自己玩
      state.count += payload.amount
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // Getters 也可以接受其他 getters 作为第二个参数：
    donedoneTodos: (state, getters) => {
      return getters.doneTodos.length
    }

  }
})
export default store
