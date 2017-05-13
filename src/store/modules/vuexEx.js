import * as types from '../types'
const state = {
  count: 0
}
const getters = {
}
const mutations = {
  [types.VUEXEX_INCREMENT]: state => state.count++,
  [types.VUEXEX_DECREMENT]: (state) => {
    state.count = state.count - 1
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
