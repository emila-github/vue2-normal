import Vue from 'vue'
import * as types from '../types'
const state = {
  count: 0,
  todos: [
    { id: 1, text: '1...', done: true },
    { id: 2, text: '2...', done: true },
    { id: 3, text: '3...', done: false }
  ]
}
// getters可以认为是 store 的计算属性
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  // Getters 也可以接受其他 getters 作为第二个参数
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
const mutations = {
  [types.VUEXEX_INCREMENT]: state => state.count++,
  [types.VUEXEX_DECREMENT]: (state) => {
    state.count = state.count - 1
  },
  // 提交载荷（Payload）
  'vuexex/incrementPayload' (state, payload) {
    // 变更状态
    state.count += payload.amount
  },
  // 提交载荷（Payload）
  'vuexexIncrementPayload' (state, payload) {
    // 变更状态
    state.count += payload.amount
  },
  'vuexex/decrementPayload' (state, payload) {
    // 变更状态
    state.count -= payload.amount
  },
  gotTestDataAA (state, payload) {
    // state.dataAA = payload
    Vue.set(state, 'dataAA', payload)
    console.log(state)
  }

}

const actions = {
  incrementSync ({ commit }) {
    console.log('actions incrementSync')
    commit(types.VUEXEX_INCREMENT)
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(types.VUEXEX_INCREMENT)
    }, 1000)
  },
  decrementAsync ({ commit }) {
    setTimeout(() => {
      commit(types.VUEXEX_DECREMENT)
    }, 1000)
  },
  incrementAsyncPayload10 ({ commit, state }, payload) {
    setTimeout(() => {
      console.log(state, payload)
      commit('vuexex/incrementPayload', payload)
    }, 1000)
  },
  decrementAsyncPayload10 (context, payload) {
    setTimeout(() => {
      console.log(context.state, payload)
      context.commit('vuexex/decrementPayload', payload)
    }, 1000)
  },
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.VUEXEX_INCREMENT)
        resolve()
      }, 1000)
    })
  },
  // 两个异步调用
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      setTimeout(() => {
        commit(types.VUEXEX_INCREMENT)
      }, 1000)
    })
  },
  async actionAA ({ commit }) {
    let datas = await Vue.http.get('/store/list.do').then(datas => datas.data.data.listData)
    commit('gotTestDataAA', datas)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
