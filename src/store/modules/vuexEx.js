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
    console.log()
    // 变更状态
    state.count += payload.amount
  },
  'vuexex/decrementPayload' (state, payload) {
    // 变更状态
    state.count -= payload.amount
  }

}

const actions = {

}
export default {
  state,
  getters,
  mutations,
  actions
}
