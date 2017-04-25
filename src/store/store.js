import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'
import moduleA from './moduleA/index'
import account from './modules/account'

// 告诉 vue “使用” vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    moduleA,
    account
  },
  state: {
    // username: sessionStorage.getItem('username') || '',
    count: 0,
    todos: [
      { id: 1, text: 'ttt1', done: true },
      { id: 2, text: 'ttt2', done: true },
      { id: 3, text: 'ttt3', done: false }
    ]
  },
  mutations: {
    // setUsername: (state, {username}) => {
    //   state.username = username
    //   sessionStorage.setItem('username', username)
    // },
    increment: state => state.count++,
    decrement: (state) => {
      console.log('decrement root', state)
      state.count = state.count - 1
    },
    increment2 (state) {
      // 变更状态
      state.count++
    },
    decrement2 (state) {
      // 变更状态
      state.count--
    },
    incrementPayload (state, payload) {
      console.log('do incrementPayload')
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
    },
    someMutation (state) {
      state.count++
    },
    someOtherMutation (state) {
      state.count--
    }
  },
  getters: {
    // username: state => state.username,
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // Getters 也可以接受其他 getters 作为第二个参数：
    donedoneTodos: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    decrementAsync (context) {
      setTimeout(() => {
        context.commit('decrement')
      }, 1000)
    },
    incrementAsyncPayload10 ({ commit, state }, payload) {
      console.log('do incrementAsyncPayload10')
      setTimeout(() => {
        console.log(state, payload)
        commit('incrementPayload', payload)
      }, 1000)
    },
    decrementAsyncPayload10 (context, payload) {
      setTimeout(() => {
        console.log(context.state, payload)
        context.commit('decrementPayload', payload)
      }, 1000)
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('actionA successed')
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },
    // 调用actionA
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        console.log('actionB successed')
        commit('someOtherMutation')
      })
    },
    // 两个异步请求
    actionC ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        console.log('actionA successed then!')
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('actionC successed')
            commit('someOtherMutation')
            resolve()
          }, 1000)
        })
      })
    }
  }
})
export default store
